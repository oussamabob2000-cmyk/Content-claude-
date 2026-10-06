export interface PipelineStep {
  stepNumber: number;
  titleAr: string;
  tool: 'Claude' | 'Blender' | 'Higgsfield' | 'Voice & Audio' | 'Instagram Engine';
  toolColor: string;
  summaryAr: string;
  criticalSecret: string;
  stepsList: string[];
  techSettings: { label: string; value: string }[];
  codeTemplateTitle: string;
  codeTemplate: string;
}

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    stepNumber: 1,
    titleAr: 'صناعة الهوية ولور الشخصية الثابت (Identity & Lore Genesis)',
    tool: 'Claude',
    toolColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    summaryAr: 'بناء الـ Character Bible الكامل للشخصية: الاسم، الملامح البيومترية، نبرة الصوت، وسلسلة الكلمات الدلالية الثابتة (Prompt Tokens) التي تضمن أن يخرج وجه المؤثر متطابقاً في كل صورة وفيديو.',
    criticalSecret: 'السر الفيروسي: لا تبدأ أبداً دون تحديد "Signature Flaw" أو علامة مميزة واقعية (مثل نمش خفيف، شامة صغيرة بجانب العين، تسريحة شعر محددة)، لأن الكمال الزائد يفضح الذكاء الاصطناعي ويقلل تفاعل الجمهور.',
    stepsList: [
      'تحديد النيتش (Niche): أزياء راقية، سفر وسياحة، تقنية وبرمجة، لياقة بدنية، أو لايف ستايل خليجي/عربي.',
      'كتابة الـ System Prompt الصارم لـ Claude لتقمص الشخصية بشكل دائم دون خروج عن النص.',
      'صياغة بطاقة الوصف الفيزيائي الثابتة (Physical Appearance Tokens) لاستخدامها في كل برومبت توليد.',
      'إنشاء جدول الألوان والأزياء المميزة (Signature Wardrobe & Color Palette) لبناء هوية بصرية يتذكرها المتابع فوراً.',
    ],
    techSettings: [
      { label: 'Claude Model', value: 'Claude 3.5 Sonnet / 3.7 Sonnet' },
      { label: 'Prompt Style', value: 'Structured XML with <character_lore>' },
      { label: 'Temperature', value: '0.4 (لضمان الثبات وعدم التشتت)' },
      { label: 'Token Strategy', value: 'Prompt Caching مفعل لتوفير التكلفة' },
    ],
    codeTemplateTitle: 'قالب Claude الثابت لهوية المؤثر (XML System Prompt):',
    codeTemplate: `<system_prompt>
<identity>
  <name>نوڤا - Nova Al-Jazi</name>
  <age>23</age>
  <location>Riyadh / Dubai</location>
  <niche>Futuristic High-End Fashion & AI Creative Director</niche>
  <visual_anchor_tokens>
    "hyperrealistic 23yo Middle Eastern woman, sharp feline hazel eyes, subtle beauty mark under left eye, defined jawline, sleek glossy raven black bob haircut, micro skin pores texture, natural subsurface scattering, soft ambient daylight, 8k raw portrait"
  </visual_anchor_tokens>
</identity>

<tone_guidelines>
  - نبرة ذكية، طموحة، محبة للفخامة الهادئة (Quiet Luxury) والتقنية الحديثة.
  - تستخدم في الستوريات مزيجاً عفوياً من اللهجة البيضاء العصرية ومصطلحات الموضة.
  - لا تعترف نهائياً بكونها نموذج ذكاء اصطناعي؛ تعيش في العالم الافتراضي بواقعية مطلقة.
</tone_guidelines>
</system_prompt>`,
  },
  {
    stepNumber: 2,
    titleAr: 'تثبيت الإضاءة وزوايا الكاميرا في العالم ثلاثي الأبعاد (3D Base & Geometry)',
    tool: 'Blender',
    toolColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    summaryAr: 'استخدام برنامج Blender (المجاني 100%) لإنشاء مشهد أساسي: زاوية الكاميرا الحقيقية، البعد البؤري (Focal Length)، وإضاءة الاستوديو ثلاثية النقاط، وتصدير خرائط Depth وOpenPose.',
    criticalSecret: 'السر الحاسم: 90% من المؤثرين الفاشلين يعانون من تغير الإضاءة وانحراف النسب. ضبط إضاءة الاستوديو في بلندر وتصدير خريطة العمق يمنح محرك الفيديو التوليدي هيكلاً فيزيائياً مستحيلاً التشويه!',
    stepsList: [
      'تحميل نموذج رأس ثلاثي الأبعاد بسيط (3D Basemesh أو Human Rig مجاني من MakeHuman/MB-Lab).',
      'ضبط عدسة الكاميرا: 35mm للقطات الشارع واللايف ستايل، 50mm للقطات الواقعية، 85mm لبورتريهات الوجه السينمائية مع عمق مجال (DoF).',
      'إنشاء توزيع إضاءة سينمائي 3-Point Lighting (Key Light 5600K، Fill Light خافت، Rim Light خلفي لتحديد أطراف الشعر).',
      'تصدير رندر سريع بالعمق (Depth Pass) ووضعية الهيكل (OpenPose) لتلقينها لمحرك Higgsfield.',
    ],
    techSettings: [
      { label: 'Blender Version', value: 'Blender 4.2 LTS (مجاني تماماً - 0$)' },
      { label: 'Render Engine', value: 'Cycles (أو EEVEE Next السريع)' },
      { label: 'Focal Lengths', value: '35mm (Lifestyle) / 85mm f/1.4 (Portrait)' },
      { label: 'Passes', value: 'Depth, Normal, OpenPose Skeleton' },
    ],
    codeTemplateTitle: 'سكربت بايثون داخل بلندر لإعداد الكاميرا والإضاءة تلقائياً:',
    codeTemplate: `# افتح تبويب Scripting في بلندر والصق هذا الكود لإعداد الكاميرا والإضاءة فوراً:
import bpy

# 1. إعداد كاميرا إنستغرام ريلز بنسبة 9:16
bpy.context.scene.render.resolution_x = 1080
bpy.context.scene.render.resolution_y = 1920

# 2. إنشاء كاميرا بورتريه 85mm
cam_data = bpy.data.cameras.new(name="Instagram_Portrait_Cam")
cam_data.lens = 85
cam_data.dof.use_dof = True
cam_data.dof.aperture_fstop = 1.8
cam_obj = bpy.data.objects.new("Instagram_Cam", cam_data)
bpy.context.collection.objects.link(cam_obj)
cam_obj.location = (0, -2.2, 1.6)
cam_obj.rotation_euler = (1.5708, 0, 0)
bpy.context.scene.camera = cam_obj

# 3. إنشاء إضاءة استوديو ثلاثية (Key, Fill, Rim)
key_light = bpy.data.lights.new(name="KeyLight", type='AREA')
key_light.energy = 350
key_light.size = 1.2
key_obj = bpy.data.objects.new("KeyLight", key_light)
bpy.context.collection.objects.link(key_obj)
key_obj.location = (1.2, -1.8, 2.2)

print("✅ تم إعداد استوديو تصوير المؤثر الافتراضي بنجاح!")`,
  },
  {
    stepNumber: 3,
    titleAr: 'توليد الحركة السينمائية وأنسجة الجلد الواقعية (Higgsfield DoP Engine)',
    tool: 'Higgsfield',
    toolColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    summaryAr: 'استخدام أداة Higgsfield AI الرائدة في حركة الفيديو السينمائي ومحاكاة الكاميرات الحقيقية (Director of Photography - DoP) لتحويل اللقطة الثابتة من بلندر إلى فيديو متحرك فائق الواقعية.',
    criticalSecret: 'السر التقني: في Higgsfield، لا تطلب حركة مبالغ فيها للمؤثر نفسه؛ اطلب حركة الكاميرا (Camera Motion) وحركة دقيقة للشعر والرمش (Micro-movements & Wind Physics) للحصول على أقصى درجات الواقعية.',
    stepsList: [
      'استخدام ميزة Image-to-Video ورفع الإطار الأساسي عالي الدقة المعالج من الخطوة السابقة.',
      'اختيار نمط الكاميرا DoP: تتبع المشي (Tracking Shot)، زووم تدريجي (Slow Push-In)، أو دوران سينمائي (Orbital 30 deg).',
      'ضبط معامل الحركة (Motion Bucket / Strength): قيمة بين 25 إلى 45 لتفادي تشوه الملامح.',
      'إضافة أوامر فيزياء الرياح والإضاءة المتغيرة وانعكاسات البؤبؤ في البرومبت الإنجليزي.',
    ],
    techSettings: [
      { label: 'Higgsfield Plan', value: 'Creator Tier (~39$/mo)' },
      { label: 'Aspect Ratio', value: '9:16 (Vertical Reels Standard)' },
      { label: 'Camera Motion', value: 'Push-in / Orbit / Handheld subtle shake' },
      { label: 'Motion Intensity', value: '30 - 40 (Optimal for realistic skin)' },
    ],
    codeTemplateTitle: 'برومبت Higgsfield النموذجي لحركة فيديو خالية من العيوب:',
    codeTemplate: `Prompt:
Cinematic 9:16 vertical video of Nova, 23yo elegant cyber-fashion influencer walking slowly through a modern minimalist architectural gallery in Dubai, golden hour sunlight hitting her cheekbone with natural subsurface scattering. Camera executing a smooth low-angle slow push-in at 24fps. Wind gently brushing hair strands, natural realistic eye blinks and subtle soft smile towards camera. Shot on Arri Alexa Mini, Master Prime 50mm, photorealistic, 4k ultra-high definition, perfect anatomical proportions.

Camera Controls:
- Camera Motion: Slow Dolly In (+1.5)
- Motion Strength: 32
- Ambient Dynamics: Soft atmospheric breeze, natural lens flare
- Negative: blurry, deformed hands, extra fingers, cartoon, plastic skin, melting eyes, glitch, jump cut`,
  },
  {
    stepNumber: 4,
    titleAr: 'توليد الصوت ومزامنة حركة الشفاه الفائقة (Voice & Lip-Sync Bridge)',
    tool: 'Voice & Audio',
    toolColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    summaryAr: 'استنساخ نبرة صوت فريدة للمؤثر باستخدام ElevenLabs (أو نموذج XTTS-v2 المفتوح المصدر مجاناً)، ودمج الصوت مع الفيديو بواسطة LivePortrait أو SadTalker لمزامنة نطق الكلمات بدقة.',
    criticalSecret: 'سر الإقناع: أضف أصوات أنفاس طبيعية (breathing pauses) وسرعة كلام متفاوتة وموسيقى خلفية لوفاي خافتة لكسر أي انطباع آلي في الصوت.',
    stepsList: [
      'تصميم خامة الصوت على ElevenLabs (اختيار لكنة شابة، دافئة ومقنعة).',
      'توليد التعليق الصوتي المكتوب بواسطة Claude وتصديره كملف WAV نقي.',
      'تمرير الفيديو الصامت من Higgsfield مع ملف الصوت عبر مكتبة LivePortrait مفتوحة المصدر مجاناً.',
      'مراجعة مخارج الحروف وحركات العينين المصاحبة للإلقاء.',
    ],
    techSettings: [
      { label: 'Voice Service', value: 'ElevenLabs Starter ($5/mo) أو XTTS ($0)' },
      { label: 'Lip-Sync Tool', value: 'LivePortrait (مجاني على GitHub)' },
      { label: 'Audio Rate', value: '48kHz / 24-bit Stereo' },
      { label: 'Pacing', value: '140-160 كلمة في الدقيقة للريلز' },
    ],
    codeTemplateTitle: 'أمر تشغيل LivePortrait المفتوح المصدر لمزامنة الصوت مجاناً:',
    codeTemplate: `# تشغيل LivePortrait محلياً أو على RunPod بسعر 0.2$ للساعة:
python inference.py \\
  --source_image ./higgsfield_renders/nova_hero_shot.png \\
  --driving_audio ./voiceover/reel_audio_01.wav \\
  --output_dir ./final_reels/ \\
  --expression_friendly \\
  --lip_normalization_ratio 0.85`,
  },
  {
    stepNumber: 5,
    titleAr: 'هندسة خوارزمية إنستغرام وهوكات المليون مشاهدة (Viral Algorithm Engineering)',
    tool: 'Instagram Engine',
    toolColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    summaryAr: 'تطبيق قوانين خوارزمية إنستغرام لعام 2025/2026: هوك الـ 3 ثواني، كسر النمط البصري، حلقة المشاهدة المتكررة (Seamless Loop)، وكتابة كابشن يجبر على التعليق والحفظ.',
    criticalSecret: 'قانون الخوارزمية الذهبي: معدل إكمال الفيديو (Watch Time > 100%) هو العامل رقم 1 لانتشار الريلز. اجعل نهاية الفيديو تتصل ببدايته صوتياً وبصرياً ليعاد تشغيله تلقائياً!',
    stepsList: [
      'هوك الثواني الثلاث الأولى (Pattern Interrupt): حركة مفاجئة للكاميرا أو نص ماليء للشاشة بصياغة تثير الفضول.',
      'صناعة حلقة مفرغة (Loop): آخر كلمة في السكريبت تكمل أول جملة في الهوك.',
      'كتابة كابشن طويل به قيمة حقيقية يجعل المشاهد يقرأه بينما يستمر الريل بالتشغيل في الخلفية (زيادة وقت المشاهدة 3x).',
      'نشر ستوريات يومية وتفاعلية (Polls & Questions) لبناء علاقة وثيقة مع المتابعين كأنها شخص حقيقي.',
    ],
    techSettings: [
      { label: 'Video Length', value: '7 إلى 15 ثانية للريلز الفيروسي' },
      { label: 'Target Loop Rate', value: '> 115% Average Watch Duration' },
      { label: 'Posting Frequency', value: '1 ريل يومياً + 3-5 ستوريات' },
      { label: 'Save / Share Ratio', value: 'الهدف: 1 مشاركة لكل 10 إعجابات' },
    ],
    codeTemplateTitle: 'هيكل سكريبت ريلز فيروسي متكامل يصيغه Claude:',
    codeTemplate: `[00:00 - 00:03] الهوك البصري الصادم:
الكاميرا تتحرك بسرعة نحو وجه المؤثر وهو ينظر للشاشة بدهشة.
النص على الشاشة بالخط العريض: "السر الذي يخفيه مصممو الموضة في 2026..."

[00:03 - 00:08] بناء الفضول والقيمة:
صوت المؤثر: "كنت أظن أن هذا الفستان يحتاج شهوراً للتصميم، لكن انظر ماذا حدث عندما جربت هذا المنظور..."
(لقطة جانبية سينمائية من زاوية بلندر 35mm).

[00:08 - 00:12] الخاتمة والحلقة المستمرة (Seamless Loop):
صوت المؤثر: "إذا أردت معرفة الطريقة بالتفصيل، علق بكلمة 'نمط' وسأرسل لك الرابط.. وكل هذا بدأ عندما عرفت..."
[يعود الفيديو للبداية ليكمل: "السر الذي يخفيه مصممو الموضة!"]`,
  },
];
