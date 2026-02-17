// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HISTORICAL GATE RANK DATA (2021-2024 averaged)
//  Source: IIT official GATE statistics + analysis
//  Format: [marks, rank] — interpolated between points
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface RankDataPoint {
  marks: number;
  rank: number;
}

export interface BranchData {
  name: string;
  fullName: string;
  code: string;
  totalAppeared: number;
  avgQualified: number;
  cutoffs: Record<string, number>; // category -> cutoff marks
  rankData: {
    general: RankDataPoint[];
    obc: RankDataPoint[];
    sc_st: RankDataPoint[];
    ews: RankDataPoint[];
  };
  color: string;
  icon: string;
}

export const GATE_BRANCH_DATA: Record<string, BranchData> = {
  CSE: {
    name: "CSE",
    fullName: "Computer Science & Engineering",
    code: "CS",
    totalAppeared: 145000,
    avgQualified: 23000,
    cutoffs: { general: 25.0, obc: 22.5, sc_st: 16.67, ews: 22.5 },
    color: "#00F5FF",
    icon: "💻",
    rankData: {
      general: [
        { marks: 90, rank: 1 },
        { marks: 85, rank: 5 },
        { marks: 82, rank: 15 },
        { marks: 80, rank: 30 },
        { marks: 77, rank: 80 },
        { marks: 75, rank: 150 },
        { marks: 72, rank: 300 },
        { marks: 70, rank: 500 },
        { marks: 68, rank: 800 },
        { marks: 65, rank: 1400 },
        { marks: 62, rank: 2200 },
        { marks: 60, rank: 3000 },
        { marks: 58, rank: 4000 },
        { marks: 55, rank: 5800 },
        { marks: 52, rank: 7500 },
        { marks: 50, rank: 9000 },
        { marks: 47, rank: 11500 },
        { marks: 45, rank: 13500 },
        { marks: 42, rank: 16000 },
        { marks: 40, rank: 18500 },
        { marks: 35, rank: 22000 },
        { marks: 30, rank: 28000 },
        { marks: 25, rank: 35000 },
      ],
      obc: [
        { marks: 90, rank: 1 },
        { marks: 82, rank: 10 },
        { marks: 75, rank: 80 },
        { marks: 70, rank: 350 },
        { marks: 65, rank: 1000 },
        { marks: 60, rank: 2200 },
        { marks: 55, rank: 4200 },
        { marks: 50, rank: 6800 },
        { marks: 45, rank: 10000 },
        { marks: 40, rank: 14000 },
        { marks: 35, rank: 18000 },
        { marks: 25, rank: 30000 },
      ],
      sc_st: [
        { marks: 90, rank: 1 },
        { marks: 75, rank: 50 },
        { marks: 65, rank: 500 },
        { marks: 55, rank: 2000 },
        { marks: 45, rank: 5500 },
        { marks: 35, rank: 12000 },
        { marks: 20, rank: 25000 },
      ],
      ews: [
        { marks: 90, rank: 1 },
        { marks: 82, rank: 10 },
        { marks: 75, rank: 100 },
        { marks: 65, rank: 900 },
        { marks: 55, rank: 3800 },
        { marks: 45, rank: 9500 },
        { marks: 30, rank: 25000 },
      ],
    },
  },

  DA: {
    name: "DA",
    fullName: "Data Science & Artificial Intelligence",
    code: "DA",
    totalAppeared: 22000,
    avgQualified: 4500,
    cutoffs: { general: 25.0, obc: 22.5, sc_st: 16.67, ews: 22.5 },
    color: "#8B5CF6",
    icon: "🤖",
    rankData: {
      general: [
        { marks: 85, rank: 1 },
        { marks: 80, rank: 5 },
        { marks: 75, rank: 25 },
        { marks: 72, rank: 60 },
        { marks: 70, rank: 100 },
        { marks: 67, rank: 200 },
        { marks: 65, rank: 350 },
        { marks: 62, rank: 600 },
        { marks: 60, rank: 900 },
        { marks: 57, rank: 1400 },
        { marks: 55, rank: 1900 },
        { marks: 52, rank: 2600 },
        { marks: 50, rank: 3300 },
        { marks: 47, rank: 4000 },
        { marks: 45, rank: 4800 },
        { marks: 40, rank: 6000 },
        { marks: 35, rank: 8000 },
        { marks: 30, rank: 10000 },
        { marks: 25, rank: 13000 },
      ],
      obc: [
        { marks: 85, rank: 1 },
        { marks: 70, rank: 60 },
        { marks: 60, rank: 600 },
        { marks: 50, rank: 2200 },
        { marks: 40, rank: 5000 },
        { marks: 30, rank: 9500 },
        { marks: 25, rank: 12000 },
      ],
      sc_st: [
        { marks: 85, rank: 1 },
        { marks: 65, rank: 200 },
        { marks: 50, rank: 1000 },
        { marks: 35, rank: 4000 },
        { marks: 20, rank: 10000 },
      ],
      ews: [
        { marks: 85, rank: 1 },
        { marks: 70, rank: 70 },
        { marks: 55, rank: 1500 },
        { marks: 40, rank: 5500 },
        { marks: 25, rank: 12000 },
      ],
    },
  },

  ME: {
    name: "ME",
    fullName: "Mechanical Engineering",
    code: "ME",
    totalAppeared: 187000,
    avgQualified: 28000,
    cutoffs: { general: 28.52, obc: 25.67, sc_st: 19.01, ews: 25.67 },
    color: "#F59E0B",
    icon: "⚙️",
    rankData: {
      general: [
        { marks: 88, rank: 1 },
        { marks: 82, rank: 10 },
        { marks: 78, rank: 40 },
        { marks: 75, rank: 100 },
        { marks: 72, rank: 250 },
        { marks: 70, rank: 450 },
        { marks: 67, rank: 800 },
        { marks: 65, rank: 1300 },
        { marks: 62, rank: 2000 },
        { marks: 60, rank: 2900 },
        { marks: 57, rank: 4200 },
        { marks: 55, rank: 5500 },
        { marks: 52, rank: 7500 },
        { marks: 50, rank: 9500 },
        { marks: 47, rank: 12000 },
        { marks: 45, rank: 15000 },
        { marks: 42, rank: 18000 },
        { marks: 40, rank: 21000 },
        { marks: 35, rank: 28000 },
        { marks: 30, rank: 36000 },
        { marks: 28, rank: 42000 },
      ],
      obc: [
        { marks: 88, rank: 1 },
        { marks: 75, rank: 80 },
        { marks: 65, rank: 1000 },
        { marks: 55, rank: 4500 },
        { marks: 45, rank: 12000 },
        { marks: 35, rank: 24000 },
        { marks: 28, rank: 38000 },
      ],
      sc_st: [
        { marks: 88, rank: 1 },
        { marks: 70, rank: 300 },
        { marks: 55, rank: 3000 },
        { marks: 40, rank: 15000 },
        { marks: 25, rank: 35000 },
      ],
      ews: [
        { marks: 88, rank: 1 },
        { marks: 75, rank: 100 },
        { marks: 60, rank: 2500 },
        { marks: 45, rank: 12000 },
        { marks: 30, rank: 34000 },
      ],
    },
  },

  ECE: {
    name: "ECE",
    fullName: "Electronics & Communication Engineering",
    code: "EC",
    totalAppeared: 112000,
    avgQualified: 17000,
    cutoffs: { general: 25.0, obc: 22.5, sc_st: 16.67, ews: 22.5 },
    color: "#10B981",
    icon: "📡",
    rankData: {
      general: [
        { marks: 90, rank: 1 },
        { marks: 82, rank: 15 },
        { marks: 76, rank: 80 },
        { marks: 72, rank: 250 },
        { marks: 68, rank: 700 },
        { marks: 65, rank: 1200 },
        { marks: 62, rank: 2000 },
        { marks: 60, rank: 2800 },
        { marks: 57, rank: 4200 },
        { marks: 55, rank: 5500 },
        { marks: 52, rank: 7500 },
        { marks: 50, rank: 9200 },
        { marks: 45, rank: 13000 },
        { marks: 40, rank: 17500 },
        { marks: 35, rank: 23000 },
        { marks: 30, rank: 30000 },
        { marks: 25, rank: 38000 },
      ],
      obc: [
        { marks: 90, rank: 1 },
        { marks: 72, rank: 180 },
        { marks: 62, rank: 1500 },
        { marks: 52, rank: 6000 },
        { marks: 40, rank: 14500 },
        { marks: 28, rank: 28000 },
      ],
      sc_st: [
        { marks: 90, rank: 1 },
        { marks: 65, rank: 800 },
        { marks: 50, rank: 5500 },
        { marks: 35, rank: 16000 },
        { marks: 22, rank: 35000 },
      ],
      ews: [
        { marks: 90, rank: 1 },
        { marks: 70, rank: 500 },
        { marks: 55, rank: 4800 },
        { marks: 40, rank: 15500 },
        { marks: 25, rank: 34000 },
      ],
    },
  },

  EE: {
    name: "EE",
    fullName: "Electrical Engineering",
    code: "EE",
    totalAppeared: 95000,
    avgQualified: 15000,
    cutoffs: { general: 25.4, obc: 22.86, sc_st: 16.93, ews: 22.86 },
    color: "#F59E0B",
    icon: "⚡",
    rankData: {
      general: [
        { marks: 88, rank: 1 },
        { marks: 80, rank: 20 },
        { marks: 74, rank: 100 },
        { marks: 70, rank: 300 },
        { marks: 66, rank: 800 },
        { marks: 62, rank: 1800 },
        { marks: 58, rank: 3200 },
        { marks: 55, rank: 4800 },
        { marks: 52, rank: 6500 },
        { marks: 48, rank: 9000 },
        { marks: 45, rank: 11500 },
        { marks: 40, rank: 15500 },
        { marks: 35, rank: 20000 },
        { marks: 28, rank: 30000 },
      ],
      obc: [
        { marks: 88, rank: 1 },
        { marks: 70, rank: 250 },
        { marks: 58, rank: 2600 },
        { marks: 45, rank: 9500 },
        { marks: 30, rank: 24000 },
      ],
      sc_st: [
        { marks: 88, rank: 1 },
        { marks: 62, rank: 1200 },
        { marks: 45, rank: 8000 },
        { marks: 28, rank: 28000 },
      ],
      ews: [
        { marks: 88, rank: 1 },
        { marks: 68, rank: 600 },
        { marks: 50, rank: 7000 },
        { marks: 30, rank: 27000 },
      ],
    },
  },

  CE: {
    name: "CE",
    fullName: "Civil Engineering",
    code: "CE",
    totalAppeared: 122000,
    avgQualified: 19000,
    cutoffs: { general: 26.02, obc: 23.42, sc_st: 17.35, ews: 23.42 },
    color: "#64748B",
    icon: "🏗️",
    rankData: {
      general: [
        { marks: 85, rank: 1 },
        { marks: 78, rank: 20 },
        { marks: 73, rank: 100 },
        { marks: 68, rank: 400 },
        { marks: 64, rank: 1000 },
        { marks: 60, rank: 2000 },
        { marks: 56, rank: 3500 },
        { marks: 52, rank: 5500 },
        { marks: 48, rank: 8000 },
        { marks: 44, rank: 11000 },
        { marks: 40, rank: 14000 },
        { marks: 35, rank: 19000 },
        { marks: 30, rank: 25000 },
        { marks: 26, rank: 32000 },
      ],
      obc: [
        { marks: 85, rank: 1 },
        { marks: 68, rank: 350 },
        { marks: 55, rank: 3000 },
        { marks: 40, rank: 12000 },
        { marks: 27, rank: 30000 },
      ],
      sc_st: [
        { marks: 85, rank: 1 },
        { marks: 60, rank: 1500 },
        { marks: 40, rank: 10000 },
        { marks: 20, rank: 28000 },
      ],
      ews: [
        { marks: 85, rank: 1 },
        { marks: 65, rank: 800 },
        { marks: 48, rank: 8500 },
        { marks: 28, rank: 28000 },
      ],
    },
  },

  CH: {
    name: "CH",
    fullName: "Chemical Engineering",
    code: "CH",
    totalAppeared: 28000,
    avgQualified: 4800,
    cutoffs: { general: 28.08, obc: 25.27, sc_st: 18.72, ews: 25.27 },
    color: "#06B6D4",
    icon: "🧪",
    rankData: {
      general: [
        { marks: 83, rank: 1 },
        { marks: 76, rank: 15 },
        { marks: 70, rank: 80 },
        { marks: 66, rank: 200 },
        { marks: 62, rank: 500 },
        { marks: 58, rank: 1000 },
        { marks: 54, rank: 1800 },
        { marks: 50, rank: 2800 },
        { marks: 46, rank: 3800 },
        { marks: 42, rank: 4800 },
        { marks: 38, rank: 6000 },
        { marks: 30, rank: 9000 },
        { marks: 25, rank: 13000 },
      ],
      obc: [
        { marks: 83, rank: 1 },
        { marks: 65, rank: 400 },
        { marks: 50, rank: 2500 },
        { marks: 35, rank: 7000 },
        { marks: 25, rank: 12000 },
      ],
      sc_st: [
        { marks: 83, rank: 1 },
        { marks: 55, rank: 1200 },
        { marks: 35, rank: 5500 },
        { marks: 22, rank: 12000 },
      ],
      ews: [
        { marks: 83, rank: 1 },
        { marks: 60, rank: 800 },
        { marks: 40, rank: 5000 },
        { marks: 25, rank: 12000 },
      ],
    },
  },

  PI: {
    name: "PI",
    fullName: "Production & Industrial Engineering",
    code: "PI",
    totalAppeared: 14000,
    avgQualified: 2500,
    cutoffs: { general: 26.5, obc: 23.85, sc_st: 17.67, ews: 23.85 },
    color: "#84CC16",
    icon: "🏭",
    rankData: {
      general: [
        { marks: 80, rank: 1 },
        { marks: 72, rank: 20 },
        { marks: 66, rank: 80 },
        { marks: 60, rank: 250 },
        { marks: 55, rank: 600 },
        { marks: 50, rank: 1100 },
        { marks: 45, rank: 1800 },
        { marks: 40, rank: 2500 },
        { marks: 35, rank: 3500 },
        { marks: 30, rank: 5000 },
        { marks: 27, rank: 7000 },
      ],
      obc: [
        { marks: 80, rank: 1 },
        { marks: 60, rank: 200 },
        { marks: 45, rank: 1500 },
        { marks: 30, rank: 5500 },
      ],
      sc_st: [
        { marks: 80, rank: 1 },
        { marks: 50, rank: 800 },
        { marks: 30, rank: 4500 },
        { marks: 20, rank: 8000 },
      ],
      ews: [
        { marks: 80, rank: 1 },
        { marks: 55, rank: 600 },
        { marks: 35, rank: 4000 },
        { marks: 25, rank: 7500 },
      ],
    },
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PSU CUTOFF DATA (min GATE score for shortlisting)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export interface PSUInfo {
  name: string;
  shortName: string;
  minScore: number;
  branches: string[];
  category: "top-tier" | "tier-2" | "tier-3";
  package: string;
}

export const PSU_DATA: PSUInfo[] = [
  { name: "Bharat Electronics Limited", shortName: "BEL", minScore: 600, branches: ["ECE", "EE", "ME", "CSE"], category: "top-tier", package: "₹7–10 LPA" },
  { name: "ONGC", shortName: "ONGC", minScore: 580, branches: ["ME", "EE", "CE", "CH"], category: "top-tier", package: "₹12–18 LPA" },
  { name: "NTPC", shortName: "NTPC", minScore: 570, branches: ["ME", "EE", "CE"], category: "top-tier", package: "₹10–15 LPA" },
  { name: "BHEL", shortName: "BHEL", minScore: 560, branches: ["ME", "EE", "ECE"], category: "top-tier", package: "₹8–13 LPA" },
  { name: "Power Grid", shortName: "PGCIL", minScore: 550, branches: ["EE", "ECE"], category: "top-tier", package: "₹9–14 LPA" },
  { name: "BPCL", shortName: "BPCL", minScore: 580, branches: ["ME", "EE", "CH"], category: "top-tier", package: "₹14–20 LPA" },
  { name: "HPCL", shortName: "HPCL", minScore: 580, branches: ["ME", "EE", "CH", "CE"], category: "top-tier", package: "₹13–18 LPA" },
  { name: "IOCL", shortName: "IOCL", minScore: 560, branches: ["ME", "EE", "CH", "CE", "ECE", "CSE"], category: "top-tier", package: "₹13–17 LPA" },
  { name: "Coal India", shortName: "CIL", minScore: 520, branches: ["ME", "EE", "CE", "CH"], category: "tier-2", package: "₹8–12 LPA" },
  { name: "GAIL", shortName: "GAIL", minScore: 550, branches: ["ME", "EE", "CH", "CE"], category: "tier-2", package: "₹10–16 LPA" },
  { name: "AAI", shortName: "AAI", minScore: 500, branches: ["ECE", "EE", "CSE"], category: "tier-2", package: "₹7–11 LPA" },
  { name: "DRDO", shortName: "DRDO", minScore: 550, branches: ["CSE", "ECE", "ME", "EE"], category: "top-tier", package: "₹9–14 LPA" },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  IIT/NIT ADMISSION RANK CUTOFFS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export interface InstituteCutoff {
  institute: string;
  tier: "IIT-Top" | "IIT-Mid" | "NIT-Top" | "NIT-Mid";
  rankRange: { min: number; max: number };
  branches: string[];
}

export const INSTITUTE_CUTOFFS: InstituteCutoff[] = [
  { institute: "IIT Bombay", tier: "IIT-Top", rankRange: { min: 1, max: 200 }, branches: ["CSE", "DA", "EE", "ME"] },
  { institute: "IIT Delhi", tier: "IIT-Top", rankRange: { min: 1, max: 250 }, branches: ["CSE", "DA", "EE", "ME"] },
  { institute: "IIT Madras", tier: "IIT-Top", rankRange: { min: 1, max: 300 }, branches: ["CSE", "DA", "EE", "ME", "CE"] },
  { institute: "IIT Kharagpur", tier: "IIT-Top", rankRange: { min: 1, max: 400 }, branches: ["CSE", "DA", "ECE", "ME", "EE", "CE"] },
  { institute: "IIT Kanpur", tier: "IIT-Top", rankRange: { min: 1, max: 350 }, branches: ["CSE", "DA", "EE", "ME"] },
  { institute: "IIT Roorkee", tier: "IIT-Mid", rankRange: { min: 100, max: 600 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
  { institute: "IIT Hyderabad", tier: "IIT-Mid", rankRange: { min: 200, max: 900 }, branches: ["CSE", "DA", "ECE", "ME"] },
  { institute: "IIT Guwahati", tier: "IIT-Mid", rankRange: { min: 250, max: 1000 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
  { institute: "IIT BHU", tier: "IIT-Mid", rankRange: { min: 300, max: 1500 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
  { institute: "IIT Indore", tier: "IIT-Mid", rankRange: { min: 400, max: 2000 }, branches: ["CSE", "ECE", "ME", "EE"] },
  { institute: "NIT Trichy", tier: "NIT-Top", rankRange: { min: 500, max: 3000 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
  { institute: "NIT Warangal", tier: "NIT-Top", rankRange: { min: 600, max: 4000 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
  { institute: "NIT Surathkal", tier: "NIT-Top", rankRange: { min: 700, max: 5000 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
  { institute: "NIT Calicut", tier: "NIT-Mid", rankRange: { min: 1000, max: 7000 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
  { institute: "NIT Rourkela", tier: "NIT-Mid", rankRange: { min: 1200, max: 8000 }, branches: ["CSE", "ECE", "ME", "EE", "CE"] },
];
