'use client';

import React, { useState } from 'react';
import { Sliders, UploadCloud, ShieldAlert, Sparkles, TrendingUp, CheckCircle, AlertTriangle, Zap, DollarSign, ArrowRight, RefreshCw, FileText } from 'lucide-react';

export default function FeatureCardsRow() {
  // Card 1 State: Loan Amortization Simulator
  const [loanAmount, setLoanAmount] = useState(35000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [extraPayment, setExtraPayment] = useState(150);

  // Simple math for simulated real-time payoff
  const monthlyRate = interestRate / 100 / 12;
  const standardMonthly = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -120)); // 10-year
  const standardTotalInterest = standardMonthly * 120 - loanAmount;

  // Accelerated payoff estimate
  const acceleratedMonthly = standardMonthly + extraPayment;
  const acceleratedMonths = Math.max(24, Math.round(loanAmount / (acceleratedMonthly - (loanAmount * monthlyRate))));
  const acceleratedInterest = Math.max(1200, Math.round(standardTotalInterest * (acceleratedMonths / 120)));
  const interestSaved = Math.max(0, Math.round(standardTotalInterest - acceleratedInterest));
  const yearsSaved = ((120 - acceleratedMonths) / 12).toFixed(1);

  // Card 2 State: Aid Parser Upload Simulation
  const [parsedFile, setParsedFile] = useState<string | null>("Harvard_Award_2024.pdf");
  const [isParsing, setIsParsing] = useState(false);

  const handleSimulateUpload = (filename: string) => {
    setIsParsing(true);
    setTimeout(() => {
      setParsedFile(filename);
      setIsParsing(false);
    }, 800);
  };

  // Card 3 State: Strategy Audit Toggle
  const [strategyMode, setStrategyMode] = useState<'avalanche' | 'snowflake' | 'subsidized'>('avalanche');

  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden bg-dot-grid">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600 animate-spin" style={{ animationDuration: '6s' }} />
            Three Core Optimization Pillars ✨
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed to outperform standard banking apps <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">by 300%</span> 📈
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Every component is engineered with real-time feedback math — empowering you to make data-driven repayment decisions in seconds.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ========================================================================= */}
          {/* CARD 1: LOAN AMORTIZATION SIMULATOR */}
          {/* ========================================================================= */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-2xl shadow-purple-500/15 hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-neon flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                  ⚡ Interactive Simulator
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                Loan Amortization Engine 📈
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-6 leading-relaxed">
                Adjust principal balance & extra monthly contributions to visualize instant interest savings and timeline acceleration.
              </p>

              {/* Sliders & Preset Controls */}
              <div className="space-y-4 bg-slate-50/80 p-4 rounded-2xl border border-purple-100 shadow-inner">
                {/* Principal Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Loan Principal:</span>
                    <span className="text-purple-700 font-mono">${loanAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="120000"
                    step="2500"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Interest Rate (APR):</span>
                    <span className="text-purple-700 font-mono">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="11.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Extra Payment Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Extra Payment / Mo:</span>
                    <span className="text-emerald-600 font-mono">+${extraPayment}/mo</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="25"
                    value={extraPayment}
                    onChange={(e) => setExtraPayment(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                {/* Preset Quick Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Presets:</span>
                  <button
                    onClick={() => { setLoanAmount(25000); setExtraPayment(100); }}
                    className="px-2 py-0.5 rounded bg-white border border-purple-200 text-[11px] font-semibold text-purple-700 hover:bg-purple-50"
                  >
                    Undergrad $25k
                  </button>
                  <button
                    onClick={() => { setLoanAmount(65000); setExtraPayment(250); }}
                    className="px-2 py-0.5 rounded bg-white border border-purple-200 text-[11px] font-semibold text-purple-700 hover:bg-purple-50"
                  >
                    Grad $65k
                  </button>
                </div>
              </div>

              {/* Dynamic Math Result Box */}
              <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-purple-900 to-slate-900 text-white shadow-xl space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-200 font-bold uppercase tracking-wider">
                  <span>Interest Saved</span>
                  <span>🚀 {yearsSaved} Yrs Faster</span>
                </div>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                  ${interestSaved.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Standard 10-Yr amortized interest reduced dramatically!</span>
                </div>
              </div>
            </div>

            {/* Feature bullets */}
            <div className="mt-6 pt-4 border-t border-purple-100 space-y-1.5 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Calculates compound daily interest accrual</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Subsidized grace period calculation included</span>
              </div>
            </div>
          </div>


          {/* ========================================================================= */}
          {/* CARD 2: FINANCIAL AID AWARD PARSER */}
          {/* ========================================================================= */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-2xl shadow-purple-500/15 hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-pink-100 border border-pink-300 text-pink-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                  🤖 Neural OCR Parser
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                Aid Package Parser 📄
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-6 leading-relaxed">
                Drag & drop any university award letter PDF to unmask hidden high-APR loans disguised as financial aid grants.
              </p>

              {/* Simulated Upload Box */}
              <div className="border-2 border-dashed border-purple-300 hover:border-purple-500 rounded-2xl p-4 text-center bg-purple-50/50 hover:bg-purple-50 transition-all cursor-pointer space-y-2 relative group/upload">
                {isParsing ? (
                  <div className="py-6 flex flex-col items-center gap-2">
                    <RefreshCw className="w-8 h-8 text-purple-600 animate-spin" />
                    <span className="text-xs font-bold text-purple-800">Parsing PDF OCR structure... ✨</span>
                  </div>
                ) : (
                  <>
                    <UploadCloud className="w-8 h-8 text-purple-600 mx-auto group-hover/upload:scale-110 transition-transform" />
                    <div className="text-xs font-bold text-slate-800">
                      Drop Award Letter PDF here or <span className="text-purple-600 underline">Browse Files</span>
                    </div>
                    <div className="text-[10px] text-slate-500">Supports FAFSA 2024-2025 & Institutional PDFs</div>
                  </>
                )}
              </div>

              {/* Sample Triggers */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-slate-500">Try Demo PDFs:</span>
                <button
                  onClick={() => handleSimulateUpload("Stanford_Aid_Offer.pdf")}
                  className="px-2 py-1 rounded bg-white border border-slate-200 text-[10px] font-semibold text-slate-700 hover:bg-purple-50 hover:border-purple-300"
                >
                  Stanford PDF
                </button>
                <button
                  onClick={() => handleSimulateUpload("NYU_Aid_Offer.pdf")}
                  className="px-2 py-1 rounded bg-white border border-slate-200 text-[10px] font-semibold text-slate-700 hover:bg-purple-50 hover:border-purple-300"
                >
                  NYU PDF
                </button>
              </div>

              {/* Output Visualization Breakdown */}
              <div className="mt-5 p-4 rounded-2xl bg-white border border-purple-200 shadow-md space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 border-b border-purple-100 pb-2">
                  <span className="flex items-center gap-1.5 text-purple-700">
                    <FileText className="w-3.5 h-3.5" />
                    {parsedFile || "Award Summary"}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    Extracted ✅
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-600">Free Grants & Scholarships:</span>
                    <span className="text-emerald-600 font-mono">$31,895</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-600">Subsidized Federal Loan:</span>
                    <span className="text-blue-600 font-mono">$3,500</span>
                  </div>
                  <div className="flex justify-between font-bold text-rose-600 bg-rose-50 p-1.5 rounded-lg border border-rose-200">
                    <span className="flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Hidden High-APR Loan Trap:
                    </span>
                    <span className="font-mono">$18,200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature bullets */}
            <div className="mt-6 pt-4 border-t border-purple-100 space-y-1.5 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Flags Parent PLUS predatory interest rates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Calculates net cost after tuition indexing</span>
              </div>
            </div>
          </div>


          {/* ========================================================================= */}
          {/* CARD 3: AI RISK & STRATEGY AUDIT */}
          {/* ========================================================================= */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-2xl shadow-purple-500/15 hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse">
                  ⚡ Autonomous Audit
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                AI Risk Strategy Audit 🛡️
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-6 leading-relaxed">
                Autonomous AI scan evaluating your loan portfolio risk tier, interest vulnerability, and optimal repayment sequence.
              </p>

              {/* Interactive Strategy Selector */}
              <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setStrategyMode('avalanche')}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                    strategyMode === 'avalanche'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Avalanche
                </button>
                <button
                  onClick={() => setStrategyMode('snowflake')}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                    strategyMode === 'snowflake'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Snowflake
                </button>
                <button
                  onClick={() => setStrategyMode('subsidized')}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                    strategyMode === 'subsidized'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Subsidized
                </button>
              </div>

              {/* Audit Output Result Box */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-900 text-white shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono uppercase">Portfolio Audit Level:</span>
                  {strategyMode === 'avalanche' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 text-xs font-bold">
                      ⚡ HIGH EFFICIENCY
                    </span>
                  )}
                  {strategyMode === 'snowflake' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-bold">
                      ❄️ MICRO ACCELERATION
                    </span>
                  )}
                  {strategyMode === 'subsidized' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-xs font-bold">
                      🛡️ INTEREST SHIELD ACTIVE
                    </span>
                  )}
                </div>

                <div className="text-sm font-semibold text-slate-200 leading-snug">
                  {strategyMode === 'avalanche' && (
                    <span>Directs every extra dollar to 8.5% Grad Loan first — cutting total interest expense by $11,400.</span>
                  )}
                  {strategyMode === 'snowflake' && (
                    <span>Channels round-up micro-transactions ($0.75 - $2.50) daily to knock off smallest principal balances.</span>
                  )}
                  {strategyMode === 'subsidized' && (
                    <span>Freezes payment on 0% in-school loans — maximizing high-yield savings yield until graduation grace expires.</span>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-purple-300 font-mono">
                  <span>Payoff Velocity Score:</span>
                  <span className="text-emerald-400 font-bold">98.4 / 100 🚀</span>
                </div>
              </div>
            </div>

            {/* Feature bullets */}
            <div className="mt-6 pt-4 border-t border-purple-100 space-y-1.5 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Autonomous refinancing rate watcher alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Income-Driven Repayment (SAVE) comparison</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
