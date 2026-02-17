"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CountUp } from "@/components/ui/CountUp";
import { Navbar } from "@/components/layout/Navbar";
import type { PredictionResult } from "@/lib/predictor";

// ── Performance level configs ─────────────────────────
const PERF_CONFIG: Record<
  string,
  { label: string; color: string; emoji: string; desc: string }
> = {
  exceptional: {
    label: "Exceptional",
    color: "#00F5FF",
    emoji: "🌟",
    desc: "Top 1% of all candidates. IIT admit is highly likely!",
  },
  excellent: {
    label: "Excellent",
    color: "#8B5CF6",
    emoji: "🚀",
    desc: "Top 3% of candidates. Strong IIT/NIT prospects.",
  },
  good: {
    label: "Good",
    color: "#10B981",
    emoji: "✅",
    desc: "Top 10%. Good NIT/GFTI prospects and select IITs.",
  },
  average: {
    label: "Average",
    color: "#F59E0B",
    emoji: "📈",
    desc: "Top 25%. Good foundation for PSU eligibility.",
  },
  "below-average": {
    label: "Below Average",
    color: "#EF4444",
    emoji: "💪",
    desc: "Qualified but need improvement for top institutes.",
  },
};

// ── Circular Percentile Gauge ─────────────────────────
function PercentileGauge({ percentile, color }: { percentile: number; color: string }) {
  const radius = 70;
  const circ = 2 * Math.PI * radius;
  const pct = Math.min(percentile, 100);
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="relative inline-flex items-center justify-center w-48 h-48">
      <svg className="absolute inset-0 -rotate-90" width="192" height="192" viewBox="0 0 192 192">
        {/* Track */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="10"
        />
        {/* Progress */}
        <motion.circle
          cx="96"
          cy="96"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
        />
      </svg>
      {/* Center text */}
      <div className="text-center z-10">
        <div
          className="font-display text-4xl font-bold"
          style={{ color, textShadow: `0 0 20px ${color}60` }}
        >
          <CountUp end={percentile} decimals={2} suffix="%" separator={false} />
        </div>
        <div className="font-mono text-xs text-white/40 mt-1">Percentile</div>
      </div>
    </div>
  );
}

// ── GATE Score Card ────────────────────────────────────
function GateScoreBar({ score }: { score: number }) {
  const pct = (score / 1000) * 100;

  const getScoreColor = () => {
    if (score >= 750) return "#00F5FF";
    if (score >= 600) return "#8B5CF6";
    if (score >= 450) return "#F59E0B";
    return "#10B981";
  };

  const color = getScoreColor();

  return (
    <div className="p-6 glass-card rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-mono text-xs text-white/40 uppercase tracking-wider mb-1">
            GATE Score
          </div>
          <div className="font-display text-4xl font-bold" style={{ color }}>
            <CountUp end={score} />
            <span className="text-xl text-white/30 ml-1">/ 1000</span>
          </div>
        </div>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: `${color}15`, border: `2px solid ${color}40` }}
        >
          <span className="font-display font-bold text-lg" style={{ color }}>
            {score >= 750 ? "A+" : score >= 600 ? "A" : score >= 450 ? "B" : "C"}
          </span>
        </div>
      </div>

      {/* Score bar */}
      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: "0%" }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>
      <div className="flex justify-between mt-2 font-mono text-xs text-white/20">
        <span>0</span>
        <span>250</span>
        <span>500</span>
        <span>750</span>
        <span>1000</span>
      </div>
    </div>
  );
}

