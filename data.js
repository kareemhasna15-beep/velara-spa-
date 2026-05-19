// =========================================
// VELARA — ALL SERVICE DATA
// =========================================

const SERVICES_DATA = {
  massage: {
    title_en: 'Massage', title_ar: 'التدليك',
    intro_en: 'Therapeutic and relaxing massages performed by certified therapists, using premium oils tailored to your needs.',
    intro_ar: 'تدليكات علاجية ومريحة على يد معالجات معتمدات، باستخدام زيوت فاخرة مصممة لاحتياجاتك.',
    items: [
      {en:'Velara Signature Massage', ar:'تدليك فيلارا', desc_en:'A signature massage combining Swedish techniques and stretching to relax muscles, release tension, and improve flexibility.', desc_ar:'مساج خاص بالمكان يجمع بين المساج السويدي والتمطيط، يساعد على الاسترخاء وفك الشد العضلي وتحسين المرونة.', price:500, price2:650, duration:60, duration2:90},
      {en:'Swedish Massage', ar:'تدليك سويدي', desc_en:'A medium pressure massage to improve blood circulation and ease everyday tension.', desc_ar:'مساج بضغط متوسط، يحسّن الدورة الدموية ويخفف توتر اليوم.', price:400, duration:60},
      {en:'Relax Massage', ar:'تدليك استرخاء', desc_en:'A relaxing massage with light to medium pressure to improve circulation and reduce stress.', desc_ar:'مساج استرخائي خفيف إلى متوسط، يحسّن الدورة الدموية ويخفف التوتر والإجهاد.', price:400, duration:60},
      {en:'Deep Tissue Massage', ar:'تدليك الأنسجة العميق', desc_en:'A deep pressure massage targeting tight muscles and knots, ideal for chronic muscle pain.', desc_ar:'مساج عميق يركز على العضلات المشدودة والعقد، مناسب لآلام الظهر والرقبة والعضلات المزمنة.', price:500, price2:650, duration:60, duration2:90},
      {en:'Thai Massage', ar:'تدليك تايلندي', desc_en:'A traditional Thai massage using pressure and stretching to energize the body and increase flexibility — no oils.', desc_ar:'مساج تايلندي يعتمد على الضغط والتمديد، ينشّط الجسم ويزيد المرونة بدون استخدام زيوت.', price:400, duration:60},
      {en:'Ventosa Cupping', ar:'كاسات الهواء', desc_en:'Cupping therapy that stimulates blood circulation and relieves muscle and joint tension.', desc_ar:'علاج بكاسات الهواء يحفز الدورة الدموية ويخفف آلام العضلات والمفاصل.', price:450, duration:60},
      {en:'Hot Stone Massage', ar:'تدليك الأحجار الساخنة', desc_en:'A massage using warm stones to deeply relax muscles, relieve tension, and improve circulation.', desc_ar:'مساج بحجارة ساخنة يساعد على استرخاء العضلات بعمق وتخفيف التوتر وتحسين الدورة الدموية.', price:450, duration:90},
      {en:'Foot Massage with Reflexology', ar:'تدليك القدمين بتقنية العلاج الانعكاسي', desc_en:'A foot massage combined with reflexology points to relieve fatigue and stimulate the whole body.', desc_ar:'مساج للقدمين مع نقاط انعكاسية، يخفف التعب وينشّط أعضاء الجسم.', price:300, duration:40},
      {en:'Thai Herbal Thermal Massage', ar:'تدليك حراري بالأعشاب التايلندية', desc_en:'A massage using warm Thai herbal compresses to ease muscle pain and promote deep relaxation.', desc_ar:'مساج بأكياس أعشاب تايلندية دافئة، يخفف آلام العضلات ويحسّن الاسترخاء.', price:500, duration:60},
      {en:'Lymphatic & Slimming Massage', ar:'تدليك ليمفاوي وتنحيف', desc_en:'A massage to stimulate lymphatic drainage, reduce swelling, and improve body contour.', desc_ar:'مساج لتصريف السوائل وتنشيط الجهاز الليمفاوي، يساعد على تقليل الانتفاخ وتحسين مظهر الجسم.', price:500, price2:600, duration:60, duration2:90},
      {en:'Pregnant Women Massage', ar:'تدليك حوامل', desc_en:'A safe massage for pregnant women focusing on hands, feet, and back to reduce pregnancy discomfort.', desc_ar:'مساج آمن للحامل (اليدين، القدمين، الظهر) يخفف التعب وآلام الحمل.', price:400, duration:60}
    ],
    addons: [
      {en:'Massage with Magnesium Oil', ar:'تدليك بزيت الماغنيزيوم', price:50},
      {en:'Scented Oil', ar:'معطر للزيت', price:50}
    ]
  },

  moroccan: {
    title_en: 'Moroccan Bath', title_ar: 'الحمام المغربي',
    intro_en: 'A traditional ritual for deep cleansing and complete relaxation — steam, Moroccan soap, exfoliation, clay mask, and lotion.',
    intro_ar: 'طقس تقليدي عريق للتنظيف العميق والاسترخاء الكامل — بخار وصابون مغربي وتقشير وطين ولوشن.',
    items: [
      {en:'Moroccan Bath', ar:'حمام مغربي', desc_en:'A traditional ritual for deep cleansing and relaxation based on steam, Moroccan soap, clay, and a loofah. Includes: single-use loofah, Moroccan soap & body scrub, body clay mask, body lotion.', desc_ar:'طقس تقليدي عريق للتنظيف العميق والاسترخاء يعتمد على البخار والصابون المغربي والطين والليفة. يتضمن: ليفة استخدام واحد، صابون مغربي وسكراب، طينة، ولوشن.', price:450, duration:90},
      {en:'Royal Moroccan Bath', ar:'حمام مغربي ملكي', desc_en:'The full luxury ritual. Includes: single-use loofah, robe & slippers, Moroccan soap & body scrub, body clay mask, body lotion.', desc_ar:'الطقس الفاخر الكامل. يتضمن: ليفة استخدام واحد، روب وشبشب، صابون مغربي وسكراب، طينة، ولوشن.', price:550, duration:120}
    ]
  },

  nails: {
    title_en: 'Nails', title_ar: 'الأظافر',
    intro_en: 'Manicures, pedicures, gel, biab, and nail art — performed with precision and care, all in the comfort of your home.',
    intro_ar: 'مانيكير وباديكير، جل، بياب، ورسم أظافر — بدقة وعناية، في راحة منزلك.',
    sections: {
      basic: { title_en: 'Mani & Pedi', title_ar: 'مانيكير وباديكير', items: [
        {en:'Classic Manicure', ar:'كلاسيك مانيكير', price:150},
        {en:'Classic Pedicure', ar:'كلاسيك باديكير', price:175},
        {en:'Russian Manicure', ar:'مانيكير روسي الجاف', price:195},
        {en:'Russian Pedicure', ar:'باديكير روسي الجاف', price:210},
        {en:'Velara Signature Spa Manicure', ar:'فيلارا سبا مانيكير', price:250},
        {en:'Velara Signature Spa Pedicure', ar:'فيلارا سبا باديكير', price:250},
        {en:'Mani & Pedi for Kids with Color', ar:'مانيكير وباديكير مع لون للأطفال', price:350}
      ]},
      biab: { title_en: 'Biab', title_ar: 'بياب', items: [
        {en:'Biab Manicure Overlay', ar:'مانيكير بياب كامل الأظافر', price:350},
        {en:'Biab Manicure Refill', ar:'إعادة تعبئة بياب', price:300},
        {en:'Biab Extensions', ar:'بياب اكستنشن كامل', price:500},
        {en:'Biab Extensions Refill', ar:'إعادة تعبئة بياب اكستنشن', price:350},
        {en:'Per Nail Biab Extension', ar:'ظفر واحد بياب اكستنشن', price:50},
        {en:'Biab Removal', ar:'إزالة بياب', price:150},
        {en:'Biab French', ar:'فرنش بياب', price:500},
        {en:'Biab Ombre', ar:'بياب أومبرية', price:550}
      ]},
      gel: { title_en: 'Gel', title_ar: 'الجل', items: [
        {en:'Gel Extensions', ar:'جل اكستنشن', price:600},
        {en:'Gel Extensions Refill', ar:'إعادة تعبئة جل اكستنشن', price:450},
        {en:'Half Gel Tip Extensions', ar:'تركيب نصف ظفر لكامل اليدين', price:450},
        {en:'Soft Gel Tip Extensions', ar:'تركيب أظافر كامل اليدين', price:500},
        {en:'Gel Extensions Removal', ar:'إزالة جل اكستنشن', price:150},
        {en:'Gel Color Only', ar:'لون جل فقط', price:150},
        {en:'Gel Color Refill', ar:'إعادة لون الجل', price:100},
        {en:'Gel Removal', ar:'إزالة لون الجل', price:60},
        {en:'Gel French', ar:'فرنش جل', price:250},
        {en:'Gel Ombre', ar:'أومبرية جل', price:300},
        {en:'Nail Extensions', ar:'تركيب أظافر', price:100}
      ]},
      addons: { title_en: 'Add-Ons', title_ar: 'إضافات', items: [
        {en:'Cat Eye', ar:'كات آي', price:240},
        {en:'Chrome', ar:'كروم', price:180},
        {en:'Basic Hand Color', ar:'لون يدين عادي', price:35},
        {en:'Basic Feet Color', ar:'لون أقدام عادي', price:35},
        {en:'French Hand Color', ar:'لون يدين فرنش', price:60},
        {en:'French Feet Color', ar:'لون أقدام فرنش', price:60},
        {en:'Nail Art Single Finger', ar:'رسم للظفر الواحد', price:20},
        {en:'Nail Art Full Set', ar:'رسم كامل الأظافر', price:200}
      ]}
    }
  },

  waxing: {
    title_en: 'Waxing', title_ar: 'إزالة الشعر',
    intro_en: 'Professional waxing in the privacy of your own home, using premium quality wax for smooth, lasting results.',
    intro_ar: 'إزالة شعر احترافية في خصوصية منزلك، باستخدام شمع عالي الجودة لنتائج ناعمة وطويلة الأمد.',
    items: [
      {en:'Wax Full Body', ar:'شمع كامل الجسم', price:300},
      {en:'Wax Full Legs', ar:'شمع كامل الأرجل', price:120},
      {en:'Wax Half Legs', ar:'شمع نصف الأرجل', price:60},
      {en:'Wax Full Hands', ar:'شمع كامل الأيدي', price:100},
      {en:'Wax Half Hands', ar:'شمع نصف الأيدي', price:50},
      {en:'Wax Under Arms', ar:'شمع تحت الإبط', price:50},
      {en:'Wax Bikini', ar:'شمع بيكيني', price:75},
      {en:'Eyebrows', ar:'حواجب', price:50},
      {en:'Mustache', ar:'شنب', price:25}
    ]
  }
};

