"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "cyan" | "violet" | "amber" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
}

const variants = {
  cyan: "bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20 border border-neon-cyan/40 text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan hover:bg-neon-cyan/10",
  violet: "bg-gradient-to-r from-neon-violet/20 to-neon-violet/10 border border-neon-violet/40 text-neon-violet hover:border-neon-violet hover:shadow-neon-violet",
  amber: "bg-gradient-to-r from-neon-amber/20 to-neon-amber/10 border border-neon-amber/40 text-neon-amber hover:border-neon-amber hover:shadow-neon-amber",
  ghost: "border border-white/10 text-white/60 hover:border-white/30 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

const solidVariants = {
  cyan: "bg-gradient-to-r from-neon-cyan to-electric-blue text-void font-semibold hover:shadow-neon-cyan",
  violet: "bg-gradient-to-r from-neon-violet to-purple-600 text-white font-semibold hover:shadow-neon-violet",
  amber: "bg-gradient-to-r from-neon-amber to-orange-500 text-void font-semibold hover:shadow-neon-amber",
  ghost: "border border-white/10 text-white/60 hover:border-white/30 hover:text-white",
};

export function NeonButton({
  children,
  onClick,
  variant = "cyan",
  size = "md",
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  fullWidth = false,
}: NeonButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={clsx(
        "neon-btn relative font-body font-medium transition-all duration-300",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Processing...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}

export function NeonButtonSolid({
  children,
  onClick,
  variant = "cyan",
  size = "md",
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  fullWidth = false,
}: NeonButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={clsx(
        "neon-btn relative font-body transition-all duration-300",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
        solidVariants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Calculating...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}
