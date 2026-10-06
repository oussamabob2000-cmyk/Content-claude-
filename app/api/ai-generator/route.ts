import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Fallback safety if GEMINI_API_KEY is not defined
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, niche, style, language, topic, extraDetails } = body;

    let systemPrompt = "";
    let userPrompt = "";

    if (action === "persona") {
      systemPrompt = `أنت خبير عالمي في بناء وتطوير مؤثرين الذكاء الاصطناعي (AI Influencers) واستراتيجيات إنستغرام وصناعة المحتوى الفيروسي باستخدام Claude وHiggsfield وBlender.
قم بإنشاء ملف متكامل للشخصية (AI Influencer Character Bible) باللغة العربية (مع المصطلحات التقنية وبرومبتات التوليد بالإنجليزية لضمان دقة التنفيذ).`;
      
      userPrompt = `قم بإنشاء شخصية مؤثر ذكاء اصطناعي (AI Influencer) متكاملة في مجال: "${niche || 'Fashion & Luxury Lifestyle'}" بأسلوب: "${style || 'Cinematic Photorealistic'}" مع تفاصيل: "${extraDetails || 'طابع عربي عصري، محب للسفر والتكنولوجيا والقهوة المختصة'}".
قم بتنظيم الإجابة بالأقسام التالية بدقة شديدة:
1. الاسم والهوية (Name, Age, Location, Niche, Personality Archetype)
2. الوصف البصري الثابت وعلامات الوجه (Face & Physical Consistency Tokens): الكلمات المفتاحية الثابتة لوجه متطابق في كل رندر (Skin tone, eye shape, hair style, jawline, lighting tags)
3. بيو إنستغرام الفيروسي (Instagram Bio): نص جذاب مع Call to Action ورمز تعبيري
4. فلسفة المحتوى ونبرة الصوت (Tone of Voice): كيف تتحدث الشخصية في الستوريات والريلز
5. إعدادات مشهد بلندر المرجعي (Blender 3D Base Setup): زاوية الكاميرا (Focal length)، الإضاءة (Key/Rim/HDRI)، ووضعية الوجه (Pose)
6. البرومبت الشامل الجاهز لـ Claude لتوليد سيناريوهات المحتوى (System Prompt for Claude)
7. برومبت التوليد الأساسي لـ Higgsfield لتوليد أول فيديو بجودة سينمائية (Higgsfield Master Video Prompt)`;
    } else if (action === "reel") {
      systemPrompt = `أنت صانع محتوى فيروسي ومخرج فيديو ذكاء اصطناعي خبير في إنستغرام ريلز (Instagram Reels) ومسؤول خوارزميات ميتا.
تتقن كتابة هوكات الـ 3 ثواني القاتلة (3-second visual hooks) ودمج تصيير بلندر وحركات كاميرا Higgsfield AI.`;

      userPrompt = `اكتب سكريبت ريلز إنستغرام كامل وفيروسي للشخصية الافتراضية في مجال: "${niche || 'Lifestyle & Tech'}" حول الموضوع التالي: "${topic || 'كيف أنجزت مشروع كامل بالذكاء الاصطناعي في 4 ساعات فقط'}".
اللغة المطلوبة: ${language === 'en' ? 'الإنجليزية' : 'العربية (لهجة عصرية جذابة مناسبة للريلز)'}.

المخرجات المطلوبة بشكل مفصل ومنظم:
1. الهوك البصري أول 3 ثواني (The 3-Second Hook): ما الذي يشاهده المتابع بالضبط في أول لقطة لإيقاف التمرير (Pattern Interrupt)؟
2. توجيه حركة كاميرا Higgsfield AI: الكاميرا وسرعتها وزاوية التصوير (مثال: Dolly zoom, Orbital, Macro zoom) مع البرومبت الإنجليزي الدقيق لـ Higgsfield
3. سكريبت التعليق الصوتي (Voiceover Script): توقيت كل جملة (0-3s, 3-10s, 10-25s, 25-30s) ونبرة الإلقاء لـ ElevenLabs
4. توجيه إضاءة ومود مشهد بلندر (Blender 3D Scene Lighting & Camera Focal Length)
5. كابشن إنستغرام الفيروسي (Viral Caption) مع الهوك النصي ودعوة التفاعل (CTA لزيادة الكومنتات) ومجموعة الهاشتاغات المستهدفة (Hashtags 10-15).`;
    } else {
      // Higgsfield prompt generator
      systemPrompt = `أنت مخرج تصوير سينمائي ومختص في أدوات Higgsfield AI DoP وBlender 3D.`;
      userPrompt = `قم بتوليد حزمة برومبتات وإعدادات تقنية مفصلة لـ Higgsfield AI ومشهد Blender لمشهد: "${topic || 'مؤثر ذكاء اصطناعي يمشي في شارع مستقبلي في الغروب بنظرات سينمائية نحو الكاميرا'}".
قدم:
1. برومبت Higgsfield Prompt الإنجليزي الاحترافي (مع معايير DoP, camera movement, motion bucket, FPS, aspect ratio 9:16).
2. Negative Prompt المانع للتشوهات (حركة أصابع غريبة، رمش مشوه، عدم تطابق العينين).
3. إعدادات Blender 3D المطابقة (Focal length mm, lighting color temperature in Kelvin, Depth of field f-stop).
4. نصائح الحصول على حركة شعر وملابس واقعية (Physics & realistic motion).`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }]
        }
      ],
      config: {
        temperature: 0.7,
      }
    });

    const resultText = response.text || "تم التوليد بنجاح ولكن لم يتم إرجاع نص.";
    return NextResponse.json({ success: true, text: resultText });
  } catch (error: any) {
    console.error("AI Generation API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "حدث خطأ أثناء معالجة الطلب عبر الذكاء الاصطناعي." 
      },
      { status: 500 }
    );
  }
}
