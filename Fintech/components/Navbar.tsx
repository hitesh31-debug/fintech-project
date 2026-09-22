'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-4 z-40 max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-3'
      }`}
    >
      <div className="glass-card rounded-2xl px-5 py-3.5 flex items-center justify-between border border-white/80 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-neon flex items-center justify-center text-white shadow-lg shadow-purple-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-purple-950 to-purple-800 bg-clip-text text-transparent flex items-center gap-1">
              ApexLoan <span className="text-purple-600 font-extrabold">AI</span>
              <Sparkles className="w-4 h-4 text-purple-500 inline-block animate-bounce" />
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600/90">
              Aid Optimization Engine
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-700">
          <a
            href="#features"
            className="hover:text-purple-600 transition-colors flex items-center gap-1 hover:scale-105 transform"
          >
            <span>Features</span>
            <span className="text-xs">⚡</span>
          </a>
          <a
            href="#terminal"
            className="hover:text-purple-600 transition-colors flex items-center gap-1 hover:scale-105 transform"
          >
            <span>Live Audit</span>
            <span className="text-xs">🤖</span>
          </a>
          <a
            href="#bento"
            className="hover:text-purple-600 transition-colors flex items-center gap-1 hover:scale-105 transform"
          >
            <span>Strategy Math</span>
            <span className="text-xs">📈</span>
          </a>
          <a
            href="#pricing"
            className="hover:text-purple-600 transition-colors flex items-center gap-1 hover:scale-105 transform"
          >
            <span>Pricing</span>
            <span className="text-xs">💰</span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#terminal"
            className="px-4 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-purple-700 transition-all hover:scale-105"
          >
            Log In
          </a>
          <a
            href="#pricing"
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-neon text-white font-bold text-sm shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Optimize My Aid</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">🚀</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-purple-50 text-slate-800 hover:bg-purple-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-card rounded-2xl p-5 border border-white/80 shadow-2xl shadow-purple-500/30 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-purple-600 py-1 border-b border-purple-100 flex items-center justify-between"
          >
            <span>Features</span>
            <span>⚡</span>
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-purple-600 py-1 border-b border-purple-100 flex items-center justify-between"
          >
            <span>Live Audit Parser</span>
            <span>🤖</span>
          </a>
          <a
            href="#bento"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-purple-600 py-1 border-b border-purple-100 flex items-center justify-between"
          >
            <span>Strategy Math</span>
            <span>📈</span>
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-purple-600 py-1 flex items-center justify-between"
          >
            <span>Pricing</span>
            <span>💰</span>
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-gradient-neon text-white font-bold shadow-lg shadow-purple-500/40 flex items-center justify-center gap-2"
          >
            <span>Optimize My Aid 🚀</span>
          </a>
        </div>
      )}
    </nav>
  );
}