// ── Institute Card ─────────────────────────────────────
function InstituteCard({
  institute,
  index,
}: {
  institute: { institute: string; tier: string; rankRange: { min: number; max: number }; branches: string[] };
  index: number;
}) {
  const tierColors: Record<string, string> = {
    "IIT-Top": "#00F5FF",
    "IIT-Mid": "#8B5CF6",
    "NIT-Top": "#F59E0B",
    "NIT-Mid": "#10B981",
  };
  const color = tierColors[institute.tier] || "#64748B";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 + 0.5 }}
      className="flex items-center justify-between p-4 rounded-xl glass-card hover-lift group"
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-xs"
          style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
        >
          {index + 1}
        </div>
        <div>
          <div className="font-display text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors">
            {institute.institute}
          </div>
          <div className="font-mono text-xs text-white/40 mt-0.5">
            Rank {institute.rankRange.min.toLocaleString()} – {institute.rankRange.max.toLocaleString()}
          </div>
        </div>
      </div>
      <div
        className="px-2 py-1 rounded-md font-mono text-xs"
        style={{ color, background: `${color}12`, border: `1px solid ${color}25` }}
      >
        {institute.tier}
      </div>
    </motion.div>
  );
}

// ── PSU Card ───────────────────────────────────────────
function PSUCard({
  psu,
  index,
}: {
  psu: { name: string; shortName: string; category: string; package: string };
  index: number;
}) {
  const catColors: Record<string, string> = {
    "top-tier": "#00F5FF",
    "tier-2": "#8B5CF6",
    "tier-3": "#F59E0B",
  };
  const color = catColors[psu.category] || "#64748B";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 + 0.6 }}
      className="p-4 rounded-xl glass-card hover-lift"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="font-display text-sm font-bold text-white">{psu.shortName}</div>
          <div className="font-body text-xs text-white/40 mt-0.5">{psu.name}</div>
        </div>
        <div
          className="px-2 py-0.5 rounded font-mono text-xs"
          style={{ color, background: `${color}12`, border: `1px solid ${color}20` }}
        >
          {psu.category}
        </div>
      </div>
      <div className="font-mono text-xs text-neon-amber/80">{psu.package}</div>
    </motion.div>
  );
}

