'use client';

import React, { useState } from 'react';
import { Sparkles, Bot, Video, Camera, Copy, Check, RefreshCw, Wand2, ArrowLeft, Flame, Lightbulb } from 'lucide-react';

export const AiInfluencerGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'persona' | 'reel' | 'higgsfield'>('persona');
  
  // Form States
  const [niche, setNiche] = useState<string>('Fashion & Luxury Arabian Lifestyle');
  const [style, setStyle] = useState<string>('Cinematic Photorealistic (Arri Alexa)');
  const [language, setLanguage] = useState<string>('ar');
  const [topic, setTopic] = useState<string>('كيف صممت حقيبة يد مستقبلية بالذكاء الاصطناعي في 10 دقائق');
  const [extraDetails, setExtraDetails] = useState<string>('مؤثرة شابة مقيمة في دبي والرياض، ملامح خليجية أنيقة، نبرة ذكية ومحبة للتقنية والموضة');

  // Generation state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setErrorMsg('');
    setResult('');

    try {
      const response = await fetch('/api/ai-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: activeTab,
          niche,
          style,
          language,
          topic,
          extraDetails,
        }),
      });

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || 'فشل التوليد، يرجى المحاولة مرة أخرى.');
      }

      setResult(data.text);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'حدث خطأ في الاتصال بالخادم.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const setPreset = (presetNiche: string, presetTopic: string, presetDetails: string) => {
    setNiche(presetNiche);
    setTopic(presetTopic);
    setExtraDetails(presetDetails);
  };

  return (
    <section id="generator" className="py-16 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>محرك التوليد المباشر (Powered by Gemini API)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            استوديو التوليد الذكي للشخصية ومحتوى الريلز
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            ولّد هوية متكاملة بكلمات تثبيت الوجه، أو سكريبت ريلز فيروسي بهوك الـ 3 ثواني، أو إعدادات Higgsfield وبلندر بضغطة زر واحدة.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button
              onClick={() => setActiveTab('persona')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'persona'
                  ? 'bg-amber-500 text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>1. ملف وهوية المؤثر (Persona)</span>
            </button>

            <button
              onClick={() => setActiveTab('reel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'reel'
                  ? 'bg-orange-500 text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>2. سكريبت ريلز فيروسي (Viral Reel)</span>
            </button>

            <button
              onClick={() => setActiveTab('higgsfield')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'higgsfield'
                  ? 'bg-emerald-500 text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>3. برومبت Higgsfield & Blender</span>
            </button>
          </div>
        </div>

        {/* Generator Main Grid: Inputs vs Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center justify-between">
              <span>خيارات ومعايير التوليد:</span>
              <span className="text-[11px] text-amber-400 font-mono">Real-time AI</span>
            </h3>

            {/* Quick Presets */}
            <div>
              <label className="block text-[11px] font-semibold text-neutral-400 mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>أفكار سريعة جاهزة للاختيار:</span>
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setPreset('Luxury Arabian Fashion', 'أحدث فساتين الهوت كوتور ثلاثية الأبعاد في أسبوع دبي للموضة', 'أنيقة، ملامح خليجية عصرية، ذوق رفيع')}
                  className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 text-[11px] text-neutral-300 transition-colors"
                >
                  أزياء دبي الراقية
                </button>
                <button
                  type="button"
                  onClick={() => setPreset('AI Tech & Gaming Director', 'لماذا ستختفي الهواتف التقليدية خلال 3 سنوات؟', 'شاب تقني بأسلوب Cyberpunk مستقبلي ونظارات ذكية')}
                  className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 text-[11px] text-neutral-300 transition-colors"
                >
                  تقنية ومستقبل
                </button>
                <button
                  type="button"
                  onClick={() => setPreset('Fitness & Wellness Nomad', 'روتين الصباحي الافتراضي لزيادة الطاقة 300%', 'رياضية، طاقة إيجابية، أسلوب حياة صحي في العلا')}
                  className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 text-[11px] text-neutral-300 transition-colors"
                >
                  لياقة ولايف ستايل
                </button>
              </div>
            </div>

            {/* Field: Niche */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                مجال التخصص والنيتش (Niche):
              </label>
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="مثال: Luxury Streetwear & AI Fashion"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Field: Style / Aesthetic */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                الأسلوب البصري ونوع التصوير:
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="Cinematic Photorealistic (Arri Alexa 35mm)">سينمائي واقعي احترافي (Cinematic Photoreal)</option>
                <option value="Candid Smartphone Street Vibe (iPhone 16 Pro Raw)">واقعي عفوي كأنها مصورة بهاتف آيفون في الشارع</option>
                <option value="Editorial High-Fashion Magazine Cover">غلاف مجلة أزياء عالمية (Vogue / Harper&apos;s Bazaar)</option>
                <option value="Cyberpunk & Futuristic Neon">سايبربانك ونيون مستقبلي</option>
              </select>
            </div>

            {/* Conditional Field: Topic for Reels or Higgsfield */}
            {activeTab !== 'persona' && (
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  موضوع الريل أو فكرة المشهد:
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="مثال: سر اختيار إضاءة الاستوديو بدون برامج باهظة..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            )}

            {/* Field: Extra Details */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                تفضيلات إضافية ومواصفات الشخصية:
              </label>
              <textarea
                rows={3}
                value={extraDetails}
                onChange={(e) => setExtraDetails(e.target.value)}
                placeholder="أدخل أي تفاصيل عن الملامح، الملابس، أو طريقة الكلام..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            {/* Language toggle for Reels */}
            {activeTab === 'reel' && (
              <div className="flex items-center justify-between text-xs text-neutral-300">
                <span>لغة التعليق الصوتي:</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setLanguage('ar')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      language === 'ar' ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-950 text-neutral-400'
                    }`}
                  >
                    العربية
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      language === 'en' ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-950 text-neutral-400'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-neutral-950 hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-98 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>جارٍ التوليد عبر الذكاء الاصطناعي...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>توليد المحتوى الآن بنقرة واحدة</span>
                </>
              )}
            </button>
          </div>

          {/* Result Output Column (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 flex flex-col min-h-[520px]">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white">المخرجات المولدة (AI Output):</span>
              </div>

              {result && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ النص كاملاً</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Output Display Area */}
            <div className="flex-1 overflow-y-auto max-h-[560px] pr-1">
              {isLoading && (
                <div className="h-64 flex flex-col items-center justify-center gap-3 text-neutral-400">
                  <RefreshCw className="w-8 h-8 animate-spin text-amber-400" />
                  <p className="text-xs text-neutral-300">
                    يقوم النموذج الآن بهندسة سكريبت دقيق متوافق مع Blender وHiggsfield...
                  </p>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                  {errorMsg}
                </div>
              )}

              {!isLoading && !result && !errorMsg && (
                <div className="h-64 flex flex-col items-center justify-center gap-3 text-center p-6 text-neutral-500">
                  <Bot className="w-12 h-12 text-neutral-700" />
                  <div className="text-sm font-semibold text-neutral-400">
                    لم يتم توليد أي محتوى بعد
                  </div>
                  <p className="text-xs max-w-sm">
                    اختر الفكرة أو النيتش في العمود الجانبي واضغط على زر &quot;توليد المحتوى الآن&quot; لترى الهيكل الكامل والبرومبتات الجاهزة للنسخ.
                  </p>
                </div>
              )}

              {result && (
                <div className="text-xs sm:text-sm text-neutral-200 whitespace-pre-line leading-relaxed font-sans">
                  {result}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
