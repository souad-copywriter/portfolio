Import { useState, useEffect } from "react";

const portfolioData = {
name: "Souad Abouelkassem",
title: "Copywriter | Video Ad Scripts & Sales Copy",
bio: "متخصصة في كتابة سكريبتات الفيديو الإعلانية والكوبي البيعي — بالدارجة والعربية. كنحوّل المنتجات لكلمات كتبيع.",
bioEn: "Specialized in persuasive video scripts & e-commerce copy that drives real results. I write words that sell.",
contacts: {
tiktok: "https://www.tiktok.com/@souad.copywriter",
instagram: "https://www.instagram.com/Souad.copywriter/",
whatsapp: "https://wa.me/212689252196",
},
services: [
{ icon: "🎬", title: "Video Ad Scripts", desc: "Reels, TikTok, UGC Ads بالدارجة والعربية" },
{ icon: "✍️", title: "Sales Copywriting", desc: "كوبي بيعي لـ E-commerce وLanding Pages" },
{ icon: "🎯", title: "Hooks & Captions", desc: "Hook قوي يوقف السكرول ويدخل العميل" },
{ icon: "📱", title: "Social Media Copy", desc: "إعلانات Instagram وFacebook احترافية" },
],
portfolio: [
{
client: "Marrakech Travelers",
category: "Travel & Tourism",
tag: "Tourism Script",
excerpt: "عيتي من الصداع؟ أجي نديوك عالم آخور...",
fullScript: `عيتي من الصداع؟ أجي نديوك عالم آخور...

عارفك عيتي من الروتين وكتلقب على شي بلاصة تهرب ليها وتعيش فيها تجربة واعرة

بلا ما تمشي بعيد أكافاي كيتسناك
تخيل راسك جالس وسط الخيمة قدامك عشاء مغربي كيشهي وعلى أنغام غناوة وعروض العافية اللي كتحبس الأنفاس..

أجواء ما كاتنساش، سواء مع عائلتك، صحابك، ولا بغيتي غير ترتاح وتصفي بالك

ما تبقاش غير كتتفرج فالتصاور
حجز بلاصتك دابا وعيش هاد اللحظة

صيفط لينا كلمة AGAFY فالميساج ونعطيوك كاع التفاصيل.,     },     {     client: "Marrakech Travelers",     category: "Travel & Tourism",     tag: "Adventure Script",     excerpt: "نهار واحد غيبدل المود ديالك... بغيت تعرف كيفاش؟",     fullScript: نهار واحد غيبدل المود ديالك... بغيت تعرف كيفاش؟

أجي معايا نعيشو هاد التجربة ensemble
كتفيق فالصباح وكتوجد لواحد التجربة اللي ماشي عادية

كتطلع بـ ballon فالسما لمدة ساعة
وقدامك منظريخليك غير ساكت وكتتفرج

ومن بعد:
فطور بلدي كيرجع ليك الطاقة
و certificat تبقى souvenirs ديما معاك

ومازال ما ساليناش...

كاينة جولة فوق الجمل بلباس صحراوي مغربي
و ساعة ديال quad باش تخرج كاع الطاقة اللي عندك وتحيد الستريس

هادشي كامل ف نهار واحد فقلب نواحي مراكش
وغادي يخليك تحس براسك عايش تجربة ماكاتنساش.

بغيتي تعيش هاد L'expérience؟
صيفط لينا message دابا ف الخاص
ولادخل lien تحت la video,     },     {     client: "Next Level Education",     category: "Education",     tag: "Before/After Ad",     excerpt: "الامتحانات قرّبات... ومازال كتضيع الوقت؟",     fullScript: ❌ BEFORE – إعلان ضعيف

الامتحانات قرّبات،
وإلى محتاج دعم فالدراسة،
مركز Next Level Education كيوفّر دروس مساعدة للتلاميذ.

كنقدّمو دعم مدرسي وتقوية فبعض المواد واللغات،
مع تأطير للتلاميذ حسب المستوى ديالهم.

الهدف ديالنا هو نعاونوا التلاميذ يحسّنو الفهم ديالهم
ويحضّرو مزيان للامتحانات.

إلى بغيت تعرف أكثر،
تقدر تراسلنا ف الرسائل.


---

✅ AFTER – إعلان احترافي

الامتحانات قرّبات... ومازال كتضيع الوقت؟

الفهم ضعيف، الدروس تراكمو والضغط طالع... والخوف من الامتحان كيكبر

ما تخافش، الحل كاين

مع مركز Next Level Education
كنمشيو معاك خطوة بخطوة

كنوفرو:
✔️ دعم مدرسي فعّال
✔️ تقوية فجميع المواد وحتى اللغات
✔️ تأطير فردي حسب مستوى كل طالب
✔️ متابعة مستمرة حتى يتحسّن المستوى

وفمدة قصيرة تلقى راسك عندك
فهم أحسن، ثقة أكبر
ونقط زوينة تفرّحك وتفرّح والديك

ما تضيعش عليك الفرصة البلايص جد محدودة
ف الرسائل ودير بلاصتك قبل ما يتسد
سيفط لينا "INFO" لتسجيل.,     },     {     client: "Lingua Institut",     category: "Language School",     tag: "Persuasion Script",     excerpt: "كتخسر زبالة د الفلوس ف الـ Dossier وتوجّد...",     fullScript: كتخسر زبالة د الفلوس ف الـ Dossier وتوجّد..
وفي اللخر كيرجعوك بسبب "نقص ف التواصل"؟

ماتخليش اللغة تهرس ليك حلم ألمانيا
بزاف كيسحاب ليهم بلي اللغة هي غير "كلمات وقواعد". ولكن الحقيقة هي أن اللغة هي الساروت ديال الفيزا وديال أول نهار ليك في الخدمة أو القراية في ألمانيا.

في Lingua Institut، ما كنقريوكش غير باش تنجح في الامتحان.. إنما كنوجدوك باش "تعيش" تما:

✅ أساتذة دازوا من نفس الطريق: كيعرفوا الصعوبات اللي غاتواجهك وكيعطيوك "اللاصق".
✅ مجموعات صغيرة: باش تهضر وتخطأ وتصحح، ماشي غير تبقى تسمع.
✅ كوتشينغ للمقابلات: غاندربوك كيفاش تجاوب المشغل الألماني وتخليه يقتنع بيك من أول دقيقة.
✅ مواكبة في الملف: حنا معاك من أول حصة حتى نهار كتشد الفيزا وتوجد الشكارة.

المقاعد محدودة حيت كنركزوا على الجودة ماشي على العدد.

واش باغي تكون من الناس اللي غايبداو حياتهم الجديدة هاد العام؟
🥞 صيفط لينا كلمة "ألمانيا" في الخاص، وغادي ندريوا معاك تقييم مجاني لمستواك ونشرحوا ليك أحسن طريق ليك.,     },     {     client: "Centre Epil Dream",     category: "Beauty & Skincare",     tag: "Beauty Ad Script",     excerpt: "وقفي! واش مازال كتحاولي تخبّي آثار الحبوب والمسام بالمكياج؟",     fullScript: وقفي!
واش مازال كتحاولي تخبّي آثار الحبوب والمسام بالمكياج؟

اجي نقول لك ف Centre Epil Dream
كنقدّمو ليك Microneedling احترافي
كيحفّز الكولاجين
وكا يجدد البشرة من الداخل و يهنيك من آثار الحبوب
كيوحد لون البشرة وكاييردها رطبة بحال ديال لي بيبي
ونتيجة كتبان فمدة قصيرة

Promo spéciale درنا لكم ب 299DH فقط

شنو كاتسناي راه Promo قربات تسالي.,     },     {     client: "Ninja Crispi",     category: "Kitchen Appliances",     tag: "Product UGC",     excerpt: "القرمشه اللي كاتشوفيها في الاشهارات دابا جات الكوزينتك",     fullScript: القرمشه اللي كاتشوفيها في الاشهارات دابا جات الكوزينتك

عيتي من القليان وكايشد لك وقت بزاف وكايخلي الكوزينه موسخه وحتى الفران كايحتاج وقت طويل

مع ninja crispi غاتهناي من هذا المشكل، اللي كاجي بكاس من الزاج، اللي غايخليك تشوفي الماكله وهي كاتطيب، ساهله في الغسيل، وسهله في الاستخدام، كيجيك بحجم صغير وما ياخذش مساحه كبيره في الكوزينه، ماكلتك وطيابك غايوجداو بالزربيه، وبقرمشه ديال المطاعم، واكيد بلا تماره، وتخليلي معيا اولادك غير يتشهاو شي حاجه توجديها لهم بكل سهوله، با طباق صحيه وبلا دهون، هذه فرصتك تجربيه وتشوفي الفرق، قبل ما يسالي من السطوك,     },     {     client: "رف ديال المطبخ",     category: "Kitchen Appliances",     tag: "Product Script",     excerpt: "الحل اللي كتشريه وما كتندميش — كوزينتك عامره بالماعن",     fullScript: الحل اللي كتشريه وما كتندميش
كوزينتك عامره بالماعن وما بقاتش لك بلاصه فين ديريهم
دابا الحل وصل بين يديك مع هذا رف اللي كايجي بالروايض كايجمع كل شيء في مكان واحد وكايخلي كوزينتك منظمة

قوي وما كيتقلبش تصميم أنيق مناسب للكوزينه سهل في التركيب وحتى في الطويان دياله كيتحرك بسهوله فين ما بغيتي

هاد الرفّ دابا عليه الطلب بزاف
ما تأجليش القرار وتندمي من بعد
تواصلي معنا دابا على هاد الرقم
الطلب كيتسجّل دابا، ماشي من بعد.,     },     {     client: "AirTok",     category: "Home & Health",     tag: "Emotional Hook",     excerpt: "تعرفين وش أكثر شي يخوّفني كأم؟",     fullScript: تعرفين وش أكثر شي يخوّفني كأم؟
إني ما أقدر أحمي عيالي من شي ما ينشاف
الهواء اللي يتنفسونه

أسهر عليهم، أراقب أنفاسهم وهم نايمين
وأدعي إنهم يكبرون بصحّة وراحة
بس الغبار والروائح موجودة حولنا... حتى داخل البيت

بيتنا AirTok من يوم دخل منقّي الهواء
حسّيت براحة مختلفة ينقّي الهواء بهدوء،
يساعد على نوم أريح،
ويخلّي الجو منعش وآمن لعيالي

أنا اخترت راحة بالي وصحّة عيالي
وأنتِ لأن أمومتك تستاهل تطمّنين
اطلبي AirTok الآن.,     },     {     client: "Miracle Cream",     category: "Skincare",     tag: "Problem/Solution",     excerpt: "لسّه الحبوب تطلع لك فجأة وأكثر شي قبل مناسبة مهمّة؟",     fullScript: لسّه الحبوب تطلع لك فجأة وأكثر شي قبل مناسبة مهمّة؟

تجربين كريم... غسول... وصفات بدون نتيجه
حبوب ترجع وثقتك تنزل.

مع [Miracle Cream] لازاله حبوب الوجه
يهدي البشرة بدون تهيّج
ويحافظ على بشرتك.

استخدام سهل بدون إحساس دهني مناسب للبشرة الحساسة
ونتائج من أول أيام الاستعمال.

وجه أصفى وحبوب أقل وثقتك ترجع كل مرة تطالعين بالمراية.

لا تنتظرين الحبوب تزيد العرض جد محدود
اطلبيه الآن.,     },     {     client: "Tile by Life360 Mate",     category: "Tech Product",     tag: "Tech Ad Script",     excerpt: "ضيّعت مفاتيحك؟ جوالك؟ شنطتك؟",     fullScript: ضيّعت مفاتيحك؟
جوالك؟ شنطتك؟

كلنا نمرّ بهالموقف مستعجل، ومو لاقي أغراضك

وقف تضييع الوقت... الحل صار أسهل مع Tile by Life360 Mate
ثبّت الجهاز على المفاتيح أو الشنطة
و نزّل التطبيق على جوالك
اضغط زر البحث
وبيطلع صوت يخليك تلقى أغراضك فوراً.

مع هدا الجهاز ماعاد تضيع مفاتيحك
وتوفّر وقتك وجهدك
والتحكم بس من الجوال وبسهولة

اطلب Tile by Life360 Mate الآن
ولا تخلّي النسيان يعطّلك.,     },     {     client: "كتب التلوين",     category: "Kids & Family",     tag: "Product Script",     excerpt: "ترى اللي قاعد يصير مو طبيعي!",     fullScript: ترى اللي قاعد يصير مو طبيعي!

الأطفال تركوا الجوال بسبب كتب التلوين أنا جرّبتها بنفسي،

قلت نجرب وبس لكن من أول يوم الطفل قاعد يلوّن بهدوء،

لا صراخ، لا ملل، ولا جوال

كتب تلوين هادي للصغار والكبار تهدّي الأعصاب، تزيد التركيز، وتطلع الإبداع بطريقة ممتعة.

الكمية جدًا محدودة وكثير طلبوها هالأيام
واللي يتأخر غالبًا يندم

توصيل سريع لباب بيتك
ومعها رسومات إضافية هدية

لا تقولين بعدين
اطلبي الآن قبل ما تخلص.`,
},
],
};

