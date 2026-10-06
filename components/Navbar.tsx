'use client';

import React from 'react';
import { Sparkles, Terminal, Cpu, DollarSign, TrendingUp, Layers, BookOpen } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'pipeline', label: 'خطوات العمل (Pipeline)', icon: Layers },
    { id: 'libraries', label: 'مكتبات Claude & GitHub', icon: Terminal },
    { id: 'budget', label: 'خطة الـ 100$ شهرياً', icon: DollarSign },
    { id: 'generator', label: 'المولد الذكي (AI Studio)', icon: Sparkles },
    { id: 'roadmap', label: 'خطة المليون متابع', icon: TrendingUp },
    { id: 'prompts', label: 'بنك البرومبتات', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/85 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 p-0.5 shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/25 transition-all">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-wide text-white group-hover:text-amber-400 transition-colors">
                AI Influencer OS
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                100$/mo
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              Claude · Higgsfield · Blender
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-neutral-800 text-amber-400 border border-neutral-700/80 shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-neutral-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('generator')}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 hover:from-amber-400 hover:to-orange-400 shadow-md shadow-amber-500/20 transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>توليد المحتوى الآن</span>
          </button>
        </div>

      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto px-4 py-2 bg-neutral-900/60 border-t border-neutral-800/50 scrollbar-none">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`whitespace-nowrap px-3 py-1 rounded text-xs transition-colors ${
              activeSection === item.id
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
