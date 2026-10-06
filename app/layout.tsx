import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Influencer OS & Claude Studio | دليل بناء مؤثر ذكاء اصطناعي لمليون متابع',
  description: 'الدليل الشامل ومنظومة بناء مؤثر ذكاء اصطناعي (AI Influencer) احترافي باستخدام Claude وHiggsfield وBlender مع خطة نمو إنستغرام لمليون متابع وميزانية 100 دولار شهرياً ومكتبات GitHub مفتوحة المصدر.',
  openGraph: {
    title: 'AI Influencer OS & Claude Studio | بناء مؤثر ذكاء اصطناعي احترافي',
    description: 'خطة شاملة ومكتبات GitHub وأدوات Claude وHiggsfield وBlender بميزانية 100 دولار لمليون متابع.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Influencer OS & Claude Studio',
    description: 'منظومة بناء مؤثر ذكاء اصطناعي احترافي بميزانية 100 دولار شهرياً.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-500/30 selection:text-amber-200 min-h-screen font-['Cairo',sans-serif]">
        {children}
      </body>
    </html>
  );
}

