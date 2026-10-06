'use client';

import React from 'react';
import { Sparkles, Layers, DollarSign, TrendingUp, CheckCircle2, ArrowLeft, Flame, Video, Box, Bot } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden border-b border-neutral-850">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Kicker Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>الدليل العملي لعام 2025/2026</span>
            <span className="text-neutral-600">·</span>
            <span className="text-amber-400 font-semibold">ميزانية محددة: 100$ شهرياً</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            اصنع مؤثر ذكاء اصطناعي واصل لـ{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              ملايين المتابعين
            </span>
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto">
            خطة متكاملة ومنظومة إنتاج تعتمد على ثلاثي القوة: <strong className="text-amber-300 font-semibold">Claude</strong> (العقل والسكريبتات الفيروسية)، و<strong className="text-orange-300 font-semibold">Blender</strong> (ثبات الكاميرا والإضاءة)، و<strong className="text-emerald-300 font-semibold">Higgsfield</strong> (الفيديو السينمائي DoP)، مع أفضل مكتبات GitHub مفتوحة المصدر وبميزانية لا تتعدى 100$ شهرياً.
          </p>
        </div>

        {/* 3 Pillars Visual Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 transition-all flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 font-medium">الركيزة 1: العقل والسيناريو</div>
              <div className="text-sm font-bold text-white">Claude 3.7 & GitHub</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/40 transition-all flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 font-medium">الركيزة 2: ثبات الوجه والعمق</div>
              <div className="text-sm font-bold text-white">Blender 4.2 LTS (مجاني)</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 transition-all flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 font-medium">الركيزة 3: حركة الكاميرا والجلد</div>
              <div className="text-sm font-bold text-white">Higgsfield AI (DoP)</div>
            </div>
          </div>
        </div>

        {/* Call To Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onNavigate('pipeline')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25 transition-all transform active:scale-95"
          >
            <span>استكشف خطوات العمل (Pipeline)</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('budget')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-700/80 transition-all"
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>حساب تكلفة الـ 100$ بالتفصيل</span>
          </button>

          <button
            onClick={() => onNavigate('generator')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-700/80 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>توليد شخصية وسكريبت ريلز</span>
          </button>
        </div>

        {/* Key Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-850">
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">$100 / شهر</div>
            <div className="text-xs text-neutral-400 mt-1">توزيع دقيق ومدروس للاشتراكات</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">1,000,000</div>
            <div className="text-xs text-neutral-400 mt-1">هدف المتابعين على إنستغرام</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono">8+ مستودعات</div>
            <div className="text-xs text-neutral-400 mt-1">أكواد GitHub مفتوحة المصدر</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100% ثبات</div>
            <div className="text-xs text-neutral-400 mt-1">ثبات ملامح الوجه بدون تشوهات</div>
          </div>
        </div>

      </div>
    </section>
  );
};
