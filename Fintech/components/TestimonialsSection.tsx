'use client';

import React from 'react';
import { Sparkles, CheckCircle2, Quote, GraduationCap, DollarSign, TrendingUp } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "M.S. Computer Science",
    university: "Stanford University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: "Apex AI found a $5,500 unsubsidized interest trap disguised as 'gift aid' in my award letter. The Avalanche math engine shaved 4.8 years off my loan amortization timeline — absolute game changer!",
    savings: "$14,800 Total Interest Saved",
    badge: "Verified Scholar",
  },
  {
    name: "Elena Rostova",
    role: "B.S. Biomedical Engineering",
    university: "Columbia University",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: "It’s not just a loan tracker — it literally automated my daily round-up micro-payments. My $42,000 balance is shrinking by $450 every single month on total autopilot.",
    savings: "3.8 Years Off Payoff Date",
    badge: "Verified Graduate",
  },
  {
    name: "Javion Thorne",
    role: "JD Candidate",
    university: "Georgetown Law",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    quote: "The Subsidized Interest Alert Shield saved me from a $3,200 interest capitalization penalty right when my 6-month grace period expired. Every student needs this app.",
    savings: "$6,900 Capitalization Shielded",
    badge: "Verified Law Scholar",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden bg-dot-grid">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Social Proof & Real Student Outcomes ✨
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by 14,000+ students <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">nationwide</span> 🎓
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            See how Apex AI transforms overwhelming student debt into structured, automated wealth acceleration.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-white/80 shadow-2xl shadow-purple-500/15 hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-purple-300 shadow-md group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 text-base flex items-center gap-1">
                        {t.name}
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      </h3>
                      <p className="text-xs text-purple-700 font-semibold">{t.role}</p>
                      <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                        <GraduationCap className="w-3 h-3 text-slate-400" />
                        {t.university}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating & Badge */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm tracking-widest">{t.rating}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold uppercase tracking-wider">
                    {t.badge}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative pt-2">
                  <Quote className="w-8 h-8 text-purple-200 absolute -top-1 -left-2 -z-10 opacity-70" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Verified Savings Highlight Tag */}
              <div className="mt-6 pt-4 border-t border-purple-100">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-900 to-slate-900 text-white shadow-md flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">Verified Impact:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {t.savings}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
