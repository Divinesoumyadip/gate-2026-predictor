"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Frosted glass top bar */}
      <div className="glass-card-strong mx-4 mt-4 rounded-2xl">
        <nav className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 rounded-lg border border-neon-cyan/30 group-hover:border-neon-cyan/60 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center text-neon-cyan text-lg font-display font-bold">
                G
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm leading-tight">
                GATE<span className="text-neon-cyan">26</span>
              </div>
              <div className="font-mono text-[9px] text-neon-cyan/60 tracking-widest uppercase">
                Rank Predictor
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Predict</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-3">
            {session ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2">
                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      alt="Avatar"
                      className="w-7 h-7 rounded-full border border-neon-cyan/30"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center text-void text-xs font-bold">
                      {session.user?.name?.[0]?.toUpperCase()}
                    </div>
                  )}
                  <span className="text-sm text-white/70">
                    {session.user?.name?.split(" ")[0]}
                  </span>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-4 py-1.5 rounded-lg border border-white/10 text-white/60 text-sm hover:border-neon-rose/50 hover:text-neon-rose transition-all font-body"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-violet text-void text-sm font-semibold font-body hover:shadow-neon-cyan transition-all hover:scale-105"
              >
                Get Started
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-white/60 hover:text-neon-cyan transition-colors font-body relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
    </Link>
  );
}
