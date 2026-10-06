'use client';

import React, { useState } from 'react';
import { GITHUB_LIBRARIES, GithubLibrary } from '@/data/githubLibraries';
import { Terminal, Search, ExternalLink, Star, Copy, Check, Sparkles, Filter, Code, Bot } from 'lucide-react';

export const GithubLibraries: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedSnippetId, setExpandedSnippetId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'كل المكتبات' },
    { id: 'claude-core', label: 'مكتبات Claude الرسمية' },
    { id: 'content-agents', label: 'صناعة المحتوى والأتمتة' },
    { id: 'mcp-servers', label: 'بروتوكول MCP والأدوات' },
    { id: 'video-visuals', label: 'مزامنة الحركة والـ 3D' },
    { id: 'prompt-craft', label: 'هندسة أوامر Claude' },
  ];

  const filteredLibraries = GITHUB_LIBRARIES.filter((lib) => {
    const matchesCategory = selectedCategory === 'all' || lib.category === selectedCategory;
    const matchesSearch =
      lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.repo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.descriptionAr.includes(searchQuery) ||
      lib.whyForAiInfluencer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handleCopyCommand = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="libraries" className="py-16 border-b border-neutral-850 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span>مستودعات وأكواد مفتوحة المصدر (Curated GitHub Repos)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              أفضل مكتبات Claude وGitHub لصناعة المحتوى والأتمتة
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              قائمة مدروسة من المستودعات الرسمية والمجتمعية التي تتيح لك أتمتة توليد السيناريوهات والـ Hooks وربط Claude ببلندر وأدوات الرندر.
            </p>
          </div>

          <div className="text-xs text-neutral-400">
            عدد المستودعات المختارة: <span className="font-bold text-white">{filteredLibraries.length}</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Categories Segmented Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1 bg-neutral-900 border border-neutral-800 rounded-xl scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم أو التقنية..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pr-9 pl-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/80 transition-colors"
            />
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLibraries.map((lib) => (
            <div
              key={lib.id}
              className="bg-neutral-900/80 rounded-2xl border border-neutral-800 hover:border-neutral-700/80 p-6 flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-black/40 group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {lib.name}
                      </h3>
                      {lib.official && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          رسمي من Anthropic
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-neutral-400 font-mono">
                      {lib.repo}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-amber-400 font-mono">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                    <span>{lib.stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {lib.descriptionAr}
                </p>

                {/* Why for AI Influencer highlight */}
                <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-4">
                  <div className="text-[11px] font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>فائدتها الحصرية لمشروع الـ AI Influencer:</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {lib.whyForAiInfluencer}
                  </p>
                </div>

                {/* Tech Badges as clean unboxed text with separators */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-400 mb-4">
                  <span className="text-neutral-500">التقنيات:</span>
                  {lib.techStack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-neutral-300 font-mono">{tech}</span>
                      {i < lib.techStack.length - 1 && <span className="text-neutral-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Commands */}
              <div className="space-y-3 pt-3 border-t border-neutral-800/80">
                
                {/* Clone Command Bar */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-neutral-950 border border-neutral-800/80">
                  <span className="text-xs font-mono text-neutral-400 truncate dir-ltr text-left">
                    {lib.cloneCommand}
                  </span>
                  <button
                    onClick={() => handleCopyCommand(lib.id, lib.cloneCommand)}
                    className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors shrink-0"
                    title="نسخ أمر التثبيت"
                  >
                    {copiedId === lib.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Expanded Snippet Toggle & GitHub Link */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setExpandedSnippetId(expandedSnippetId === lib.id ? null : lib.id)}
                    className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>{expandedSnippetId === lib.id ? 'إخفاء كود المثال' : 'معاينة كود الاستخدام'}</span>
                  </button>

                  <a
                    href={lib.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>فتح في GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Expandable Snippet Preview */}
                {expandedSnippetId === lib.id && (
                  <div className="mt-2 p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs font-mono font-mono-code overflow-x-auto text-left dir-ltr">
                    <pre>{lib.quickSnippet}</pre>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
