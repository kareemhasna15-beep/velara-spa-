// =========================================
// VELARA BEAUTY SPA — SHARED JS
// =========================================

// Site-wide values now live in SITE_CONFIG (data.js). The aliases below stay
// for the rest of this file to keep references short; edit data.js to change them.
const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber;
const MAPS_URL        = SITE_CONFIG.mapsUrl;
const PHONE           = '+' + SITE_CONFIG.whatsappNumber;
const PHONE_DISPLAY   = SITE_CONFIG.phoneDisplay;

// =========================================
// WHATSAPP BOOKING — message templates + URL builder
// =========================================
// All bookings funnel through wa.me with a pre-filled message that adapts to
// the user's current language and the context they clicked from.
const BOOKING_MESSAGES = {
  generic: {
    en: "Hi Velara, I'd like to book an appointment.",
    ar: "مرحباً فيلارا، أرغب في حجز موعد."
  },
  category: {
    en: (cat) => `Hi Velara, I'd like to book a ${cat} appointment.`,
    ar: (cat) => `مرحباً فيلارا، أرغب في حجز موعد ${cat}.`
  },
  treatment: {
    en: (name, price) => `Hi Velara, I'd like to book: ${name} — ${price} SAR.`,
    ar: (name, price) => `مرحباً فيلارا، أرغب في حجز: ${name} — ${price} ريال.`
  },
  offer: {
    en: (name, price) => `Hi Velara, I'd like to book the ${name} offer — ${price} SAR.`,
    ar: (name, price) => `مرحباً فيلارا، أرغب في حجز عرض ${name} — ${price} ريال.`
  },
  question: {
    en: "Hi Velara, I have a question.",
    ar: "مرحباً فيلارا، عندي استفسار."
  }
};

// Localized category labels for the {category} placeholder.
const CATEGORY_LABELS = {
  massage:  { en: 'massage',       ar: 'تدليك' },
  moroccan: { en: 'Moroccan bath', ar: 'حمام مغربي' },
  nails:    { en: 'nails',         ar: 'أظافر' },
  waxing:   { en: 'waxing',        ar: 'إزالة شعر' }
};

