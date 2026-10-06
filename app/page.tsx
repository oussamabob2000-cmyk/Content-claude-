'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PipelineStudio } from '@/components/PipelineStudio';
import { GithubLibraries } from '@/components/GithubLibraries';
import { BudgetPlanner } from '@/components/BudgetPlanner';
import { InstagramRoadmap } from '@/components/InstagramRoadmap';
import { AiInfluencerGenerator } from '@/components/AiInfluencerGenerator';
import { PromptVault } from '@/components/PromptVault';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onNavigate={scrollToSection} />
        
        {/* Pipeline: Steps 1 to 5 */}
        <PipelineStudio />

        {/* Curated GitHub Libraries for Claude & Content Automation */}
        <GithubLibraries />

        {/* Budget Planner: The $100/month Blueprint & Simulator */}
        <BudgetPlanner />

        {/* AI Studio: Real-time Persona & Viral Reel Generator */}
        <AiInfluencerGenerator />

        {/* Instagram Growth Roadmap: 0 to 1,000,000 Followers */}
        <InstagramRoadmap />

        {/* Prompt & Shaders Vault */}
        <PromptVault />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
