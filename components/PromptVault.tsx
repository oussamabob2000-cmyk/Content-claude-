'use client';

import React, { useState } from 'react';
import { PROMPT_VAULT, PromptItem } from '@/data/promptVaultData';
import { BookOpen, Copy, Check, Sparkles, Camera, Sun, Layers, Code } from 'lucide-react';

export const PromptVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'كل البرومبتات والأكواد', icon: Sparkles },
    { id: 'camera-moves', label: 'حركات الكاميرا (DoP)', icon: Camera },
    { id: 'skin-realism', label: 'معادلات واقعية الجلد', icon: Layers },
    { id: 'lighting-recipes', label: 'إضاءات الاستوديو والغروب', icon: Sun },
    { id: 'blender-setups', label: 'أكواد واستخراج بلندر', icon: Code },
  ];

  const filteredPrompts = PROMPT_VAULT.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="prompts" className="py-16 border-b border-neutral-850 bg-neutral-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>بنك الأوامر والبرومبتات الجاهزة (Prompt & Shaders Vault)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              برومبتات سينمائية جاهزة للنسخ لـ Higgsfield وBlender
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              تمت هندستها وتجربتها لتعطي أعلى درجات الواقعية وتكسر مظهر الدمى البلاستيكية الشائع في الذكاء الاصطناعي.
            </p>
          </div>

          <div className="text-xs text-neutral-400">
            عدد النماذج المتاحة: <span className="font-bold text-white">{filteredPrompts.length}</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/10'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-850'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900/80 rounded-2xl border border-neutral-800 hover:border-neutral-700 p-6 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-white">
                    {item.titleAr}
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 shrink-0">
                    {item.toolTarget}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {item.descriptionAr}
                </p>

                {/* Parameters pill badges or list */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {item.parameters.map((param, i) => (
                    <div key={i} className="p-2 rounded-lg bg-neutral-950 border border-neutral-800/80 text-[11px]">
                      <span className="text-neutral-500 block">{param.key}:</span>
                      <span className="text-neutral-200 font-mono font-medium truncate block">{param.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Box with Copy */}
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] text-neutral-500 font-mono">نص البرومبت / الكود:</span>
                  <button
                    onClick={() => handleCopy(item.id, item.promptText)}
                    className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">تم النسخ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ النص</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 font-mono text-xs max-h-36 overflow-y-auto dir-ltr text-left font-mono-code leading-relaxed">
                  {item.promptText}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