const categoryColors = {
"Travel & Tourism": "#c8a97e",
"Education": "#7eb8c8",
"Language School": "#9b7ec8",
"Beauty & Skincare": "#c87ea0",
"Kitchen Appliances": "#c8b07e",
"Home & Health": "#7ec89b",
"Skincare": "#c87e8a",
"Tech Product": "#7e9bc8",
"Kids & Family": "#c8c07e",
};

export default function Portfolio() {
const [activeFilter, setActiveFilter] = useState("All");
const [visible, setVisible] = useState(false);
const [selectedScript, setSelectedScript] = useState(null);

useEffect(() => {
setTimeout(() => setVisible(true), 100);
}, []);

useEffect(() => {
if (selectedScript) {
document.body.style.overflow = "hidden";
} else {
document.body.style.overflow = "";
}
return () => { document.body.style.overflow = ""; };
}, [selectedScript]);

const filtered = activeFilter === "All"
? portfolioData.portfolio
: portfolioData.portfolio.filter(p => p.category === activeFilter);

return (
<div style={{
minHeight: "100vh",
background: "#0d0d0d",
fontFamily: "'Georgia', serif",
color: "#f0ede6",
overflowX: "hidden",
}}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }    

    .hero-name {    
      font-family: 'Playfair Display', serif;    
      font-size: clamp(2.5rem, 8vw, 6rem);    
      font-weight: 700;    
      letter-spacing: -2px;    
      line-height: 1;    
      background: linear-gradient(135deg, #c8a97e 0%, #f0ede6 50%, #c8a97e 100%);    
      -webkit-background-clip: text;    
      -webkit-text-fill-color: transparent;    
      background-clip: text;    
    }    
    .hero-title {    
      font-family: 'DM Sans', sans-serif;    
      font-weight: 300;    
      font-size: clamp(0.85rem, 2vw, 1.1rem);    
      letter-spacing: 0.3em;    
      text-transform: uppercase;    
      color: #c8a97e;    
      margin-top: 12px;    
    }    
    .hero-bio {    
      font-family: 'DM Sans', sans-serif;    
      font-size: clamp(0.9rem, 2vw, 1.05rem);    
      line-height: 1.8;    
      color: #b8b0a0;    
      max-width: 540px;    
      margin-top: 28px;    
    }    
    .contact-btn {    
      display: inline-flex;    
      align-items: center;    
      gap: 8px;    
      padding: 12px 24px;    
      border-radius: 50px;    
      text-decoration: none;    
      font-family: 'DM Sans', sans-serif;    
      font-size: 0.85rem;    
      font-weight: 500;    
      letter-spacing: 0.05em;    
      transition: all 0.3s ease;    
      border: 1px solid transparent;    
      cursor: pointer;    
    }    
    .btn-wa { background: #25D366; color: white; }    
    .btn-wa:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(37,211,102,0.35); }    
    .btn-ig { background: transparent; color: #c8a97e; border-color: #c8a97e40; }    
    .btn-ig:hover { background: #c8a97e15; transform: translateY(-2px); }    
    .btn-tk { background: transparent; color: #f0ede6; border-color: #f0ede640; }    
    .btn-tk:hover { background: #f0ede615; transform: translateY(-2px); }    

    .section-label {    
      font-family: 'DM Sans', sans-serif;    
      font-size: 0.7rem;    
      letter-spacing: 0.4em;    
      text-transform: uppercase;    
      color: #c8a97e;    
      margin-bottom: 40px;    
    }    
    .section-title {    
      font-family: 'Playfair Display', serif;    
      font-size: clamp(1.8rem, 4vw, 3rem);    
      font-weight: 700;    
      color: #f0ede6;    
      margin-bottom: 16px;    
      line-height: 1.2;    
    }    

    .service-card {    
      background: #161616;    
      border: 1px solid #2a2a2a;    
      border-radius: 16px;    
      padding: 32px 28px;    
      transition: all 0.3s ease;    
      position: relative;    
      overflow: hidden;    
    }    
    .service-card::before {    
      content: '';    
      position: absolute;    
      top: 0; left: 0; right: 0;    
      height: 2px;    
      background: linear-gradient(90deg, transparent, #c8a97e, transparent);    
      opacity: 0;    
      transition: opacity 0.3s;    
    }    
    .service-card:hover { border-color: #c8a97e30; transform: translateY(-4px); }    
    .service-card:hover::before { opacity: 1; }    
    .service-icon { font-size: 2rem; margin-bottom: 16px; }    
    .service-title { font-family: 'Playfair Display', serif; font-size: 1.15rem; color: #f0ede6; margin-bottom: 8px; }    
    .service-desc { font-family: 'DM Sans', sans-serif; font-size: 0.875rem; color: #7a7060; line-height: 1.6; }    

    .filter-btn {    
      padding: 8px 20px;    
      border-radius: 50px;    
      border: 1px solid #2a2a2a;    
      background: transparent;    
      color: #7a7060;    
      font-family: 'DM Sans', sans-serif;    
      font-size: 0.8rem;    
      cursor: pointer;    
      transition: all 0.2s;    
      white-space: nowrap;    
    }    
    .filter-btn:hover { border-color: #c8a97e40; color: #c8a97e; }    
    .filter-btn.active { background: #c8a97e15; border-color: #c8a97e; color: #c8a97e; }    

    .portfolio-card {    
      background: #161616;    
      border: 1px solid #2a2a2a;    
      border-radius: 16px;    
      padding: 28px;    
      cursor: pointer;    
      transition: all 0.3s ease;    
      position: relative;    
      overflow: hidden;    
    }    
    .portfolio-card:hover {    
      border-color: #c8a97e40;    
      transform: translateY(-3px);    
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);    
    }    
    .portfolio-card:hover .read-more {    
      opacity: 1;    
    }    
    .read-more {    
      opacity: 0;    
      transition: opacity 0.3s;    
      font-family: 'DM Sans', sans-serif;    
      font-size: 0.75rem;    
      color: #c8a97e;    
      margin-top: 14px;    
      display: flex;    
      align-items: center;    
      gap: 6px;    
    }    

    .card-tag {    
      display: inline-block;    
      padding: 4px 12px;    
      border-radius: 50px;    
      font-family: 'DM Sans', sans-serif;    
      font-size: 0.7rem;    
      letter-spacing: 0.05em;    
      font-weight: 500;    
      margin-bottom: 16px;    
    }    
    .card-client { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: #f0ede6; margin-bottom: 4px; }    
    .card-category { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: #5a5040; margin-bottom: 16px; }    
    .card-excerpt {    
      font-family: 'DM Sans', sans-serif;    
      font-size: 0.875rem;    
      color: #9a9080;    
      line-height: 1.7;    
      direction: rtl;    
      text-align: right;    
      font-style: italic;    
      border-right: 2px solid #2a2a2a;    
      padding-right: 14px;    
    }    

    /* MODAL */    
    .modal-overlay {    
      position: fixed;    
      inset: 0;    
      background: rgba(0,0,0,0.85);    
      backdrop-filter: blur(6px);    
      z-index: 1000;    
      display: flex;    
      align-items: center;    
      justify-content: center;    
      padding: 24px;    
      animation: fadeIn 0.2s ease;    
    }    
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }    
    @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }    

    .modal-box {    
      background: #141414;    
      border: 1px solid #2a2a2a;    
      border-radius: 20px;    
      max-width: 600px;    
      width: 100%;    
      max-height: 85vh;    
      overflow-y: auto;    
      position: relative;    
      animation: slideUp 0.3s ease;    
    }    
    .modal-header {    
      padding: 28px 28px 20px;    
      border-bottom: 1px solid #1e1e1e;    
      position: sticky;    
      top: 0;    
      background: #141414;    
      z-index: 10;    
      display: flex;    
      justify-content: space-between;    
      align-items: flex-start;    
    }    
    .modal-close {    
      background: #2a2a2a;    
      border: none;    
      color: #7a7060;    
      width: 36px;    
      height: 36px;    
      border-radius: 50%;    
      cursor: pointer;    
      font-size: 1.1rem;    
      display: flex;    
      align-items: center;    
      justify-content: center;    
      transition: all 0.2s;    
      flex-shrink: 0;    
      margin-top: 2px;    
    }    
    .modal-close:hover { background: #3a3a3a; color: #f0ede6; }    
    .modal-body {    
      padding: 28px;    
      direction: rtl;    
      text-align: right;    
    }    
    .modal-script {    
      font-family: 'DM Sans', sans-serif;    
      font-size: 0.95rem;    
      line-height: 2;    
      color: #c8c0b0;    
      white-space: pre-wrap;    
    }    

    .divider { width: 60px; height: 1px; background: linear-gradient(90deg, #c8a97e, transparent); margin: 0 auto 16px; }    
    .footer-text { font-family: 'DM Sans', sans-serif; font-size: 0.8rem; color: #3a3530; text-align: center; }    

    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }    
    .fade-in { animation: fadeInUp 0.8s ease forwards; }    
    .delay-2 { animation-delay: 0.4s; opacity: 0; }    

    .grid-2 { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }    
    .grid-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }    

    .modal-box::-webkit-scrollbar { width: 6px; }    
    .modal-box::-webkit-scrollbar-track { background: #1a1a1a; }    
    .modal-box::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 3px; }    
  `}</style>    

  {/* MODAL */}    
  {selectedScript && (    
    <div className="modal-overlay" onClick={() => setSelectedScript(null)}>    
      <div className="modal-box" onClick={e => e.stopPropagation()}>    
        <div className="modal-header">    
          <div>    
            <span    
              className="card-tag"    
              style={{    
                background: `${categoryColors[selectedScript.category] || "#c8a97e"}18`,    
                color: categoryColors[selectedScript.category] || "#c8a97e",    
                border: `1px solid ${categoryColors[selectedScript.category] || "#c8a97e"}30`,    
                marginBottom: 8,    
              }}    
            >    
              {selectedScript.tag}    
            </span>    
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#f0ede6" }}>    
              {selectedScript.client}    
            </div>    
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#5a5040", marginTop: 4 }}>    
              {selectedScript.category}    
            </div>    
          </div>    
          <button className="modal-close" onClick={() => setSelectedScript(null)}>✕</button>    
        </div>    
        <div className="modal-body">    
          <p className="modal-script">{selectedScript.fullScript}</p>    
        </d
