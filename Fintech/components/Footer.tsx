'use client';

import React from 'react';
import { Zap, Sparkles, ArrowUp, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 mt-24 border-t border-purple-100 bg-gradient-to-b from-white via-purple-50/50 to-slate-950 text-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-purple-200/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-neon flex items-center justify-center text-white shadow-lg shadow-purple-500/40">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-1">
                ApexLoan <span className="text-purple-600 font-extrabold">AI</span> ✨
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              It’s not a loan tracker — it’s an autonomous AI wealth accelerant engineering your student debt payoff timeline down to the minute.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white border border-purple-200 shadow-md flex items-center justify-center text-slate-600 hover:text-purple-600 hover:scale-110 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white border border-purple-200 shadow-md flex items-center justify-center text-slate-600 hover:text-purple-600 hover:scale-110 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white border border-purple-200 shadow-md flex items-center justify-center text-slate-600 hover:text-purple-600 hover:scale-110 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Engine Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-purple-700 flex items-center gap-1">
              <span>Optimization Tools</span>
              <span>⚡</span>
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <a href="#features" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Amortization Simulator</span>
                  <span>📈</span>
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Aid Award PDF Parser</span>
                  <span>🤖</span>
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Risk Strategy Audit</span>
                  <span>🛡️</span>
                </a>
              </li>
              <li>
                <a href="#bento" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Avalanche vs Snowflake</span>
                  <span>❄️</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Feature Pillars */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-purple-700 flex items-center gap-1">
              <span>Core Pillars</span>
              <span>🚀</span>
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <a href="#bento" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Subsidized Interest Watcher</span>
                  <span>⚡</span>
                </a>
              </li>
              <li>
                <a href="#bento" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Grant Ratio Engine</span>
                  <span>💰</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Pro Genius Plan</span>
                  <span>👑</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                  <span>Student Success Stories</span>
                  <span>⭐️</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Newsletter Box */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-purple-700 flex items-center gap-1">
              <span>Aid Drops Newsletter</span>
              <span>✨</span>
            </h4>
            <p className="text-xs text-slate-600">
              Get weekly federal grant updates and loan forgiveness loophole alerts.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="student@university.edu"
                className="w-full px-3 py-2 text-xs rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-inner"
              />
              <button
                aria-label="Subscribe"
                className="px-3 py-2 rounded-xl bg-gradient-neon text-white text-xs font-bold shadow-md hover:scale-105 transition-all shrink-0"
              >
                Join 🚀
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ApexLoan AI Inc. All rights reserved.</span>
            <span className="text-purple-400">—</span>
            <span className="text-purple-600 font-semibold">Accelerating Financial Freedom 🚀</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-200 shadow-md text-slate-700 hover:text-purple-600 hover:scale-105 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
