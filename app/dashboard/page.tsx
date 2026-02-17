"use client";

import { useState, Suspense, lazy } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { NeonButtonSolid } from "@/components/ui/NeonButton";

const DashboardScene = lazy(() =>
  import("@/components/three/DashboardScene").then((m) => ({ default: m.DashboardScene }))
);

// ── Data ─────────────────────────────────────────────
const BRANCHES = [
  { key: "CSE", label: "CSE", full: "Computer Science & Engineering", icon: "💻", color: "#00F5FF" },
  { key: "DA", label: "DA", full: "Data Science & AI", icon: "🤖", color: "#8B5CF6" },
  { key: "ME", label: "ME", full: "Mechanical Engineering", icon: "⚙️", color: "#F59E0B" },
  { key: "ECE", label: "ECE", full: "Electronics & Comm.", icon: "📡", color: "#10B981" },
  { key: "EE", label: "EE", full: "Electrical Engineering", icon: "⚡", color: "#FBBF24" },
  { key: "CE", label: "Civil", full: "Civil Engineering", icon: "🏗️", color: "#94A3B8" },
  { key: "CH", label: "Chem.", full: "Chemical Engineering", icon: "🧪", color: "#06B6D4" },
  { key: "PI", label: "PI", full: "Production & Industrial", icon: "🏭", color: "#84CC16" },
];

const CATEGORIES = [
  { key: "general", label: "General", desc: "Unreserved", color: "#00F5FF" },
  { key: "obc", label: "OBC-NCL", desc: "Other Backward Classes", color: "#8B5CF6" },
  { key: "sc_st", label: "SC/ST", desc: "Scheduled Caste/Tribe", color: "#F59E0B" },
  { key: "ews", label: "EWS", desc: "Economically Weaker Section", color: "#10B981" },
];

const MARK_RANGES = [
  { min: 0, max: 30, label: "0–30", desc: "Beginner Zone" },
  { min: 30, max: 50, label: "30–50", desc: "Qualifying Zone" },
  { min: 50, max: 65, label: "50–65", desc: "Competitive Zone" },
  { min: 65, max: 80, label: "65–80", desc: "IIT Zone" },
  { min: 80, max: 100, label: "80–100", desc: "Elite Zone" },
];

