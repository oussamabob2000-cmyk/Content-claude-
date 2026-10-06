'use client';

import React from 'react';
import { Cpu, Terminal, DollarSign, Layers, BookOpen, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-850 pt-12 pb-8 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-white">AI Influencer OS</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-xs">
              المنظومة العملية المتكاملة لإنشاء وإطلاق مؤثر ذكاء اصطناعي احترافي على إنستغرام لمليون متابع بميزانية لا تتجاوز 100$ شهرياً.
            </p>
            <div className="text-[11px] text-amber-400 font-mono">
              Claude 3.7 · Higgsfield · Blender 4.2
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">
              أقسام المنصة
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('pipeline')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  خطوات العمل (Pipeline)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('libraries')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  مكتبات Claude على GitHub
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('budget')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  ميزانية الـ 100$ التفصيلية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  خطة المليون متابع على إنستغرام
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('generator')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  المولد الذكي (AI Studio)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Essential Tools */}
          <div>
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">
              الروابط والمصادر الرسمية
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/anthropics/anthropic-cookbook"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Anthropic Cookbook</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://higgsfield.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Higgsfield AI Studio</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.blender.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Blender 3D (مجاني 100%)</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://elevenlabs.io"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>ElevenLabs Voice AI</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Production Rules */}
          <div>
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">
              قواعد النجاح الثلاث
            </h4>
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="text-[11px] text-neutral-300">
                1. <strong>الثبات أولاً:</strong> لا تغير ملامح الوجه أبداً بعد أول ريلز ناجح.
              </div>
              <div className="text-[11px] text-neutral-300">
                2. <strong>هوك الـ 3 ثواني:</strong> إذا لم توقف المشاهد في ثانية 1، فقد خسرت الريل.
              </div>
              <div className="text-[11px] text-neutral-300">
                3. <strong>انضباط الـ 100$:</strong> استغل كاش الأوامر ولا تهدر الرصيد.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-[11px]">
          <div>
            AI Influencer OS & Claude Studio © {new Date().getFullYear()} — صُمم لتمكين صناع المحتوى ورواد الأعمال الرقميين.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>مدعوم بـ Claude وHiggsfield وBlender</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
