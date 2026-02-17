import {
  GATE_BRANCH_DATA,
  PSU_DATA,
  INSTITUTE_CUTOFFS,
  RankDataPoint,
  InstituteCutoff,
  PSUInfo,
} from "./rankData";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TYPES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export type Category = "general" | "obc" | "sc_st" | "ews";

export interface PredictionInput {
  branch: string;
  category: Category;
  marks: number;
}

export interface PredictionResult {
  rank: number;
  rankRange: { min: number; max: number };
  percentile: number;
  gateScore: number;
  qualified: boolean;
  cutoffMarks: number;
  totalAppeared: number;
  probableInstitutes: InstituteCutoff[];
  eligiblePSUs: PSUInfo[];
  branchInfo: {
    name: string;
    fullName: string;
    color: string;
    icon: string;
  };
  performanceLevel: "exceptional" | "excellent" | "good" | "average" | "below-average";
  percentileBreakdown: {
    label: string;
    value: number;
    color: string;
  }[];
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  LINEAR INTERPOLATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function interpolateRank(marks: number, data: RankDataPoint[]): number {
  // Sort descending by marks
  const sorted = [...data].sort((a, b) => b.marks - a.marks);

  // Edge cases
  if (marks >= sorted[0].marks) return sorted[0].rank;
  if (marks <= sorted[sorted.length - 1].marks) return sorted[sorted.length - 1].rank;

  // Find surrounding points
  for (let i = 0; i < sorted.length - 1; i++) {
    const upper = sorted[i];
    const lower = sorted[i + 1];

    if (marks <= upper.marks && marks >= lower.marks) {
      // Linear interpolation: rank increases as marks decreases
      const t = (upper.marks - marks) / (upper.marks - lower.marks);
      const rank = upper.rank + t * (lower.rank - upper.rank);
      return Math.round(rank);
    }
  }

  return sorted[sorted.length - 1].rank;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  GATE SCORE FORMULA
//  Score = 350 + 650 * (M – Mq) / (Mt – Mq)
//  Where M=marks, Mq=qualifying marks, Mt=topper marks
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function calculateGateScore(marks: number, cutoff: number): number {
  const topperMarks = 90; // approximate
  if (marks < cutoff) return 0;

  const score = 350 + 650 * ((marks - cutoff) / (topperMarks - cutoff));
  return Math.min(1000, Math.max(0, Math.round(score)));
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PERCENTILE CALCULATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function calculatePercentile(rank: number, totalAppeared: number): number {
  if (rank <= 0 || totalAppeared <= 0) return 0;
  const percentile = ((totalAppeared - rank) / totalAppeared) * 100;
  return Math.max(0, Math.min(99.99, parseFloat(percentile.toFixed(2))));
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PERFORMANCE LEVEL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function getPerformanceLevel(
  percentile: number
): PredictionResult["performanceLevel"] {
  if (percentile >= 99) return "exceptional";
  if (percentile >= 97) return "excellent";
  if (percentile >= 90) return "good";
  if (percentile >= 75) return "average";
  return "below-average";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN PREDICTION FUNCTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function predictRank(input: PredictionInput): PredictionResult {
  const { branch, category, marks } = input;

  const branchData = GATE_BRANCH_DATA[branch];
  if (!branchData) throw new Error(`Branch ${branch} not found`);

  const categoryKey = category as Category;
  const rankData = branchData.rankData[categoryKey];
  if (!rankData) throw new Error(`Category ${category} data not found`);

  const cutoffMarks = branchData.cutoffs[category] ?? branchData.cutoffs.general;
  const qualified = marks >= cutoffMarks;

  // Core calculations
  const baseRank = interpolateRank(marks, rankData);

  // Add ±5% variance range for realism
  const variance = Math.round(baseRank * 0.05);
  const rankRange = {
    min: Math.max(1, baseRank - variance),
    max: baseRank + variance,
  };

  const percentile = calculatePercentile(baseRank, branchData.totalAppeared);
  const gateScore = calculateGateScore(marks, cutoffMarks);
  const performanceLevel = getPerformanceLevel(percentile);

  // Filter probable institutes based on rank and branch
  const probableInstitutes = INSTITUTE_CUTOFFS.filter(
    (inst) =>
      inst.branches.includes(branch) &&
      baseRank >= inst.rankRange.min &&
      baseRank <= inst.rankRange.max * 1.5 // allow slight overshoot
  ).slice(0, 6);

  // Filter eligible PSUs based on GATE score and branch
  const eligiblePSUs = PSU_DATA.filter(
    (psu) =>
      psu.branches.includes(branch) && gateScore >= psu.minScore
  ).slice(0, 5);

  // Percentile breakdown for visualization
  const percentileBreakdown = [
    { label: "Your Percentile", value: percentile, color: "#00F5FF" },
    { label: "Qualifying Threshold", value: calculatePercentile(branchData.avgQualified, branchData.totalAppeared), color: "#8B5CF6" },
    { label: "Top IIT Threshold", value: 99.5, color: "#F59E0B" },
  ];

  return {
    rank: baseRank,
    rankRange,
    percentile,
    gateScore,
    qualified,
    cutoffMarks,
    totalAppeared: branchData.totalAppeared,
    probableInstitutes,
    eligiblePSUs,
    branchInfo: {
      name: branchData.name,
      fullName: branchData.fullName,
      color: branchData.color,
      icon: branchData.icon,
    },
    performanceLevel,
    percentileBreakdown,
  };
}

export type { InstituteCutoff, PSUInfo };