// ── Main Results Component ────────────────────────────
export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [input, setInput] = useState<{ branch: string; category: string; marks: number } | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const resultData = sessionStorage.getItem("gate_result");
    const inputData = sessionStorage.getItem("gate_input");

    if (!resultData || !inputData) {
      router.replace("/dashboard");
      return;
    }

    setResult(JSON.parse(resultData));
    setInput(JSON.parse(inputData));

    // Delay reveal for dramatic effect
    setTimeout(() => setRevealed(true), 300);
  }, [router]);

  if (!result || !input) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const perf = PERF_CONFIG[result.performanceLevel] ?? PERF_CONFIG.average;

  return (
    <div className="min-h-screen bg-void">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 grid-bg opacity-20 z-0" />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${result.branchInfo.color}12 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-xs text-white/30 mb-8">
            <Link href="/dashboard" className="hover:text-neon-cyan transition-colors">
              ← Back to Predictor
            </Link>
          </div>

          {/* ── RANK REVEAL ─────────────────────────────── */}
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-12"
              >
                {/* Status badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-mono text-xs tracking-wider uppercase"
                  style={{
                    color: result.qualified ? "#00F5FF" : "#EF4444",
                    background: result.qualified
                      ? "rgba(0, 245, 255, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                    border: `1px solid ${result.qualified ? "rgba(0, 245, 255, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: result.qualified ? "#00F5FF" : "#EF4444" }} />
                  {result.qualified ? "✓ QUALIFIED" : "✗ NOT QUALIFIED"} · {result.branchInfo.name}
                </div>

                {/* Big rank number */}
                <div className="relative inline-block">
                  {/* Glow rings */}
                  <div
                    className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                    style={{ background: result.branchInfo.color }}
                  />

                  <div className="relative glass-card-strong py-12 px-16 rounded-3xl rank-reveal">
                    <div className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
                      Predicted Rank
                    </div>
                    <div
                      className="font-display text-8xl font-bold leading-none"
                      style={{
                        color: result.branchInfo.color,
                        textShadow: `0 0 40px ${result.branchInfo.color}60`,
                      }}
                    >
                      <CountUp end={result.rank} duration={2500} />
                    </div>
                    <div className="font-mono text-sm text-white/30 mt-3">
                      Range: {result.rankRange.min.toLocaleString()} – {result.rankRange.max.toLocaleString()}
                    </div>

                    {/* Performance badge */}
                    <div className="mt-6 flex justify-center">
                      <div
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-body text-sm"
                        style={{
                          background: `${perf.color}15`,
                          color: perf.color,
                          border: `1px solid ${perf.color}30`,
                        }}
                      >
                        {perf.emoji} {perf.label} Performance
                      </div>
                    </div>
                    <p className="font-body text-sm text-white/40 mt-2 max-w-xs mx-auto">
                      {perf.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── ANALYTICS GRID ───────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* Percentile Gauge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card-strong p-8 rounded-2xl flex flex-col items-center"
            >
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider mb-6">
                Percentile Rank
              </div>
              <PercentileGauge
                percentile={result.percentile}
                color={result.branchInfo.color}
              />
              <div className="mt-6 text-center">
                <p className="font-body text-sm text-white/50">
                  You scored better than{" "}
                  <span style={{ color: result.branchInfo.color }} className="font-semibold">
                    {result.percentile.toFixed(2)}%
                  </span>{" "}
                  of all {result.branchInfo.name} candidates
                </p>
              </div>
            </motion.div>

            {/* Stats column */}
            <div className="space-y-4">
              {/* GATE Score */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <GateScoreBar score={result.gateScore} />
              </motion.div>

              {/* Key stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { label: "Your Marks", value: `${input.marks}/100`, color: result.branchInfo.color },
                  { label: "Category", value: input.category.toUpperCase(), color: "#8B5CF6" },
                  { label: "Cutoff", value: `${result.cutoffMarks}`, color: "#F59E0B" },
                  { label: "Appeared", value: (result.totalAppeared / 1000).toFixed(0) + "K", color: "#10B981" },
                ].map((s) => (
                  <div key={s.label} className="glass-card p-4 rounded-xl">
                    <div className="font-mono text-xs text-white/30 uppercase tracking-wider mb-1">
                      {s.label}
                    </div>
                    <div
                      className="font-display text-xl font-bold"
                      style={{ color: s.color }}
                    >
                      {s.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── INSTITUTES ───────────────────────────────── */}
          {result.probableInstitutes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass-card-strong p-8 rounded-2xl mb-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Probable Institutes
                  </h3>
                  <p className="font-body text-sm text-white/40">
                    Based on your predicted rank for {result.branchInfo.name}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {result.probableInstitutes.map((inst, i) => (
                  <InstituteCard key={inst.institute} institute={inst} index={i} />
                ))}
              </div>
              {result.probableInstitutes.length === 0 && (
                <div className="text-center py-8">
                  <p className="font-body text-white/40">
                    No institutes found in this rank range. Try improving your score.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* ── PSU ELIGIBILITY ─────────────────────────── */}
          {result.eligiblePSUs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="glass-card-strong p-8 rounded-2xl mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏭</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    PSU Eligibility
                  </h3>
                  <p className="font-body text-sm text-white/40">
                    Government companies you qualify for shortlisting
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.eligiblePSUs.map((psu, i) => (
                  <PSUCard key={psu.shortName} psu={psu} index={i} />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── ACTION BUTTONS ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/dashboard"
              className="flex-1 py-4 px-6 rounded-2xl border border-neon-cyan/30 text-neon-cyan font-body text-center hover:border-neon-cyan hover:shadow-neon-cyan transition-all font-semibold"
            >
              ← Predict Again
            </Link>
            <button
              onClick={() => {
                const text = `My GATE 2026 Predicted Rank: ${result.rank.toLocaleString()}\nPercentile: ${result.percentile}%\nGATE Score: ${result.gateScore}/1000\nBranch: ${result.branchInfo.fullName}`;
                navigator.clipboard.writeText(text);
              }}
              className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-violet text-void font-body font-bold text-center hover:shadow-neon-cyan transition-all"
            >
              📋 Copy Results
            </button>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="font-body text-xs text-white/20 text-center mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            ⚠️ This is an estimated prediction based on historical GATE data (2021–2024). Actual ranks
            depend on exam difficulty, normalization, and total candidates in GATE 2026. Use this for
            guidance only.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