// Build a wa.me URL with a pre-filled message in the given (or current) language.
// messageKey: 'generic' | 'category' | 'treatment' | 'offer' | 'question'
// args: depend on the key (e.g. waBook('treatment', name, price))
function waBook(messageKey, ...args) {
  const lang = localStorage.getItem('velara_lang') || 'en';
  const entry = BOOKING_MESSAGES[messageKey] || BOOKING_MESSAGES.generic;
  const tpl = entry[lang];
  const msg = typeof tpl === 'function' ? tpl(...args) : tpl;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Legacy helper kept for any inline callers that pre-compose their own message.
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Rewrite href on every element with [data-wa-book] so static buttons get
// the right localized URL on initial load and every language switch.
function updateBookingLinks() {
  const lang = localStorage.getItem('velara_lang') || 'en';
  document.querySelectorAll('[data-wa-book]').forEach(a => {
    const key = a.dataset.waBook;
    const args = [];
    if (key === 'category') {
      const cat = a.dataset.waCategory || '';
      const label = (CATEGORY_LABELS[cat] && CATEGORY_LABELS[cat][lang]) || cat;
      args.push(label);
    }
    a.href = waBook(key, ...args);
    if (!a.target) a.target = '_blank';
    if (!a.rel) a.rel = 'noopener';
  });
}

// =========================================
// TIKTOK ANALYTICS — ClickButton event for every WhatsApp booking click
// =========================================
// Single document-level click listener replaces 20+ inline onclick attributes.
// Covers both static [data-wa-book] buttons and dynamically rendered links
// (service rows, package cards) whose href contains wa.me. Identical to the
// per-button onclick approach from TikTok's docs:
//   onclick="if(typeof ttq !== 'undefined') ttq.track('ClickButton', ...)"
// Our WhatsApp links use target="_blank" so the current page never navigates,
// which guarantees the track() call lands before the new tab opens.
function initTikTokTracking() {
  document.addEventListener('click', function(e) {
    const el = e.target.closest('[data-wa-book], a[href*="wa.me"]');
    if (!el) return;
    if (typeof ttq !== 'undefined') {
      ttq.track('ClickButton', {
        contents: [{ content_name: 'WhatsApp Booking' }],
        value: 0,
        currency: 'SAR'
      });
    }
  });
}

// =========================================
// SITE CONFIG APPLICATION — pushes SITE_CONFIG values into the DOM
// =========================================
// Runs on DOMContentLoaded and on every language switch. Updates:
//   - All tel: hrefs to use SITE_CONFIG.whatsappNumber
//   - Phone-display text inside tel: anchors (only if the existing text looks
//     like a phone number — leaves "Call Us" / "اتصلي بنا" buttons untouched)
//   - All Google Maps URLs in href attributes
//   - Elements with [data-cfg-hours] and [data-cfg-area] (contact page spans)
function applySiteConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;
  const cfg = SITE_CONFIG;
  const lang = localStorage.getItem('velara_lang') || 'en';
  const phoneRegex = /\+?\s*966[\s\-]*\d{2}[\s\-]*\d{3}[\s\-]*\d{4}/;

  // tel: hrefs
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.href = 'tel:+' + cfg.whatsappNumber;
    // If the link text is itself a phone number (not a button label), refresh it too.
    if (a.children.length === 0 && phoneRegex.test(a.textContent)) {
      a.textContent = cfg.phoneDisplay;
    }
  });

  // Maps URLs (any of the common Google Maps host patterns)
  document.querySelectorAll(
    'a[href*="maps.app.goo.gl"], a[href*="goo.gl/maps"], a[href*="google.com/maps"]'
  ).forEach(a => {
    a.href = cfg.mapsUrl;
  });

  // Localized hours + service area (contact page)
  document.querySelectorAll('[data-cfg-hours]').forEach(el => {
    el.textContent = cfg.hours[lang] || cfg.hours.en;
  });
  document.querySelectorAll('[data-cfg-area]').forEach(el => {
    el.textContent = cfg.serviceArea[lang] || cfg.serviceArea.en;
  });
}

// =========================================
// LANGUAGE SWITCHING
// =========================================
function setLang(lang, ev){
  localStorage.setItem('velara_lang', lang);
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.remove('active'));
  if(ev) ev.target.classList.add('active');
  else document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');

  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if(val) el.innerHTML = val;
  });

  // Re-render dynamic lists if a render function is defined for the page
  if(typeof renderPageContent === 'function') renderPageContent(lang);

  // Refresh static WhatsApp booking links so their pre-filled text matches the new language
  updateBookingLinks();

  // Refresh language-dependent SITE_CONFIG fields (hours, service area)
  applySiteConfig();
}

function initLang(){
  const saved = localStorage.getItem('velara_lang') || 'en';
  setLang(saved);
}

// Single-button toggle used by .lang-toggle: flip to the other language.
function toggleLang(){
  const current = localStorage.getItem('velara_lang') || 'en';
  setLang(current === 'en' ? 'ar' : 'en');
}

// =========================================
// SCROLL REVEAL ANIMATIONS
// =========================================
function initReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =========================================
// HEADER SCROLL EFFECT
// =========================================
function initHeader(){
  const header = document.querySelector('.site-header');
  if(!header) return;
  const onScroll = () => {
    if(window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// =========================================
// MOBILE MENU
// =========================================
function toggleMenu(){
  document.querySelector('.nav-list').classList.toggle('open');
}
function initMobileMenu(){
  document.querySelectorAll('.nav-list a').forEach(a=>{
    a.addEventListener('click',()=>document.querySelector('.nav-list').classList.remove('open'));
  });
}

// =========================================
// SET ACTIVE NAV LINK
// =========================================
function setActiveNav(page){
  document.querySelectorAll('.nav-list a').forEach(a=>{
    if(a.dataset.page === page) a.classList.add('active');
  });
}

// =========================================
// INIT ON LOAD
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  initLang();             // also calls applySiteConfig() via setLang()
  initReveal();
  initHeader();
  initMobileMenu();
  initTikTokTracking();
});
