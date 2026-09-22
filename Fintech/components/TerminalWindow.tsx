'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Pause, RotateCcw, CheckCircle, AlertTriangle, Sparkles, FileText, Cpu, ChevronRight } from 'lucide-react';

const LOG_SEQUENCES = [
  { text: "$ apex-cli aid-parse --input=award_letter_2024.pdf --mode=deep-scan", color: "text-purple-400 font-bold" },
  { text: "⚡ Initializing OCR Neural Extraction Pipeline v3.4...", color: "text-slate-400" },
  { text: "📄 Reading document: Stanford_University_Aid_Package_Final.pdf [2.4 MB]", color: "text-cyan-400" },
  { text: "🔍 Extracting line items — federal grants vs unsubsidized loans...", color: "text-slate-300" },
  { text: "----------------------------------------------------------------------", color: "text-slate-600" },
  { text: "✅ [MATCH 1/4] Pell Grant Award: $7,395.00 — (FREE CAPITAL / SUB-01)", color: "text-emerald-400 font-semibold" },
  { text: "✅ [MATCH 2/4] Stanford Opportunity Grant: $24,500.00 — (INSTITUTIONAL / SUB-02)", color: "text-emerald-400 font-semibold" },
  { text: "⚠️ [ALERT] Direct Unsubsidized Loan: $5,500.00 @ 6.53% APR — (TRAP DETECTED)", color: "text-amber-400 font-bold" },
  { text: "⚠️ [ALERT] Parent PLUS Loan Offered: $18,200.00 @ 9.08% APR — (HIGH RISK)", color: "text-rose-400 font-bold" },
  { text: "----------------------------------------------------------------------", color: "text-slate-600" },
  { text: "🤖 Running AI Optimization Math: Comparing Repayment Paths...", color: "text-purple-300" },
  { text: "💡 Strategy #1 (Standard 10-Yr): Interest Paid = $14,280 — Total Cost = $37,980", color: "text-slate-400" },
  { text: "🚀 Strategy #2 (Apex Avalanche + Subsidy Shield): Interest Paid = $3,810", color: "text-emerald-300 font-bold" },
  { text: "✨ WEALTH ACCELERANT SAVINGS: $10,470.00 saved & 5.8 years shaved off payoff date! 🎉", color: "text-emerald-400 font-extrabold" },
  { text: "⚡ Execution complete. Ready to deploy autonomous extra-payment trigger. [STATUS 200]", color: "text-cyan-300 font-bold" },
];

export default function TerminalWindow() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentLineIndex((prev) => {
        if (prev < LOG_SEQUENCES.length - 1) {
          return prev + 1;
        } else {
          return prev; // Stop at end or loop
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [currentLineIndex]);

  const handleReset = () => {
    setCurrentLineIndex(0);
    setIsPlaying(true);
  };

  return (
    <section id="terminal" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Cpu className="w-4 h-4 text-purple-600" />
            Live Financial Aid Parser Terminal 🤖
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            See the AI Engine parse awards <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">in real-time</span> ⚡
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Watch our neural scanner disassemble complex university financial aid PDFs — pinpointing hidden high-interest debt traps in milliseconds.
          </p>
        </div>

        {/* Fake macOS Terminal Window */}
        <div className="max-w-4xl mx-auto glass-card-dark rounded-3xl border border-purple-500/40 shadow-harsh-purple overflow-hidden hover:scale-[1.01] transition-all duration-300">
          
          {/* Terminal Window Header Bar */}
          <div className="bg-slate-950/90 px-5 py-3.5 border-b border-purple-500/30 flex items-center justify-between">
            {/* macOS Red/Yellow/Green Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:opacity-80 transition-opacity cursor-pointer shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:opacity-80 transition-opacity cursor-pointer shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity cursor-pointer shadow-sm" />
              <span className="ml-3 text-xs font-mono text-purple-300/80 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                apex-aid-parser-v3.4.sh — bash — 80x24
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1 rounded-lg bg-purple-900/50 border border-purple-400/40 text-purple-200 text-xs font-mono hover:bg-purple-800 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Resume</span>
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono hover:bg-slate-700 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Re-run Log</span>
              </button>
            </div>
          </div>

          {/* Terminal Console Output Body */}
          <div
            ref={logContainerRef}
            className="p-6 font-mono text-xs sm:text-sm bg-black/90 min-h-[380px] max-h-[420px] overflow-y-auto space-y-2.5 text-slate-200 select-text"
          >
            <div className="text-slate-500 text-xs pb-2 border-b border-slate-800/80 flex items-center justify-between">
              <span>[APEX AID ENGINE V3.4 - NEURAL OCR SESSION]</span>
              <span className="text-purple-400 font-bold animate-pulse">● LIVE STREAMING</span>
            </div>

            {LOG_SEQUENCES.slice(0, currentLineIndex + 1).map((log, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${log.color} animate-in fade-in duration-200`}>
                <ChevronRight className="w-4 h-4 shrink-0 mt-0.5 text-purple-500" />
                <span className="break-all">{log.text}</span>
              </div>
            ))}

            {/* Blinking Cursor */}
            <div className="flex items-center gap-1 text-emerald-400 pt-1">
              <span>&gt;</span>
              <span className="w-2.5 h-4 bg-emerald-400 animate-pulse inline-block" />
            </div>
          </div>

          {/* Terminal Footer Indicator */}
          <div className="bg-slate-950/95 px-6 py-3 border-t border-purple-500/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle className="w-3.5 h-3.5" />
                Parser Online
              </span>
              <span>•</span>
              <span className="text-slate-300">Tokens Parsed: 14,892</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                ✨ $10,470 Capital Unlocked
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
