// =========================================
// VELARA BEAUTY SPA — SHARED JS
// =========================================

const FRESHA_URL = 'https://www.fresha.com/en-GB/a/velara-spa-home-service-riyadh-king-abdulaziz-rd-al-woroud-district-king-abdullah-ibn-abdulaziz-road-riyadh-11544-saudi-arabia-p25eda7v/all-offer?menu=true&share=true&pId=2792494';
const MAPS_URL = 'https://maps.app.goo.gl/YijaAuDi3qwFzWi97?g_st=iwb';
const PHONE = '+966507028521';
const PHONE_DISPLAY = '+966 50 702 8521';

function waLink(message){
  return `https://wa.me/966507028521?text=${encodeURIComponent(message)}`;
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
  initLang();
  initReveal();
  initHeader();
  initMobileMenu();
});
