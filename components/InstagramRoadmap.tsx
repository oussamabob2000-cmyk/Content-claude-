'use client';

import React, { useState } from 'react';
import { INSTAGRAM_ROADMAP, RoadmapPhase } from '@/data/roadmapData';
import { TrendingUp, CheckSquare, Square, Flame, Target, Calendar, DollarSign, Award, ChevronLeft } from 'lucide-react';

export const InstagramRoadmap: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [checkedMilestones, setCheckedMilestones] = useState<{ [key: string]: boolean }>({});

  const activePhase: RoadmapPhase = INSTAGRAM_ROADMAP[activePhaseIndex];

  const toggleCheck = (phaseNum: number, idx: number) => {
    const key = `${phaseNum}-${idx}`;
    setCheckedMilestones((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="roadmap" className="py-16 border-b border-neutral-850 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>خارطة طريق النمو المليوني (Instagram 0 to 1M Roadmap)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              خطة الوصول لمليون متابع على إنستغرام
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              استراتيجية مرحلية تعتمد على خوارزميات ريلز الحديثة لعام 2025/2026: من مرحلة الصفر وإثبات الهوية، إلى صفقات الرعاية التجارية والعقود السنوية.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl">
            <span>الهدف الأسمى:</span>
            <span className="font-bold text-rose-400 mr-1">1,000,000 متابع حقيقي متفاعل</span>
          </div>
        </div>

        {/* Phase Stepper Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-8">
          {INSTAGRAM_ROADMAP.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;
            return (
              <button
                key={phase.phaseNumber}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-xl border text-right transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-850 border-rose-500/80 shadow-md shadow-rose-500/10'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-rose-500 text-white' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    المرحلة {phase.phaseNumber}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {phase.duration}
                  </span>
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {phase.followerRange}
                </div>
                <div className="text-[11px] text-neutral-400 truncate">
                  {phase.nameAr.split('(')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details Card */}
        <div className="bg-neutral-900/90 rounded-2xl border border-neutral-800 overflow-hidden shadow-xl">
          
          {/* Header of Active Phase */}
          <div className="p-6 sm:p-8 border-b border-neutral-800 bg-neutral-900/40">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-rose-400 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20">
                النطاق: {activePhase.followerRange}
              </span>
              <span className="text-xs text-neutral-400">
                المدة المتوقعة: <strong className="text-white">{activePhase.duration}</strong>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {activePhase.nameAr}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
              {activePhase.focusAr}
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* KPI Cards & Frequency */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <div className="text-[11px] text-neutral-400 font-medium mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>جدول النشر الموصى به:</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-normal">
                  {activePhase.postingFrequency}
                </div>
              </div>

              {activePhase.coreKpis.map((kpi, i) => (
                <div key={i} className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                  <div className="text-[11px] text-neutral-400 font-medium mb-1 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-rose-400" />
                    <span>{kpi.label}:</span>
                  </div>
                  <div className="text-sm font-mono font-bold text-emerald-400">
                    {kpi.target}
                  </div>
                </div>
              ))}
            </div>

            {/* Algorithm Secret Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-transparent border border-rose-500/30 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 shrink-0 mt-0.5">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-rose-300 mb-1">
                  سر خوارزمية إنستغرام لهذه المرحلة (Algorithm Hack):
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {activePhase.algorithmSecret}
                </p>
              </div>
            </div>

            {/* Interactive Checklist */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
                <span>قائمة مهام الإنجاز لهذه المرحلة (اضغط لتحديد المهام المنجزة):</span>
              </h4>
              <div className="space-y-2.5">
                {activePhase.milestoneChecklist.map((task, idx) => {
                  const isChecked = checkedMilestones[`${activePhase.phaseNumber}-${idx}`] || false;
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(activePhase.phaseNumber, idx)}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-950/20 border-emerald-500/40 text-neutral-300'
                          : 'bg-neutral-950/80 border-neutral-800/80 text-white hover:border-neutral-700'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-neutral-500 shrink-0" />
                      )}
                      <span className={`text-xs sm:text-sm leading-normal ${isChecked ? 'line-through text-neutral-400' : ''}`}>
                        {task}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Monetization Strategy Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-emerald-400 mb-1">
                  استراتيجية تحقيق الدخل (Monetization & Revenue):
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {activePhase.monetizationStrategy}
                </p>
              </div>
            </div>

          </div>

          {/* Stepper Footer */}
          <div className="p-4 sm:p-6 bg-neutral-950/70 border-t border-neutral-800 flex items-center justify-between">
            <button
              disabled={activePhaseIndex === 0}
              onClick={() => setActivePhaseIndex(prev => prev - 1)}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              المرحلة السابقة
            </button>
            <button
              disabled={activePhaseIndex === INSTAGRAM_ROADMAP.length - 1}
              onClick={() => setActivePhaseIndex(prev => prev + 1)}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-rose-500 hover:bg-rose-400 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              المرحلة التالية
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
