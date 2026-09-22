import React from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TerminalWindow from '@/components/TerminalWindow';
import FeatureCardsRow from '@/components/FeatureCardsRow';
import BentoGridShowcase from '@/components/BentoGridShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingTiers from '@/components/PricingTiers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-purple-600 selection:text-white relative">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Glassmorphic Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Interactive Terminal Window Component */}
      <TerminalWindow />

      {/* 5. Three Feature Cards in a Row */}
      <FeatureCardsRow />

      {/* 6. Bento Grid Showcase */}
      <BentoGridShowcase />

      {/* 7. Testimonials Section */}
      <TestimonialsSection />

      {/* 8. Three Pricing Tiers */}
      <PricingTiers />

      {/* 9. Modern SaaS Footer */}
      <Footer />
    </main>
  );
}
