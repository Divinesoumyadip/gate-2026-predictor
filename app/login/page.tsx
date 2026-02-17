"use client";

import { useState, Suspense, lazy } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import Link from "next/link";

const HeroScene = lazy(() =>
  import("@/components/three/HeroScene").then((m) => ({ default: m.HeroScene }))
);

type Mode = "login" | "signup";

// ── Google Icon ───────────────────────────────────────
function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

// ── Form Input ────────────────────────────────────────
function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block font-mono text-xs text-neon-cyan/70 tracking-wider uppercase">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="futuristic-input w-full px-4 py-3 font-body text-sm"
      />
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ── Handle credential login ─────────────────────────
  const handleCredentialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        // Register first
        const res = await fetch("/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        if (!res.ok) {
          toast.error(data.error || "Signup failed");
          return;
        }
        toast.success("Account created! Signing you in...");
      }

      // Sign in
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Welcome to GATE 2026 Predictor!");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Handle Google OAuth ─────────────────────────────
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch {
      toast.error("Google sign-in failed");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-void relative flex items-center justify-center overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent z-[1]" />
      <div className="absolute inset-0 bg-void/40 z-[1]" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-neon-cyan/5 blur-3xl z-[1]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-violet/5 blur-3xl z-[1]" />

      {/* Back to home */}
      <Link
        href="/"
        className="absolute top-8 left-8 z-20 flex items-center gap-2 font-mono text-xs text-white/40 hover:text-neon-cyan transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Home
      </Link>

      {/* ── Main Form Card ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="glass-card-strong p-8 relative overflow-hidden">
          {/* Top glow line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent" />

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neon-cyan/8 to-transparent" />

          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/30 mb-4">
              <span className="font-display text-2xl font-bold gradient-text">G</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-white mb-1">
              GATE<span className="text-neon-cyan">26</span> Predictor
            </h1>
            <p className="font-body text-sm text-white/40">
              {mode === "login" ? "Welcome back, engineer." : "Create your account."}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex rounded-xl overflow-hidden border border-white/8 mb-6 p-1 bg-white/3">
            {(["login", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 ${
                  mode === m
                    ? "bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 text-white border border-neon-cyan/20"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {m === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          {/* ── Google OAuth ─────────────────────────── */}
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-white/20 transition-all font-body text-sm text-white/80 mb-6 disabled:opacity-50"
          >
            {googleLoading ? (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-xs text-white/30">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* ── Credential Form ───────────────────────── */}
          <form onSubmit={handleCredentialSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {mode === "signup" && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FormInput
                    label="Full Name"
                    value={name}
                    onChange={setName}
                    placeholder="Rahul Kumar"
                    required
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <FormInput
              label="Email Address"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="rahul@example.com"
              required
            />

            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
              required
            />

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan to-electric-blue text-void font-display font-bold text-base hover:shadow-neon-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-void/40 border-t-void rounded-full animate-spin" />
                  {mode === "signup" ? "Creating account..." : "Signing in..."}
                </span>
              ) : (
                mode === "login" ? "Sign In →" : "Create Account →"
              )}
            </motion.button>
          </form>

          {/* Footer text */}
          <p className="font-body text-xs text-white/30 text-center mt-6">
            {mode === "login" ? (
              <>Don't have an account?{" "}
                <button onClick={() => setMode("signup")} className="text-neon-cyan hover:underline">
                  Sign up free
                </button>
              </>
            ) : (
              <>Already have an account?{" "}
                <button onClick={() => setMode("login")} className="text-neon-cyan hover:underline">
                  Sign in
                </button>
              </>
            )}
          </p>

          {/* Privacy note */}
          <p className="font-body text-[10px] text-white/20 text-center mt-3">
            Your data is encrypted. We never share personal information.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
