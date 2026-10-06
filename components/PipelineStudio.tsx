'use client';

import React, { useState } from 'react';
import { PIPELINE_STEPS, PipelineStep } from '@/data/pipelineData';
import { Check, Copy, Flame, Layers, Lightbulb, Settings, Code2, Camera, Sparkles } from 'lucide-react';

export const PipelineStudio: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const activeStep: PipelineStep = PIPELINE_STEPS[selectedStepIndex];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="pipeline" className="py-16 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>خطوات الإنتاج المتسلسلة (The 5-Step Pipeline)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              منظومة الإنتاج: Claude + Blender + Higgsfield
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              كيف تدمج الأدوات الثلاث بشكل هندسي لإنتاج فيديوهات ريلز خالية من أخطاء الذكاء الاصطناعي وبوجه متطابق بنسبة 100%.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-1.5 rounded-xl text-xs text-neutral-300">
            <span>الخطوة الحالية:</span>
            <span className="font-bold text-amber-400">{selectedStepIndex + 1} من {PIPELINE_STEPS.length}</span>
          </div>
        </div>

        {/* Step Selector Horizontal Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {PIPELINE_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setSelectedStepIndex(idx)}
                className={`flex flex-col items-start p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-850 border-amber-500/80 shadow-md shadow-amber-500/10'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    0{step.stepNumber}
                  </span>
                  <span className={`text-xs font-semibold ${step.toolColor.split(' ')[0]}`}>
                    {step.tool}
                  </span>
                </div>
                <div className="text-xs font-bold text-white line-clamp-1">
                  {step.titleAr.split('(')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Content Card */}
        <div className="bg-neutral-900/90 rounded-2xl border border-neutral-800 overflow-hidden shadow-xl">
          
          {/* Header of Active Step */}
          <div className="p-6 sm:p-8 border-b border-neutral-800 bg-neutral-900/50">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold flex items-center justify-center text-sm">
                  {activeStep.stepNumber}
                </span>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${activeStep.toolColor}`}>
                  الأداة المستهدفة: {activeStep.tool}
                </span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {activeStep.titleAr}
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {activeStep.summaryAr}
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* The Critical Secret Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/30 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 mt-0.5 shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-300 mb-1">
                  السر الاحترافي (The Production Hack):
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {activeStep.criticalSecret}
                </p>
              </div>
            </div>

            {/* Checklist of sub-steps */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Settings className="w-4 h-4 text-amber-400" />
                <span>إجراءات التنفيذ خطوة بخطوة:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeStep.stepsList.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
                    <span className="w-5 h-5 rounded-full bg-neutral-800 text-amber-400 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-300 leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Settings Table */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Camera className="w-4 h-4 text-orange-400" />
                <span>المعايير والإعدادات التقنية الموصى بها:</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeStep.techSettings.map((spec, i) => (
                  <div key={i} className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <div className="text-[11px] text-neutral-400 font-medium mb-1">{spec.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code / Prompt Template */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>{activeStep.codeTemplateTitle}</span>
                </h4>
                <button
                  onClick={() => handleCopy(activeStep.codeTemplate)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>نسخ القالب</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
                <pre className="p-4 text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed dir-ltr text-left font-mono-code max-h-72">
                  {activeStep.codeTemplate}
                </pre>
              </div>
            </div>

          </div>

          {/* Navigation between steps */}
          <div className="p-4 sm:p-6 bg-neutral-950/70 border-t border-neutral-800 flex items-center justify-between">
            <button
              disabled={selectedStepIndex === 0}
              onClick={() => setSelectedStepIndex(prev => prev - 1)}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              الخطوة السابقة
            </button>
            <button
              disabled={selectedStepIndex === PIPELINE_STEPS.length - 1}
              onClick={() => setSelectedStepIndex(prev => prev + 1)}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-neutral-950 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              الخطوة التالية
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
