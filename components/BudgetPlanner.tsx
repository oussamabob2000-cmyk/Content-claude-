'use client';

import React, { useState } from 'react';
import { EXACT_100_BUDGET_ITEMS, BUDGET_TIERS, BudgetItem } from '@/data/budgetData';
import { DollarSign, PieChart, ShieldCheck, Zap, Sliders, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export const BudgetPlanner: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(1); // 1 is $100 Smart Creator

  // Simulator Sliders
  const [reelsCount, setReelsCount] = useState<number>(30); // 30 reels/mo
  const [runpodHours, setRunpodHours] = useState<number>(15); // 15 hrs GPU
  const [claudeUsageTokens, setClaudeUsageTokens] = useState<number>(15); // $15 Claude API

  // Simulated calculations
  const simulatedHiggsfield = 39; // base plan
  const simulatedElevenLabs = reelsCount > 35 ? 11 : 5;
  const simulatedRunpod = Math.round(runpodHours * 0.35); // ~$0.35/hr average on RTX 3090/4090
  const simulatedTotal = simulatedHiggsfield + claudeUsageTokens + simulatedElevenLabs + simulatedRunpod;
  const simulatedRemaining = 100 - simulatedTotal;

  return (
    <section id="budget" className="py-16 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
              <DollarSign className="w-4 h-4" />
              <span>هندسة التكاليف والاشتراكات (The $100/mo Financial Blueprint)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              توزيع الميزانية الشهرية: 100 دولار بدقة السنت
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              كيف تستغل كل دولار لإنتاج 30 إلى 45 ريلز عالي الجودة شهرياً دون هدر، مع بدائل مجانية وحيل لخفض التكاليف بنسبة 80%.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-right">
            <div className="text-[11px] text-neutral-400">إجمالي الميزانية المحددة:</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">$100.00 USD / شهر</div>
          </div>
        </div>

        {/* 3 Tiers Comparison Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {BUDGET_TIERS.map((tier, idx) => {
            const isSelected = selectedTier === idx;
            return (
              <div
                key={tier.title}
                onClick={() => setSelectedTier(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-neutral-850 border-amber-500/80 shadow-lg shadow-amber-500/10'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-neutral-950 uppercase tracking-wider">
                    الخيار الموصى به لك
                  </span>
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-neutral-300">{tier.title.split('(')[0]}</span>
                  <span className="text-xs font-bold text-amber-400 font-mono">{tier.totalCost}</span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {tier.summary}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-neutral-800">
                  {tier.stack.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-neutral-400">{item.item}:</span>
                      <span className="text-white font-medium">{item.tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Itemized Table Breakdown */}
        <div className="bg-neutral-900/80 rounded-2xl border border-neutral-800 overflow-hidden mb-12">
          <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <PieChart className="w-5 h-5 text-amber-400" />
              <span>جدول التكلفة التفصيلي لخطة الـ 100$ الشهرية</span>
            </h3>
            <span className="text-xs text-neutral-400">جميع الأسعار محدثة لعام 2025/2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-neutral-950/60 text-neutral-400 border-b border-neutral-800 text-[11px] uppercase">
                <tr>
                  <th className="py-3 px-4">الأداة / الخدمة</th>
                  <th className="py-3 px-4">النوع والمهمة</th>
                  <th className="py-3 px-4">التكلفة الشهرية</th>
                  <th className="py-3 px-4">البديل المجاني ($0)</th>
                  <th className="py-3 px-4">حيلة التوفير (Cost Hack)</th>
                  <th className="py-3 px-4 text-center">الأهمية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80">
                {EXACT_100_BUDGET_ITEMS.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-850/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      <div className="flex items-center gap-2">
                        <span>{item.name}</span>
                      </div>
                      <div className="text-[11px] font-normal text-neutral-400 font-mono">{item.provider}</div>
                    </td>
                    <td className="py-3.5 px-4 text-neutral-300">
                      {item.categoryLabel}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-emerald-400 font-mono text-sm">
                      {item.monthlyCostUsd === 0 ? 'مجاني ($0)' : `$${item.monthlyCostUsd.toFixed(2)}`}
                    </td>
                    <td className="py-3.5 px-4 text-neutral-400 text-xs">
                      {item.freeAlternative}
                    </td>
                    <td className="py-3.5 px-4 text-neutral-300 text-xs max-w-xs">
                      {item.costSavingHack}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                        item.priority === 'إجباري'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : item.priority === 'أساسي'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {item.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-neutral-950/80 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
            <div>
              <span className="text-white font-semibold">المجموع الإجمالي الشهري: </span>
              <span className="text-emerald-400 font-mono font-bold text-sm">$100.00 / شهر</span>
            </div>
            <div className="text-neutral-500">
              * يشمل 20$ احتياطي مرن للمزيد من النقاط أو حجز الدومين الاحترافي.
            </div>
          </div>
        </div>

        {/* Interactive Budget Simulator Widget */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 rounded-2xl border border-neutral-800 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
            <Sliders className="w-4 h-4" />
            <span>محاكي استهلاك الميزانية التفاعلي (Interactive Cost Simulator)</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
            اضبط إنتاجك الشهري وتأكد من بقائك تحت سقف الـ 100$
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6 max-w-2xl">
            حرك المؤشرات لاختبار التكلفة الواقعية بناءً على وتيرة نشر الريلز وساعات استخدام المعالجة السحابية.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Slider 1: Reels count */}
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-neutral-300">عدد الريلز المستهدفة:</span>
                <span className="text-sm font-bold text-amber-400 font-mono">{reelsCount} ريلز / شهر</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={reelsCount}
                onChange={(e) => setReelsCount(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>10 (هادئ)</span>
                <span>30 (1 يومياً)</span>
                <span>60 (2 يومياً)</span>
              </div>
            </div>

            {/* Slider 2: RunPod Hours */}
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-neutral-300">ساعات سيرفر RunPod GPU:</span>
                <span className="text-sm font-bold text-cyan-400 font-mono">{runpodHours} ساعة / شهر</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="2"
                value={runpodHours}
                onChange={(e) => setRunpodHours(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>0 (محلي مجاني)</span>
                <span>15 ساعة (متوسط)</span>
                <span>40 ساعة (مكثف)</span>
              </div>
            </div>

            {/* Slider 3: Claude API usage */}
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-neutral-300">استهلاك Claude API:</span>
                <span className="text-sm font-bold text-orange-400 font-mono">${claudeUsageTokens} / شهر</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={claudeUsageTokens}
                onChange={(e) => setClaudeUsageTokens(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>$5 (~300 سكريبت)</span>
                <span>$15 (متوسط)</span>
                <span>$30 (ضخم)</span>
              </div>
            </div>

          </div>

          {/* Simulator Summary Bar */}
          <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-neutral-400">التكلفة التقديرية المحسوبة:</div>
              <div className="text-2xl font-black text-white font-mono flex items-center gap-2">
                <span>${simulatedTotal}</span>
                <span className="text-xs font-normal text-neutral-400 font-sans">من أصل $100</span>
              </div>
            </div>

            {simulatedTotal <= 100 ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>ممتاز! ميزانيتك متوازنة تماماً ولديك فائض احتياطي ${simulatedRemaining}.</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-xl text-xs font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>تنبيه: تجاوزت الميزانية بـ ${simulatedTotal - 100}. قلل ساعات RunPod أو استخدم بدائل محلية مجانية.</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
