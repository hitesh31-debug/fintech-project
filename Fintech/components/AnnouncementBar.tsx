'use client';

import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 w-full rainbow-stripe py-2.5 px-4 text-white text-xs sm:text-sm font-semibold shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider text-yellow-300 shadow-sm animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
            NEW v3.4 release
          </span>
          <span className="hidden md:inline font-medium text-white/95">
            AI Aid Award Parser — Now automatically extracts institutional grant leverage ratios! ✨
          </span>
          <span className="md:hidden font-medium text-white/95">
            AI Aid Parser v3.4 is live! ⚡
          </span>
        </div>

        <a
          href="#terminal"
          className="mx-auto sm:mx-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/40 text-xs font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
        >
          <span>Run Live Demo</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
