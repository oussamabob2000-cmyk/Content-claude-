export interface PromptItem {
  id: string;
  category: 'camera-moves' | 'skin-realism' | 'lighting-recipes' | 'blender-setups';
  titleAr: string;
  toolTarget: 'Higgsfield' | 'Claude' | 'Blender' | 'General';
  descriptionAr: string;
  promptText: string;
  parameters: { key: string; val: string }[];
}

export const PROMPT_VAULT: PromptItem[] = [
  {
    id: 'dolly-zoom-vertigo',
    category: 'camera-moves',
    titleAr: 'حركة Dolly Zoom السينمائية الفيروسية (Vertigo Effect)',
    toolTarget: 'Higgsfield',
    descriptionAr: 'حركة الكاميرا التي تفصل الشخصية عن الخلفية بشكل مذهل وتصيب المشاهد بالدهشة في الثانية الأولى من الريلز.',
    promptText: `Cinematic 9:16 vertical video. A hyperrealistic female cyber fashion influencer standing still in a bustling futuristic city promenade. Dramatic Hitchcock vertigo effect: camera physically dollying backward while zooming in simultaneously at 24fps. Background visibly warps and expands while her facial proportions remain razor sharp. Natural blinking, slight hair blowing in the wind, ultra-detailed skin textures, anamorphic lens flare, photorealistic, 8k resolution.`,
    parameters: [
      { key: 'Camera Motion', val: 'Dolly Backward (-2.0) + Zoom In (+2.0)' },
      { key: 'Motion Bucket', val: '38' },
      { key: 'FPS', val: '24' },
      { key: 'Aspect Ratio', val: '9:16' },
    ]
  },
  {
    id: 'orbit-360-luxury',
    category: 'camera-moves',
    titleAr: 'دوران 45 درجة حول الوجه (Luxury Orbital Pan)',
    toolTarget: 'Higgsfield',
    descriptionAr: 'تُظهر تفاصيل الإطلالة والمجوهرات بدقة فائقة مع إضاءة حافة متحركة تعطي طابعاً باهظ الثمن.',
    promptText: `9:16 vertical luxury fashion reel. Smooth orbital camera rotation gliding 45 degrees around her side profile towards the front. Soft warm afternoon sunlight glinting off diamond earrings. High fashion editorial shot, Arri Alexa 65, Master Prime 85mm f/1.4, micro-pore skin detail, natural specular highlights on cheekbones, cinematic motion blur.`,
    parameters: [
      { key: 'Camera Motion', val: 'Pan Right / Orbit Smooth (+1.8)' },
      { key: 'Motion Strength', val: '28' },
      { key: 'Aperture', val: 'f/1.4 Soft Bokeh' },
      { key: 'Duration', val: '5 seconds loop' },
    ]
  },
  {
    id: 'ultra-skin-texture',
    category: 'skin-realism',
    titleAr: 'معادلة أنسجة الجلد الحقيقية وكسر المظهر البلاستيكي',
    toolTarget: 'Claude',
    descriptionAr: 'حزمة الكلمات المفتاحية الدقيقة التي تمنع ظهور الشخصية كـ "رسوم كرتونية" أو دمية شمعية.',
    promptText: `subsurface scattering (SSS), micro facial pores, visible fine vellus hair (peach fuzz), subtle skin unevenness, soft realistic specular highlight on bridge of nose, natural skin moisture, zero airbrushed look, imperfect realistic beauty, raw candid photograph, Hasselblad H6D-100c medium format camera, natural eye iris depth and tiny corneal reflections.`,
    parameters: [
      { key: 'Rendering Style', val: 'Raw Unprocessed Photography' },
      { key: 'Negative Prompts', val: 'airbrushed, plastic skin, 3d CGI render, anime, oversaturated' },
      { key: 'Lighting', val: 'Diffused North-facing window light' },
    ]
  },
  {
    id: 'rembrandt-moody-lighting',
    category: 'lighting-recipes',
    titleAr: 'إضاءة رامبرانت الدرامية (Rembrandt Triangle Studio Setup)',
    toolTarget: 'Blender',
    descriptionAr: 'مثلث النور الكلاسيكي تحت العين الذي يمنح وجه المؤثر هيبة وفخامة سينمائية عالية التباين.',
    promptText: `Key Light: 45 degrees to the left at 45 degree vertical pitch, 5600K neutral white, Softbox 90cm diameter, Power: 450W.
Fill Light: Opposite side at 10% intensity (diffused silver reflector).
Rim / Hair Light: Behind the subject at 6500K cool rim light to separate dark hair from dark architectural background.
Resulting in an iconic soft Rembrandt light triangle beneath the right eye cheek.`,
    parameters: [
      { key: 'Color Temp', val: '5600K Key / 6500K Rim' },
      { key: 'Light Contrast Ratio', val: '4:1 Dramatic Studio' },
      { key: 'Focal Length', val: '85mm Portrait Lens' },
    ]
  },
  {
    id: 'golden-hour-lifestyle',
    category: 'lighting-recipes',
    titleAr: 'ساعة الغروب الذهبية في بيئة خليجية راقية (Golden Hour Glow)',
    toolTarget: 'Higgsfield',
    descriptionAr: 'المشهد الأكثر تفاعلاً على إنستغرام؛ إضاءة الشمس الدافئة المنخفضة على الشاطئ أو شرفة مطلة على برج خليفة أو أبراج الرياض.',
    promptText: `Golden hour sunset light at 2800K, low warm sun glancing across the face, soft golden rim light tracing the hair strands, natural lens flare artifacts, gentle atmospheric haze, cinematic documentary grade, candid smile and glance toward the setting sun then locking eyes with the camera lens, 9:16 vertical ratio.`,
    parameters: [
      { key: 'Sun Angle', val: '15 degrees above horizon' },
      { key: 'Color Grade', val: 'Warm Amber & Teal shadow' },
      { key: 'Atmosphere', val: 'Fine golden dust particles' },
    ]
  },
  {
    id: 'blender-depth-export-code',
    category: 'blender-setups',
    titleAr: 'كود بلندر لتصدير خريطة العمق بدقة 9:16 بنقرة واحدة',
    toolTarget: 'Blender',
    descriptionAr: 'يقوم بضبط الـ Compositor في بلندر لحفظ خريطة Z-Depth أوتوماتيكياً لاستخدامها كمرجع صارم في أدوات الذكاء الاصطناعي.',
    promptText: `import bpy

# تفعيل ميزة Z-Depth في طبقات الريندر
scene = bpy.context.scene
scene.use_nodes = True
tree = scene.node_tree
tree.nodes.clear()

# إنشاء عقد الـ Compositor
render_layers = tree.nodes.new(type="CompositorNodeRLayers")
map_value = tree.nodes.new(type="CompositorNodeMapValue")
map_value.offset = [-0.5]
map_value.size = [0.2]
map_value.use_min = True
map_value.use_max = True

output_node = tree.nodes.new(type="CompositorNodeComposite")
tree.links.new(render_layers.outputs['Depth'], map_value.inputs['Value'])
tree.links.new(map_value.outputs['Value'], output_node.inputs['Image'])

print("🚀 تم ضبط استخراج الـ Depth Pass بنجاح!")`,
    parameters: [
      { key: 'Blender Node', val: 'Compositor Z-Depth Normalizer' },
      { key: 'Resolution', val: '1080 x 1920' },
      { key: 'Color Format', val: '16-bit Black & White Greyscale' },
    ]
  }
];