const PACKAGES_DATA = [
  // Eid Offers
  {category:'eid', en:'Pedicure & Manicure', ar:'باديكير ومانيكير', oldPrice:325, newPrice:199},
  {category:'eid', en:'Relax Massage', ar:'مساج ريلاكس', oldPrice:450, newPrice:279},
  {category:'eid', en:'Hot Stone Massage', ar:'مساج أحجار', oldPrice:450, newPrice:315},
  {category:'eid', en:'Ventosa Cupping', ar:'مساج كاسات الهواء', oldPrice:450, newPrice:315},
  {category:'eid', en:'Lymphatic Massage', ar:'مساج ليمفاوي', oldPrice:500, newPrice:350},
  {category:'eid', en:'Royal Moroccan Bath', ar:'حمام مغربي ملكي', oldPrice:550, newPrice:385},
  {category:'eid', en:'Mani + Pedi + Relax Massage', ar:'مانيكير وباديكير ومساج ريلاكس', oldPrice:600, newPrice:459},
  // Signature Packages
  {category:'signature', en:'Birthday Package', ar:'باقة عيد الميلاد',
   includes_en:'Swedish/Relax Massage · Classic Manicure · Classic Pedicure · Hand & Feet Color',
   includes_ar:'تدليك سويدي/استرخاء · مانيكير كلاسيك · باديكير كلاسيك · لون يدين وأقدام',
   newPrice:649, featured:false},
  {category:'signature', en:'Bridal Package', ar:'باقة العروس',
   includes_en:'Velara Signature Massage · Spa Manicure · Spa Pedicure · French Hand & Feet Color',
   includes_ar:'تدليك فيلارا المميز · سبا مانيكير · سبا باديكير · لون فرنش لليدين والأقدام',
   newPrice:999, featured:true},
  {category:'signature', en:'Lymphatic & Slimming — 7 Sessions (60 min)', ar:'باقة ليمفاوي وتنحيف — 7 جلسات (60 دقيقة)',
   includes_en:'7 lymphatic drainage sessions for visible body contouring results.',
   includes_ar:'7 جلسات تصريف ليمفاوي لنتائج واضحة في تحسين قوام الجسم.',
   newPrice:2999, featured:false},
  {category:'signature', en:'Lymphatic & Slimming — 7 Sessions (90 min)', ar:'باقة ليمفاوي وتنحيف — 7 جلسات (90 دقيقة)',
   includes_en:'7 extended lymphatic drainage sessions for deeper, longer-lasting results.',
   includes_ar:'7 جلسات تصريف ليمفاوي ممتدة لنتائج أعمق وأطول أمداً.',
   newPrice:3499, featured:false}
];

// Eid offers visibility cutoff — hide everywhere after end of day June 1, 2026 in Riyadh (UTC+3).
// Source of truth: if you change this, also update the inline timestamp in index.html (eid-banner script).
const EID_OFFERS_CUTOFF = new Date('2026-06-02T00:00:00+03:00');
function isEidOffersActive(){ return new Date() < EID_OFFERS_CUTOFF; }
