'use client';

import React from 'react';
import { Sparkles, Zap, Flame, Snowflake, Clock, PieChart, TrendingDown, ArrowUpRight, Bell, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function BentoGridShowcase() {
  return (
    <section id="bento" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/50">
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Autonomous Wealth Mathematics ✨
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Bento Grid of <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">Financial Sub-Features</span> ⚡
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Explore the algorithmic micro-engines running continuously underneath your customized repayment dashboard.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ========================================================================= */}
          {/* BENTO CARD 1: AVALANCHE VS SNOWFLAKE (Spans 2 columns on desktop) */}
          {/* ========================================================================= */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/80 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-400/20 to-pink-400/0 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/40">
                    <Flame className="w-5 h-5 text-amber-300 fill-amber-300" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/40">
                    <Snowflake className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase tracking-wider">
                  🔥 Math Battle Visualizer
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Avalanche APR Math vs. Snowflake Micro-Payments ❄️
              </h3>
              <p className="text-sm text-slate-600 font-medium mb-6 max-w-xl">
                Standard banks force rigid monthly billing. Apex AI dynamically splits your spare capital between high-APR Avalanche targets and daily round-up Snowflakes for maximum velocity.
              </p>

              {/* Graphical Comparison Bars */}
              <div className="space-y-4 bg-slate-900/90 text-white p-6 rounded-2xl border border-purple-500/30 shadow-xl">
                {/* Avalanche Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-purple-300 font-bold flex items-center gap-1">
                      <Flame className="w-4 h-4 text-amber-400" />
                      Avalanche Engine (High-APR Priority):
                    </span>
                    <span className="text-emerald-400 font-bold">$12,450 Saved (4.2 Yrs Faster) 🚀</span>
                  </div>
                  <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden p-0.5 border border-purple-500/30">
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-400 h-full rounded-full w-[88%] animate-pulse" />
                  </div>
                </div>

                {/* Snowflake Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cyan-300 font-bold flex items-center gap-1">
                      <Snowflake className="w-4 h-4 text-cyan-300" />
                      Snowflake Daily Round-Ups ($1.25/day):
                    </span>
                    <span className="text-cyan-300 font-bold">$3,180 Saved (1.5 Yrs Faster) ❄️</span>
                  </div>
                  <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden p-0.5 border border-cyan-500/30">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-400 h-full rounded-full w-[62%]" />
                  </div>
                </div>

                {/* Standard Bank Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Standard Minimum Payment (Baseline):</span>
                    <span className="text-rose-400 font-bold">$0 Saved (10.0 Yrs Full Term) 🛑</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5">
                    <div className="bg-slate-600 h-full rounded-full w-[25%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                Automatic weekly balance rebalancing
              </span>
              <span className="flex items-center gap-1 text-purple-600 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                Zero interest penalties guaranteed
              </span>
            </div>
          </div>


          {/* ========================================================================= */}
          {/* BENTO CARD 2: SUBSIDIZED INTEREST ALERTS (1 column) */}
          {/* ========================================================================= */}
          <div className="glass-card rounded-3xl p-8 border border-white/80 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/40">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  ⚡ Grace Watcher
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Subsidized Interest Alert Shield 🛡️
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-6 leading-relaxed">
                Monitors federal 0% in-school interest subsidies — alerting you 60 days before interest capitalization triggers.
              </p>

              {/* Countdown Card */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 text-slate-900 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 uppercase">Subsidized Grace Period</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                </div>
                <div className="text-3xl font-extrabold text-amber-900 font-mono flex items-baseline gap-1">
                  <span>142 Days</span>
                  <span className="text-xs font-bold text-amber-700">Remaining</span>
                </div>
                <p className="text-[11px] text-amber-800 font-medium">
                  Federal Govt is currently covering 100% of interest ($184/mo value).
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-100 text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Bell className="w-4 h-4 text-amber-600 animate-bounce" />
              <span>SMS & Email alerts before capitalization</span>
            </div>
          </div>


          {/* ========================================================================= */}
          {/* BENTO CARD 3: GRANT VS LOAN RATIO BREAKDOWN (1 column) */}
          {/* ========================================================================= */}
          <div className="glass-card rounded-3xl p-8 border border-white/80 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40">
                  <PieChart className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  📊 Gift Aid Ratio
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Grant vs. Loan Ratio Engine 💰
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-6 leading-relaxed">
                Calculates your true "Free Aid Index" across Pell grants, university scholarships, and self-help work-study.
              </p>

              {/* Progress Ring / Gauge Simulation */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 shadow-xl">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Gift Aid vs Debt:</span>
                  <span className="text-emerald-400 font-bold">78% FREE AID</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-400 h-full w-[78%]" />
                  <div className="bg-rose-500 h-full w-[22%]" />
                </div>
                <div className="flex justify-between text-[11px] font-medium text-slate-300">
                  <span className="flex items-center gap-1 text-emerald-400">● $31,895 Grants</span>
                  <span className="flex items-center gap-1 text-rose-400">● $9,000 Loans</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-100 text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Maximized institutional grant entitlement</span>
            </div>
          </div>


          {/* ========================================================================= */}
          {/* BENTO CARD 4: AUTO-REFINANCE RATE WATCHER (Spans 2 columns on desktop) */}
          {/* ========================================================================= */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/80 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/40">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Autonomous Auto-Refinance Trigger Watcher 📉
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase tracking-wider">
                ⚡ Rate Radar
              </span>
            </div>

            <p className="text-sm text-slate-600 font-medium mb-6">
              Our market radar monitors 35+ private lenders 24/7. When interest rates drop below your threshold, Apex automatically generates pre-filled refi offers without hard credit pulls.
            </p>

            {/* Rate Tracker Graphic */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-md">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Your Current APR</div>
                <div className="text-2xl font-extrabold text-slate-900 font-mono mt-1">6.85%</div>
                <div className="text-[10px] text-slate-500 mt-1">Federal Fixed</div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-300 shadow-md">
                <div className="text-[11px] font-bold text-purple-700 uppercase">Refi Target Rate</div>
                <div className="text-2xl font-extrabold text-purple-900 font-mono mt-1">4.25%</div>
                <div className="text-[10px] text-purple-600 mt-1">SOFR Benchmark Trigger</div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-emerald-100 uppercase">Est. Refi Savings</div>
                  <div className="text-2xl font-extrabold text-white font-mono mt-1">$6,840</div>
                </div>
                <div className="text-[10px] text-emerald-100 font-semibold flex items-center gap-1 mt-2">
                  <span>Auto-Refi Ready</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1 text-purple-700">
                <Zap className="w-4 h-4 text-purple-600" />
                No soft or hard credit impact during monitoring
              </span>
              <span className="text-purple-600 font-extrabold">Instant Lock Available ✨</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
