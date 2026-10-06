export interface BudgetItem {
  id: string;
  category: 'core-video' | 'ai-brain' | '3d-spatial' | 'voice-audio' | 'compute' | 'social-growth';
  categoryLabel: string;
  name: string;
  provider: string;
  monthlyCostUsd: number;
  freeAlternative: string;
  whyCrucial: string;
  costSavingHack: string;
  recommendedPlan: string;
  priority: 'إجباري' | 'أساسي' | 'اختياري ذكي';
}

export const EXACT_100_BUDGET_ITEMS: BudgetItem[] = [
  {
    id: 'higgsfield',
    category: 'core-video',
    categoryLabel: 'توليد الفيديو السينمائي',
    name: 'Higgsfield AI',
    provider: 'Higgsfield Inc.',
    monthlyCostUsd: 39.00,
    freeAlternative: 'Wan 2.1 / CogVideoX محلياً (يحتاج كرت شاشة 16GB+)',
    whyCrucial: 'هو المحرك الأساسي لتحويل صور بلندر إلى لقطات فيديو سينمائية بمحاكاة حركة الكاميرات الحقيقية (DoP) وجودة جلد فائقة الواقعية.',
    costSavingHack: 'استخدم دائماً ميزة Image-to-Video بدلاً من Text-to-Video لتفادي استهلاك النقاط في تجارب الإضاءة؛ اضبط الصورة أولاً ثم ولّد الحركة.',
    recommendedPlan: 'Creator Subscription ($39/mo)',
    priority: 'إجباري',
  },
  {
    id: 'claude-api',
    category: 'ai-brain',
    categoryLabel: 'العقل المدبر وكتابة المحتوى',
    name: 'Claude API (Anthropic)',
    provider: 'Anthropic PBC',
    monthlyCostUsd: 20.00,
    freeAlternative: 'Claude Free Web Tier أو Gemma 2 9B محلياً',
    whyCrucial: 'لكتابة شخصية المؤثر الثابتة، وسيناريوهات الريلز، وهوكات أول 3 ثواني، وأوصاف الصور، والردود الذكية على المتابعين.',
    costSavingHack: 'استخدم تقنية Prompt Caching من Anthropic لتثبيت الـ System Prompt؛ ستقل تكلفة معالجة الأوامر بنسبة تصل إلى 90%، ما يتيح لك توليد آلاف السيناريوهات بـ 15-20$ فقط.',
    recommendedPlan: 'Pay-As-You-Go API (~$20/mo) أو اشتراك Claude Pro',
    priority: 'إجباري',
  },
  {
    id: 'blender-3d',
    category: '3d-spatial',
    categoryLabel: 'الهيكل ثلاثي الأبعاد والإضاءة',
    name: 'Blender 4.2 LTS',
    provider: 'Blender Foundation',
    monthlyCostUsd: 0.00,
    freeAlternative: 'هو في حد ذاته برمجية حرة مفتوحة المصدر مجانية مدى الحياة',
    whyCrucial: 'هو مفتاحك السري لتثبيت زوايا الكاميرا (35mm / 85mm) وإضاءة الاستوديو وتجنب تشوهات الوجه والأصابع دون إنفاق دولار واحد.',
    costSavingHack: 'حمل حزم إضاءة HDRI ونماذج Basemesh مجانية من Poly Haven وSketchfab دون شراء أصول مدفوعة.',
    recommendedPlan: 'Open Source - Free Forever ($0)',
    priority: 'إجباري',
  },
  {
    id: 'elevenlabs',
    category: 'voice-audio',
    categoryLabel: 'الصوت واستنساخ النبرة',
    name: 'ElevenLabs Voice AI',
    provider: 'ElevenLabs',
    monthlyCostUsd: 5.00,
    freeAlternative: 'نموذج XTTS-v2 أو Bark محلياً على جهازك ($0)',
    whyCrucial: 'يمنح المؤثر صوتاً بشرياً حقيقياً مع أنفاس طبيعية ونبرة تتغير حسب سياق الحديث، مع إمكانية استنساخ نبرة محددة تثبت معه دائماً.',
    costSavingHack: 'في خطة الـ 5$ ستحصل على حوالي 30 ألف حرف شهرياً، وهو ما يكفي تماماً لإنتاج 30 إلى 40 ريلز شهرياً إذا كانت مدة كل سكريبت 30 ثانية (حوالي 80-100 كلمة).',
    recommendedPlan: 'Starter Plan ($5/mo)',
    priority: 'أساسي',
  },
  {
    id: 'runpod-gpu',
    category: 'compute',
    categoryLabel: 'حوسبة سحابية وريندر (احتياطي)',
    name: 'RunPod Cloud GPU (Pay-as-you-go)',
    provider: 'RunPod.io',
    monthlyCostUsd: 16.00,
    freeAlternative: 'كارت شاشة حاسوبك الشخصي (RTX 3060 فما فوق)',
    whyCrucial: 'لتشغيل أدوات مفتوحة المصدر مثل LivePortrait لمزامنة الشفاه، وأدوات رفع جودة الفيديو إلى 4K فائق الوضوح (Topaz / Real-ESRGAN) بسرعة جنونية بسعر 0.2$ للساعة فقط.',
    costSavingHack: 'شغّل السيرفر السحابي (Community Cloud RTX 3090/4090) فقط أثناء معالجة دفعة الفيديوهات الأسبوعية (2-3 ساعات أسبوعياً = حوالي 3-4$ أسبوعياً فقط).',
    recommendedPlan: 'Pay-per-minute on-demand GPU (~$16/mo)',
    priority: 'اختياري ذكي',
  },
  {
    id: 'social-tools',
    category: 'social-growth',
    categoryLabel: 'جدولة إنستغرام وتحليلات النمو',
    name: 'Meta Business Suite & Metricool',
    provider: 'Meta & Metricool',
    monthlyCostUsd: 0.00,
    freeAlternative: 'أدوات Meta الرسمية المجانية تماماً',
    whyCrucial: 'لجدولة نشر الريلز والستوريات في أوقات الذروة تلقائياً وتحليل إحصائيات الاحتفاظ بالمشاهدين ومصادر الزيارات.',
    costSavingHack: 'استخدم الخطة المجانية من Metricool لربط حساب إنستغرام وتحليل أفضل أوقات النشر بدقة متناهية دون دفع أي اشتراك.',
    recommendedPlan: 'Free Tier ($0/mo)',
    priority: 'أساسي',
  },
  {
    id: 'reserve-fund',
    category: 'social-growth',
    categoryLabel: 'احتياطي مرن ونطاق احترافي',
    name: 'صندوق الطوارئ وشراء النطاق / Linktree',
    provider: 'Namecheap / Stan / Reserve',
    monthlyCostUsd: 20.00,
    freeAlternative: 'استخدام روابط Beacons أو Bio.link المجانية',
    whyCrucial: 'لشراء دومين مخصص (مثال: novavirtual.com) وتغطية أي زيادة في رصيد توليد Higgsfield إذا صادفك ريلز انتشر فيروسياً وأردت استغلال الزخم فوراً.',
    costSavingHack: 'احفظ هذا الفائض في رصيدك حتى لا تتعطل في منتصف الشهر.',
    recommendedPlan: 'Creator Flex Reserve ($20/mo)',
    priority: 'اختياري ذكي',
  },
];

