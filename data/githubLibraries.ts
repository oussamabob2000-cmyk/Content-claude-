export interface GithubLibrary {
  id: string;
  name: string;
  repo: string;
  stars: string;
  category: 'claude-core' | 'content-agents' | 'mcp-servers' | 'video-visuals' | 'prompt-craft';
  categoryLabel: string;
  descriptionAr: string;
  descriptionEn: string;
  whyForAiInfluencer: string;
  techStack: string[];
  cloneCommand: string;
  installCommand: string;
  quickSnippet: string;
  githubUrl: string;
  official: boolean;
}

export const GITHUB_LIBRARIES: GithubLibrary[] = [
  {
    id: 'anthropic-cookbook',
    name: 'Anthropic Cookbook',
    repo: 'anthropics/anthropic-cookbook',
    stars: '9.2k+',
    category: 'claude-core',
    categoryLabel: 'مكتبات Claude الرسمية',
    descriptionAr: 'المستودع الرسمي الأقوى من Anthropic لأمثلة الكود التفاعلية، وتقنيات Prompt Caching، وتحليل الصور والفيديوهات، وهندسة الأوامر المتقدمة.',
    descriptionEn: 'Official Anthropic repo with Jupyter notebooks, prompt caching recipes, vision workflows, and function calling for Claude 3.5 & 3.7.',
    whyForAiInfluencer: 'استخدم أكواد Prompt Caching لتقليل تكلفة كتابة سكريبتات ريلز اليومية بنسبة 90%، واستخدم أكواد Vision لتحليل الصور المنافسة وتوليد تعليقات مطابقة.',
    techStack: ['Python', 'Claude SDK', 'Jupyter', 'Anthropic API'],
    cloneCommand: 'git clone https://github.com/anthropics/anthropic-cookbook.git',
    installCommand: 'pip install anthropic pillow',
    quickSnippet: `import anthropic
client = anthropic.Anthropic()

# تحسين كاش الأوامر لتقليل التكلفة عند كتابة 30 سكريبت يومياً
response = client.beta.prompt_caching.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1000,
    system=[{
        "type": "text", 
        "text": "You are a viral Instagram Reels scriptwriter for an AI fashion influencer.",
        "cache_control": {"type": "ephemeral"}
    }],
    messages=[{"role": "user", "content": "Write a 30s reel hook about futuristic street fashion."}]
)`,
    githubUrl: 'https://github.com/anthropics/anthropic-cookbook',
    official: true,
  },
  {
    id: 'anthropic-quickstarts',
    name: 'Anthropic Quickstarts',
    repo: 'anthropics/anthropic-quickstarts',
    stars: '6.4k+',
    category: 'claude-core',
    categoryLabel: 'مكتبات Claude الرسمية',
    descriptionAr: 'مشاريع جاهزة ومكتملة تشمل Computer Use، ومساعدي خدمة العملاء، ومولدات المحتوى المستقلة التي يمكن نشرها بضغطة زر.',
    descriptionEn: 'Production-ready starter apps including Computer Use agents, content synthesis bots, and customer engagement micro-apps.',
    whyForAiInfluencer: 'يمكنك استخدام ميزة Computer Use لأتمتة تفقد اتجاهات تريندات إنستغرام وتويتر تلقائياً وجمع أفضل التغريدات لتحويلها لريلز سينمائية.',
    techStack: ['TypeScript', 'Python', 'Next.js', 'Docker'],
    cloneCommand: 'git clone https://github.com/anthropics/anthropic-quickstarts.git',
    installCommand: 'npm install && npm run dev',
    quickSnippet: `// إطلاق وكيل Claude Computer Use لمسح أفضل Reels في مجالك
cd computer-use-demo
export ANTHROPIC_API_KEY="your-key"
./run.sh
# سيتصفح إنستغرام ويحلل الفيديوهات الفيروسية ويستخرج بنية الهوك (Hook Structure)`,
    githubUrl: 'https://github.com/anthropics/anthropic-quickstarts',
    official: true,
  },
  {
    id: 'mcp-servers',
    name: 'Model Context Protocol (MCP)',
    repo: 'modelcontextprotocol/servers',
    stars: '14.5k+',
    category: 'mcp-servers',
    categoryLabel: 'بروتوكول MCP والأتمتة',
    descriptionAr: 'المعيار المفتوح الثوري لربط Claude بأدوات العالم الحقيقي: نشر على منصات التواصل، قراءة قواعد البيانات، تشغيل أدوات الرندر، وتصفح الويب المباشر.',
    descriptionEn: 'Official open standard protocol connecting Claude to external tools, databases, web scraping, and social media posting pipelines.',
    whyForAiInfluencer: 'يتيح لـ Claude التحكم مباشرة في مجلدات رندر Blender، وإرسال أوامر التوليد إلى سيرفر Higgsfield، ومزامنة التدوينات على جدول النشر التلقائي.',
    techStack: ['TypeScript', 'Python', 'MCP Protocol', 'JSON-RPC'],
    cloneCommand: 'git clone https://github.com/modelcontextprotocol/servers.git',
    installCommand: 'npm install && npm run build',
    quickSnippet: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/blender/renders"]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}`,
    githubUrl: 'https://github.com/modelcontextprotocol/servers',
    official: true,
  },
  {
    id: 'claude-content-generator',
    name: 'Claude Social Content Engine',
    repo: 'vincentp/claude-content-generator',
    stars: '1.8k+',
    category: 'content-agents',
    categoryLabel: 'صناعة المحتوى والأتمتة',
    descriptionAr: 'منظومة مفتوحة المصدر لتوليد باقات محتوى متكاملة (Viral Hooks + Carousels + Reels Scripts + SEO Captions) بنقرة زر واحدة عبر واجهة برمجة Claude.',
    descriptionEn: 'Open-source orchestrator producing 30 days of high-converting social media content, carousels, and video outlines.',
    whyForAiInfluencer: 'ينتج لك 30 سيناريو ريلز في جلسة واحدة بمعدل تكلفة لا يتجاوز 1.5 دولار من رصيد API، مع تصنيف المحتوى حسب مراحل قمع المتابعين (TOFU, MOFU, BOFU).',
    techStack: ['Python', 'Streamlit', 'Claude 3.5 Sonnet', 'Pandas'],
    cloneCommand: 'git clone https://github.com/vincentp/claude-content-generator.git',
    installCommand: 'pip install -r requirements.txt',
    quickSnippet: `from generator import ContentEngine

engine = ContentEngine(model="claude-3-5-sonnet")
batch = engine.create_influencer_monthly_pack(
    persona="Virtual AI Tech Girl (Nova)",
    niche="Futuristic Lifestyle & Cyber Fashion",
    format="Reels + Carousel",
    target_count=30
)
batch.export_to_csv("monthly_instagram_calendar.csv")`,
    githubUrl: 'https://github.com/vincentp/claude-content-generator',
    official: false,
  },
  {
    id: 'prompt-eng-interactive-tutorial',
    name: 'Prompt Engineering Tutorial',
    repo: 'anthropics/prompt-eng-interactive-tutorial',
    stars: '8.1k+',
    category: 'prompt-craft',
    categoryLabel: 'هندسة أوامر Claude',
    descriptionAr: 'الدورة العملية المكثفة من Anthropic لإتقان فن التحكم في Claude، ومنع الهلوسة، وإجباره على التزام شخصية ثابتة (Persona Enforcement) وتنسيق XML.',
    descriptionEn: 'Interactive tutorial by Anthropic covering XML tags, system prompts, roleplay persona locking, and chain-of-thought prompting.',
    whyForAiInfluencer: 'أساسي لمنع المؤثر الافتراضي من كسر شخصيته؛ تتعلم كيف تجعل Claude يتحدث دائماً بنفس النبرة واللهجة وتفضيلات الأزياء عبر وسوم <character_lore>.',
    techStack: ['Jupyter', 'Anthropic API', 'Python'],
    cloneCommand: 'git clone https://github.com/anthropics/prompt-eng-interactive-tutorial.git',
    installCommand: 'pip install jupyter anthropic',
    quickSnippet: `<system_prompt>
  <character_lore>
    Name: Leila Al-Noor
    Age: 24, Dubai / Riyadh digital nomad
    Visual signature: Sharp jawline, emerald eyes, minimal silver jewelry
    Voice: Witty, ambitious, conversational Arabic & English tech terms
  </character_lore>
  <rule>Never acknowledge that you are an AI assistant. You ARE Leila.</rule>
</system_prompt>`,
    githubUrl: 'https://github.com/anthropics/prompt-eng-interactive-tutorial',
    official: true,
  },
  {
    id: 'claude-engineer',
    name: 'Claude Engineer & Autonomous Dev',
    repo: 'Doriand/claude-engineer',
    stars: '4.9k+',
    category: 'content-agents',
    categoryLabel: 'صناعة المحتوى والأتمتة',
    descriptionAr: 'أداة أوامر CLI تفاعلية تمنح Claude القدرة على كتابة وتعديل الملفات، وإدارة سكربتات الأتمتة، ومعالجة صور وريندرات بلندر محلياً.',
    descriptionEn: 'Interactive command-line CLI enabling Claude to build tools, parse video render queues, and automate daily content workflows.',
    whyForAiInfluencer: 'استخدمه لبرمجة سكربتات Python داخل بلندر لتغيير زوايا الكاميرا وتصدير 10 إطارات مرجعية مختلفة تلقائياً في ثوانٍ.',
    techStack: ['Python', 'Rich', 'Anthropic API'],
    cloneCommand: 'git clone https://github.com/Doriand/claude-engineer.git',
    installCommand: 'pip install -r requirements.txt',
    quickSnippet: `python main.py
# أمر تلقائي لـ Claude:
# "Write a Blender Python script to randomize camera angles between 35mm and 85mm, 
# set focal target to Head_Rig and render 5 depth maps into /renders"`,
    githubUrl: 'https://github.com/Doriand/claude-engineer',
    official: false,
  },
  {
    id: 'liveportrait-animator',
    name: 'LivePortrait (KwaiVGI)',
    repo: 'KwaiVGI/LivePortrait',
    stars: '18.9k+',
    category: 'video-visuals',
    categoryLabel: 'مزامنة الحركة والفيديو',
    descriptionAr: 'الأداة الأسطورية مفتوحة المصدر لتحريك الوجوه الثابتة بدقة مليمترية بناءً على حركات وجه إنسان حقيقي، متوافقة تماماً مع صور بلندر ورندرات Higgsfield.',
    descriptionEn: 'State-of-the-art open source portrait animation library for transferring facial expressions, blinks, and micro-lip movements.',
    whyForAiInfluencer: 'مجانية 100%! تسمح لك بتصوير وجهك بهاتفك ونقل كل تعبيراتك ونظراتك إلى وجه المؤثر الافتراضي بدقة فائقة وبدون أي تكلفة إضافية.',
    techStack: ['PyTorch', 'CUDA', 'Python', 'OpenCV'],
    cloneCommand: 'git clone https://github.com/KwaiVGI/LivePortrait.git',
    installCommand: 'pip install -r requirements.txt && python app.py',
    quickSnippet: `python inference.py \\
  --source_image ./blender_renders/influencer_face_neutral.png \\
  --driving_video ./mobile_recordings/my_acting_hook.mp4 \\
  --output_dir ./final_animations/ \\
  --flag_eye_retargeting --flag_lip_retargeting`,
    githubUrl: 'https://github.com/KwaiVGI/LivePortrait',
    official: false,
  },
  {
    id: 'blender-openpose-addon',
    name: 'Blender OpenPose & Depth Studio',
    repo: 'ZhUyU1997/openpose-editor',
    stars: '2.5k+',
    category: 'video-visuals',
    categoryLabel: 'مزامنة الحركة والفيديو',
    descriptionAr: 'إضافة مفتوحة المصدر لبلندر لضبط عظام الشخصية وتصدير خرائط OpenPose وDepth Maps لتوجيه نماذج الفيديو التوليدي مثل Higgsfield دون أخطاء تشريحية.',
    descriptionEn: 'Blender addon and skeleton posing rig for generating pixel-perfect OpenPose keypoints and depth passes.',
    whyForAiInfluencer: 'تقضي تماماً على تشوهات الأيدي والأصابع والوقفة غير الطبيعية، وتضمن ثبات وضعية المؤثر في كل لقطة.',
    techStack: ['Blender 4.x', 'Python Addon', 'ControlNet'],
    cloneCommand: 'git clone https://github.com/ZhUyU1997/openpose-editor.git',
    installCommand: 'Install as ZIP addon in Blender Preferences -> Add-ons',
    quickSnippet: `# داخل بلندر:
# 1. اضغط N لفتح تبويب Pose Editor
# 2. اختر Pose: "Instagram Influencer Walking & Looking Back"
# 3. اضغط Render Passes -> تصدير Depth + Normal + Pose PNG
# 4. ارفع الصورة الناتجة كـ Reference Frame في Higgsfield`,
    githubUrl: 'https://github.com/ZhUyU1997/openpose-editor',
    official: false,
  },
];