// Step indicator
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-500 ${
              i < current
                ? "bg-gradient-to-br from-neon-cyan to-electric-blue text-void"
                : i === current
                ? "border-2 border-neon-cyan text-neon-cyan bg-neon-cyan/10"
                : "border border-white/20 text-white/30"
            }`}
          >
            {i < current ? "✓" : i + 1}
          </div>
          {i < total - 1 && (
            <div className={`h-px flex-1 w-8 transition-all duration-500 ${i < current ? "bg-neon-cyan shadow-neon-cyan" : "bg-white/10"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Branch Selector Step ──────────────────────────────
function BranchStep({ selected, onSelect }: { selected: string; onSelect: (b: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-display text-3xl font-bold text-white mb-2">
        Select Your <span className="gradient-text">Branch</span>
      </h2>
      <p className="font-body text-white/50 mb-8">Which GATE paper are you appearing for?</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {BRANCHES.map((branch) => {
          const isSelected = selected === branch.key;
          return (
            <motion.button
              key={branch.key}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => onSelect(branch.key)}
              className={`relative p-4 rounded-2xl text-left transition-all duration-300 ${
                isSelected
                  ? "border-2"
                  : "border border-white/10 hover:border-white/20 bg-white/3"
              }`}
              style={
                isSelected
                  ? {
                      borderColor: branch.color,
                      background: `${branch.color}12`,
                      boxShadow: `0 0 20px ${branch.color}30`,
                    }
                  : {}
              }
            >
              <div className="text-2xl mb-2">{branch.icon}</div>
              <div
                className="font-display text-lg font-bold mb-0.5"
                style={{ color: isSelected ? branch.color : "white" }}
              >
                {branch.label}
              </div>
              <div className="font-body text-xs text-white/40 leading-snug">{branch.full}</div>

              {isSelected && (
                <div
                  className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: branch.color }}
                >
                  <span className="text-void text-xs font-bold">✓</span>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── Category Selector Step ────────────────────────────
function CategoryStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (c: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-display text-3xl font-bold text-white mb-2">
        Your <span className="gradient-text">Category</span>
      </h2>
      <p className="font-body text-white/50 mb-8">
        Category affects qualifying cutoffs and reservation-based ranks.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CATEGORIES.map((cat) => {
          const isSelected = selected === cat.key;
          return (
            <motion.button
              key={cat.key}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(cat.key)}
              className={`relative p-6 rounded-2xl text-left transition-all duration-300 ${
                isSelected ? "border-2" : "border border-white/10 hover:border-white/20 bg-white/3"
              }`}
              style={
                isSelected
                  ? {
                      borderColor: cat.color,
                      background: `${cat.color}10`,
                      boxShadow: `0 0 30px ${cat.color}25`,
                    }
                  : {}
              }
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="font-display text-xl font-bold"
                  style={{ color: isSelected ? cat.color : "white" }}
                >
                  {cat.label}
                </div>
                {isSelected && (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-void text-xs font-bold"
                    style={{ background: cat.color }}
                  >
                    ✓
                  </div>
                )}
              </div>
              <div className="font-body text-sm text-white/50">{cat.desc}</div>

              {/* Active indicator bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                  opacity: isSelected ? 1 : 0,
                }}
              />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── Marks Slider Step ─────────────────────────────────
function MarksStep({
  marks,
  onChange,
}: {
  marks: number;
  onChange: (m: number) => void;
}) {
  const pct = marks; // out of 100
  const zone = MARK_RANGES.find((r) => marks >= r.min && marks <= r.max) ?? MARK_RANGES[0];

  // Get color based on marks
  const getColor = () => {
    if (marks >= 80) return "#00F5FF";
    if (marks >= 65) return "#8B5CF6";
    if (marks >= 50) return "#F59E0B";
    if (marks >= 30) return "#10B981";
    return "#EF4444";
  };

  const color = getColor();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-display text-3xl font-bold text-white mb-2">
        Expected <span className="gradient-text">Marks</span>
      </h2>
      <p className="font-body text-white/50 mb-10">
        Enter your expected score out of 100. Be realistic for accurate results.
      </p>

      {/* Big marks display */}
      <div className="text-center mb-10">
        <div className="relative inline-flex items-center justify-center">
          {/* Pulse rings */}
          <div
            className="absolute w-32 h-32 rounded-full pulse-ring"
            style={{ background: color, opacity: 0.1 }}
          />
          <div
            className="absolute w-24 h-24 rounded-full pulse-ring-delay"
            style={{ background: color, opacity: 0.15 }}
          />

          <div
            className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-300"
            style={{
              borderColor: color,
              boxShadow: `0 0 40px ${color}40, 0 0 80px ${color}15`,
              background: `radial-gradient(circle, ${color}15, transparent)`,
            }}
          >
            <motion.span
              key={marks}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-display text-5xl font-bold"
              style={{ color }}
            >
              {marks}
            </motion.span>
            <span className="font-mono text-xs text-white/40 mt-1">/ 100</span>
          </div>
        </div>

        <div
          className="mt-6 inline-block px-4 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase"
          style={{
            color,
            background: `${color}15`,
            border: `1px solid ${color}30`,
          }}
        >
          {zone.label} · {zone.desc}
        </div>
      </div>

      {/* Custom Slider */}
      <div className="relative px-2">
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={marks}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(90deg, ${color} 0%, ${color} ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
            accentColor: color,
          }}
        />

        {/* Track labels */}
        <div className="flex justify-between mt-3 font-mono text-xs text-white/30">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      {/* Zone preview bars */}
      <div className="mt-8 space-y-2">
        <p className="font-mono text-xs text-white/30 uppercase tracking-wider mb-3">Mark Zones</p>
        {MARK_RANGES.map((range) => {
          const active = marks >= range.min && marks <= range.max;
          const zoneColors: Record<string, string> = {
            "0–30": "#EF4444",
            "30–50": "#10B981",
            "50–65": "#F59E0B",
            "65–80": "#8B5CF6",
            "80–100": "#00F5FF",
          };
          const zc = zoneColors[range.label];
          return (
            <div
              key={range.label}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                active ? "bg-white/5" : ""
              }`}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: zc, boxShadow: active ? `0 0 8px ${zc}` : "none" }}
              />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className={`font-body text-xs ${active ? "text-white" : "text-white/40"}`}>
                    {range.label}
                  </span>
                  <span className={`font-mono text-xs ${active ? "" : "text-white/30"}`} style={{ color: active ? zc : undefined }}>
                    {range.desc}
                  </span>
                </div>
                <div className="h-1 bg-white/5 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${((range.max - range.min) / 100) * 100}%`,
                      background: zc,
                      opacity: active ? 1 : 0.3,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual input */}
      <div className="mt-6">
        <label className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-2">
          Type exact marks
        </label>
        <input
          type="number"
          min={0}
          max={100}
          step={0.5}
          value={marks}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v) && v >= 0 && v <= 100) onChange(v);
          }}
          className="futuristic-input w-full px-4 py-3 font-display text-2xl font-bold text-center"
          style={{ color }}
        />
      </div>
    </motion.div>
  );
}

// ── Review Step ───────────────────────────────────────
function ReviewStep({
  branch,
  category,
  marks,
}: {
  branch: string;
  category: string;
  marks: number;
}) {
  const b = BRANCHES.find((b) => b.key === branch)!;
  const c = CATEGORIES.find((c) => c.key === category)!;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-display text-3xl font-bold text-white mb-2">
        Ready to <span className="gradient-text">Predict</span>
      </h2>
      <p className="font-body text-white/50 mb-8">Review your inputs before getting results.</p>

      <div className="space-y-4">
        {[
          { label: "Branch", value: b?.full || branch, accent: b?.color, icon: b?.icon },
          { label: "Category", value: c?.desc || category, accent: c?.color },
          { label: "Expected Marks", value: `${marks} / 100`, accent: "#00F5FF" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between p-5 rounded-2xl glass-card"
            style={{ borderColor: `${item.accent}20` }}
          >
            <div>
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="font-display text-lg font-semibold text-white">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.value}
              </div>
            </div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: item.accent, boxShadow: `0 0 10px ${item.accent}` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-2xl border border-neon-amber/20 bg-neon-amber/5">
        <div className="flex items-start gap-3">
          <span className="text-neon-amber text-lg">⚠️</span>
          <div>
            <div className="font-display text-sm font-semibold text-neon-amber mb-1">Disclaimer</div>
            <p className="font-body text-xs text-white/40 leading-relaxed">
              Predictions are based on historical GATE data (2021–2024). Actual ranks may vary due to
              exam difficulty, number of candidates, and question paper normalization.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Dashboard Component ─────────────────────────
export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [branch, setBranch] = useState("");
  const [category, setCategory] = useState("");
  const [marks, setMarks] = useState(50);
  const [loading, setLoading] = useState(false);

  const steps = ["Branch", "Category", "Marks", "Review"];
  const TOTAL = steps.length;

  const canProceed = () => {
    if (step === 0) return !!branch;
    if (step === 1) return !!category;
    if (step === 2) return marks >= 0 && marks <= 100;
    return true;
  };

  const handlePredict = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ branch, category, marks }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Prediction failed");
        return;
      }

      // Store result and navigate
      sessionStorage.setItem("gate_result", JSON.stringify(data.data));
      sessionStorage.setItem("gate_input", JSON.stringify({ branch, category, marks }));
      router.push("/results");
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-void relative">
      <Navbar />

      {/* Background 3D scene */}
      <div className="fixed top-0 right-0 w-1/2 h-screen opacity-20 pointer-events-none z-0">
        <Suspense fallback={null}>
          <DashboardScene />
        </Suspense>
      </div>

      {/* Background grid */}
      <div className="fixed inset-0 grid-bg opacity-20 z-0" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="font-mono text-xs text-neon-cyan/70 tracking-widest uppercase">
                Rank Prediction Engine
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white">
              Hello,{" "}
              <span className="gradient-text">
                {session?.user?.name?.split(" ")[0] || "Engineer"}
              </span>{" "}
              👋
            </h1>
            <p className="font-body text-white/50 mt-2">
              Complete the 4-step form to calculate your GATE 2026 rank.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card-strong p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

            {/* Step indicator */}
            <StepIndicator current={step} total={TOTAL} />

            {/* Step label */}
            <div className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">
              Step {step + 1} of {TOTAL} · {steps[step]}
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait">
              {step === 0 && (
                <BranchStep key="branch" selected={branch} onSelect={setBranch} />
              )}
              {step === 1 && (
                <CategoryStep key="category" selected={category} onSelect={setCategory} />
              )}
              {step === 2 && (
                <MarksStep key="marks" marks={marks} onChange={setMarks} />
              )}
              {step === 3 && (
                <ReviewStep key="review" branch={branch} category={category} marks={marks} />
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
              <button
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0}
                className="px-6 py-3 rounded-xl border border-white/10 text-white/50 font-body text-sm hover:border-white/20 hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none"
              >
                ← Back
              </button>

              <div className="flex gap-1">
                {Array.from({ length: TOTAL }, (_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: i <= step ? "#00F5FF" : "rgba(255,255,255,0.1)",
                      boxShadow: i === step ? "0 0 8px #00F5FF" : "none",
                    }}
                  />
                ))}
              </div>

              {step < TOTAL - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className={`px-6 py-3 rounded-xl font-body text-sm font-semibold transition-all duration-300 ${
                    canProceed()
                      ? "bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20 border border-neon-cyan/40 text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan"
                      : "border border-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  Next →
                </button>
              ) : (
                <NeonButtonSolid
                  variant="cyan"
                  onClick={handlePredict}
                  loading={loading}
                  disabled={!canProceed()}
                >
                  🎯 Predict My Rank
                </NeonButtonSolid>
              )}
            </div>
          </motion.div>

          {/* Quick tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 grid grid-cols-3 gap-3"
          >
            {[
              { icon: "📈", text: "Based on 2021–2024 GATE data" },
              { icon: "🔒", text: "Your data is private & secure" },
              { icon: "⚡", text: "Results in under 2 seconds" },
            ].map((tip) => (
              <div
                key={tip.text}
                className="glass-card p-4 rounded-xl text-center"
              >
                <div className="text-xl mb-2">{tip.icon}</div>
                <p className="font-body text-xs text-white/40 leading-snug">{tip.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
