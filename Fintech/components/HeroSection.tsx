'use client';

import React from 'react';
import { Sparkles, ArrowRight, Zap, ShieldAlert, TrendingUp, CheckCircle2, PlayCircle, DollarSign, BrainCircuit } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-dot-grid">
      {/* Glowing Radial Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Sparkle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-300/60 shadow-xl shadow-purple-500/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <Sparkles className="w-4 h-4 text-purple-600 animate-bounce" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Autonomous Student Financial Intelligence ✨
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 ml-1 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              AI Engine v3.4 ⚡
            </span>
          </div>

          {/* Main Headline with M-dashes and Positioning Copy */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            It’s not a loan tracker — <br className="hidden sm:inline" />
            it’s an <span className="relative inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent underline decoration-wavy decoration-purple-400 decoration-2">
              AI wealth accelerant
            </span>. 🚀
          </h1>

          {/* Body Copy with M-dashes */}
          <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-2xl leading-relaxed">
            Eliminate hidden aid award penalties — optimize federal interest subsidies — and liquidate student loan balance <span className="font-extrabold text-purple-700 underline underline-offset-4">3.4x faster</span> with real-time financial algorithms. 📈💰
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="#terminal"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-neon text-white font-bold text-base shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 border border-white/30 group"
            >
              <Zap className="w-5 h-5 fill-white text-white group-hover:rotate-12 transition-transform" />
              <span>Launch Live Aid Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-slate-900 font-bold text-base shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border border-slate-300/80 group"
            >
              <PlayCircle className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
              <span>Simulate Amortization</span>
              <span className="text-sm">⚡</span>
            </a>
          </div>

          {/* Key Feature Bullet Points */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-slate-700">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-md">
              <span className="text-emerald-500 font-extrabold text-base">✓</span>
              <span>Zero Account Linking Needed</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-800 shadow-md">
              <span className="text-purple-600 font-extrabold text-base">✓</span>
              <span>Instant PDF FAFSA Parser</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 shadow-md">
              <span className="text-amber-600 font-extrabold text-base">✓</span>
              <span>Subsidized Interest Shield</span>
            </div>
          </div>

          {/* Social Proof Metric Counters */}
          <div className="w-full pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-2xl shadow-purple-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Total Capital Liquidated</span>
                <span className="text-lg">💰</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 flex items-baseline gap-1">
                <span>$48.2M+</span>
                <span className="text-xs font-bold text-emerald-600">⚡</span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Saved across 14,200+ student loan accounts — updated live.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-2xl shadow-purple-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-xl group-hover:bg-pink-500/20 transition-all" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Payoff Speed Multiplier</span>
                <span className="text-lg">📈</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 flex items-baseline gap-1">
                <span>3.4x</span>
                <span className="text-xs font-bold text-purple-600">🚀</span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Average payoff timeline reduction vs standard 10-year repayment.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-2xl shadow-purple-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Aid Letter Extraction</span>
                <span className="text-lg">🤖</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 flex items-baseline gap-1">
                <span>99.4%</span>
                <span className="text-xs font-bold text-amber-600">✨</span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Accuracy parsing un-subsidized interest traps in award letters.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
