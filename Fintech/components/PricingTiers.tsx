'use client';

import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Zap, Crown, Shield, Star } from 'lucide-react';

export default function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden bg-dot-grid">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600 animate-spin" style={{ animationDuration: '5s' }} />
            Transparent Wealth Investments ✨
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Plans that pay for themselves <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">in week one</span> 💰
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Unlock autonomous loan payoff algorithms — backed by our 100x interest savings guarantee.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-purple-700' : 'text-slate-500'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-purple-900 p-1 transition-colors relative focus:outline-none shadow-inner"
              aria-label="Toggle Billing Interval"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-neon shadow-md transform transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-purple-700' : 'text-slate-500'}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-extrabold uppercase animate-pulse">
                Save 20% 🚀
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* ========================================================================= */}
          {/* TIER 1: FREE / SCHOLAR LITE */}
          {/* ========================================================================= */}
          <div className="glass-card rounded-3xl p-8 border border-white/80 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider">
                  Basic Starter ⚡
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">Scholar Free</h3>
              <p className="text-xs text-slate-600 font-medium mb-6">
                Essential calculators for students taking their first loan evaluation.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900 font-mono">$0</span>
                <span className="text-xs font-bold text-slate-500">/ forever free</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-700 mb-8 border-t border-purple-100 pt-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Standard 10-Yr Amortization Simulator</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Basic FAFSA Award Letter PDF Scanner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Federal Subsidized Interest Tracker</span>
                </li>
                <li className="flex items-center gap-2 opacity-50">
                  <span className="text-slate-400 font-bold text-base">✕</span>
                  <span className="line-through">Autonomous Avalanche Math Engine</span>
                </li>
                <li className="flex items-center gap-2 opacity-50">
                  <span className="text-slate-400 font-bold text-base">✕</span>
                  <span className="line-through">24/7 Refi Benchmark Rate Alerts</span>
                </li>
              </ul>
            </div>

            <a
              href="#terminal"
              className="w-full py-3.5 rounded-2xl glass-button text-slate-900 font-bold text-sm text-center shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300 block"
            >
              Get Started Free ⚡
            </a>
          </div>


          {/* ========================================================================= */}
          {/* TIER 2: SCHOLAR PRO (POPULAR TIER) */}
          {/* ========================================================================= */}
          <div className="glass-card-dark rounded-3xl p-8 border-2 border-purple-500 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Neon Popular Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-neon text-white text-[10px] font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-lg flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
                MOST POPULAR ✨
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-900/80 border border-purple-400 text-purple-300 text-xs font-bold uppercase tracking-wider">
                  ⚡ Wealth Accelerant
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                Scholar Pro <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </h3>
              <p className="text-xs text-purple-200 font-medium mb-6">
                Full access to autonomous interest reduction & micro-snowflake payment engine.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white font-mono">
                  ${isAnnual ? '7.20' : '9'}
                </span>
                <span className="text-xs font-bold text-purple-300">/ month {isAnnual && '(billed annually)'}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-200 mb-8 border-t border-purple-500/30 pt-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold text-base">✓</span>
                  <span>Everything in Free Plan +</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold text-base">✓</span>
                  <span>Autonomous Avalanche & Snowflake Engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold text-base">✓</span>
                  <span>Unlimited Neural FAFSA Award PDF Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold text-base">✓</span>
                  <span>Subsidized Interest Capitalization Shield</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold text-base">✓</span>
                  <span>Daily Micro-Roundup Payoff Automation</span>
                </li>
              </ul>
            </div>

            <a
              href="#terminal"
              className="w-full py-3.5 rounded-2xl bg-gradient-neon text-white font-bold text-sm text-center shadow-xl shadow-purple-500/60 hover:shadow-purple-500/90 hover:scale-[1.02] transition-all duration-300 block border border-white/30"
            >
              Start 14-Day Free Pro Trial 🚀
            </a>
          </div>


          {/* ========================================================================= */}
          {/* TIER 3: PRO GENIUS */}
          {/* ========================================================================= */}
          <div className="glass-card rounded-3xl p-8 border border-white/80 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  👑 VIP Institutional
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                Pro Genius <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-6">
                For high-balance law, medical, or graduate students requiring 1-on-1 AI refi execution.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900 font-mono">
                  ${isAnnual ? '23.20' : '29'}
                </span>
                <span className="text-xs font-bold text-slate-500">/ month {isAnnual && '(billed annually)'}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-700 mb-8 border-t border-purple-100 pt-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Everything in Scholar Pro +</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>24/7 Autonomous Refi Benchmark Watcher</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Income-Driven Repayment (SAVE) Tax Modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Dedicated Financial Aid Negotiator Prompts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Priority 1-on-1 Advisor AI Support</span>
                </li>
              </ul>
            </div>

            <a
              href="#terminal"
              className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm text-center shadow-xl hover:bg-purple-950 transition-all duration-300 block"
            >
              Get Pro Genius Plan 👑
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