export const BUDGET_TIERS = [
  {
    title: 'خطة الهواة الصفرية (Zero-Budget Stack)',
    totalCost: '$0 / شهرياً',
    badge: 'مجانية 100%',
    summary: 'تعتمد بالكامل على الأدوات المفتوحة المصدر وتشغيل النماذج محلياً على كارت شاشة شخصي.',
    pros: ['لا توجد مصاريف شهرية', 'خصوصية كاملة', 'تعلم تقني عميق'],
    cons: ['تتطلب كارت شاشة قوي (RTX 3080/4090)', 'سرعة ريندر أبطأ', 'استهلاك كهرباء'],
    stack: [
      { item: 'كتابة المحتوى', tool: 'Claude Web Tier (Free) / DeepSeek' },
      { item: 'البيئة ثلاثية الأبعاد', tool: 'Blender 4.2 (Free)' },
      { item: 'توليد الفيديو', tool: 'Wan 2.1 / CogVideoX محلياً (Free)' },
      { item: 'توليد الصوت', tool: 'XTTS-v2 / Kokoro TTS (Free)' },
      { item: 'مزامنة الشفاه', tool: 'LivePortrait على جيت هاب (Free)' },
    ]
  },
  {
    title: 'خطة المبدع المحترف (The Smart Creator Stack)',
    totalCost: '$100 / شهرياً (خطتك المختارة)',
    badge: 'الخيار الأفضل والأسرع',
    featured: true,
    summary: 'التوازن المثالي بين كفاءة الوقت، الجودة الهوليودية مع Higgsfield، وذكاء Claude الخارق.',
    pros: ['جودة بصرية تنافس كبار الوكالات', 'إنتاج 30-45 ريلز شهرياً بجودة 4K', 'سرعة إنجاز فائقة دون الحاجة لجهاز خارق'],
    cons: ['تتطلب انضباط في استهلاك رصيد الفيديو'],
    stack: [
      { item: 'توليد الفيديو الحركي', tool: 'Higgsfield Creator ($39)' },
      { item: 'العقل وسكريبتات المحتوى', tool: 'Claude 3.5 API / Pro ($20)' },
      { item: 'هندسة الكاميرا والعمق', tool: 'Blender 4.2 Free ($0)' },
      { item: 'الصوت البشري الطبيعي', tool: 'ElevenLabs Starter ($5)' },
      { item: 'معالجة سحابية وريندر', tool: 'RunPod Pay-per-min ($16)' },
      { item: 'صندوق احتياطي ودومين', tool: 'Flex Buffer & Domain ($20)' },
    ]
  },
  {
    title: 'خطة الوكالات والنمو المتسارع (Agency Pro Scale)',
    totalCost: '$250+ / شهرياً',
    badge: 'للمراحل المتقدمة (>100k متابع)',
    summary: 'عندما تبدأ بجني أرباح الإعلانات والرعايات؛ توسيع الأتمتة لإنتاج 3 ريلز يومياً عبر منصات متعددة.',
    pros: ['أتمتة شبه كاملة للمنشورات', 'رصيد فيديو غير محدود تقريباً', 'أدوات ManyChat للرد الآلي وتوليد المبيعات'],
    cons: ['تكلفة أعلى تتطلب وجود نموذج ربحي فعال'],
    stack: [
      { item: 'فيديو توليدي متقدم', tool: 'Higgsfield Pro + Runway Gen-3 ($95)' },
      { item: 'Claude Team / Heavy API', tool: 'Anthropic Unlimited API ($50)' },
      { item: 'استنساخ صوت احترافي', tool: 'ElevenLabs Creator ($22)' },
      { item: 'ManyChat أتمتة الـ DM', tool: 'ManyChat Pro ($15)' },
      { item: 'RunPod سيرفرات مخصصة', tool: 'Dedicated Cloud GPU ($50)' },
      { item: 'محرري تصاميم وموسيقى', tool: 'Artlist / Epidemic Sound ($18)' },
    ]
  }
];
