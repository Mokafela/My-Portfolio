// Client Side Interactive Features Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileMenu();
  init3DTilt();
  initScrollReveal();
  initProjectFilters();
  initContactForm();
  initNavHighlight();
  initThemeSwitcher();
  initGeometryParallax();
  init3DRenderEngine();
});

// Global translation state
window.currentLanguage = 'en';

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_exp: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    btn_talk: "Let's Talk",
    hero_badge: "&lt; 80kb gzipped, every time",
    hero_title: 'You got an idea? <br><span class="gradient-text">I got you</span>.',
    hero_desc: "Senior Frontend Engineer specializing in clean Vue and Nuxt architectures. I design lightweight, high-performance web applications with a focus on streamlined state management, zero bloat, and optimized bundle sizes.",
    btn_start_project: "Start a Project",
    btn_see_work: "See My Work",
    hero_sub_prefix: "I am ",
    about_tag: "01 / About Me",
    about_title: "Focusing on Clean Logic",
    about_p1: "Hi, I'm Mohammad. I build high-performance frontend systems with Vue and Nuxt. I am deeply committed to combining visual elegance with raw speed performance. Beautiful interfaces only succeed if they load instantly; conversely, speed needs polished design to engage. My work bridges both.",
    about_p2: "I focus on solving complex SSR hydration conflicts, refining micro-animations, and maintaining flat component logic. My goal is to write highly optimized code that keeps bundles lightweight and layouts stunningly responsive across all devices.",
    about_stat1_num: "5+",
    about_stat1_lbl: "Years Experience",
    about_stat2_num: "40+",
    about_stat2_lbl: "Completed Projects",
    about_stat3_num: "100%",
    about_stat3_lbl: "Client Delight",
    feat1_title: "Flat Logic",
    feat1_desc: "Write code someone else can read. Avoid nested state wrappers. Composables only when sharing state.",
    feat2_title: "Speed First",
    feat2_desc: "Under 100ms interactions. Viewport lazy-rendering. If Lighthouse score is below 95, it is broken.",
    feat3_title: "Useful Motion",
    feat3_desc: "Micro-animations must be fast. Under 200ms or users feel the lag. Respect accessibility.",
    exp_tag: "02 / Experience",
    exp_title: "Where I Build Systems",
    comp1_name: "Avapardaz",
    comp1_role: "Backend & Systems Infrastructure",
    comp1_desc: "Designed internal APIs, organized database schemas, and resolved scalability bottlenecks for Kerman's largest tech holding. Maintained high system availability under heavy e-commerce traffic.",
    comp2_name: "Zoodex",
    comp2_role: "Senior Frontend Specialist",
    comp2_desc: "Engineered high-performance telemetry dashboards and telemedicine portals. Optimized state initialization in Nuxt 3 and reduced initial loading latency by 40% using custom lazy-rendering.",
    skills_tag: "03 / Expertise",
    skills_title: "My Tech Ecosystem",
    skills_cat1: "Frontend Stack",
    skills_cat2: "Backend & Database",
    skills_cat3: "Specialized Highlights",
    skills_cat4: "Languages",
    projects_tag: "04 / Selected Works",
    projects_title: "Bringing Concepts to Reality",
    filter_all: "All",
    filter_dev: "Development",
    filter_opt: "Optimization",
    proj1_title: "Zoodex Healthcare Platform",
    proj1_desc: "Nuxt 3 telemedicine platform. Optimized state initialization and reduced initial load latency by 40%.",
    proj2_title: "Tehranio Web Portal",
    proj2_desc: "High-traffic business directory for Tehran. Implemented SSR and optimized metadata structure, doubling organic SEO traffic.",
    proj3_title: "Atlas Games Admin Suite",
    proj3_desc: "Real-time game administration suite. Developed custom match controller operating with sub-millisecond response latency.",
    proj4_title: "Realtime Stream VST Control",
    proj4_desc: "Real-time audio plugin controller utilizing low-latency WebSockets for non-blocking main-thread synchronization.",
    proj_link_view: "View Project",
    proj_link_portal: "View Portal",
    proj_link_dashboard: "View Dashboard",
    proj_link_panel: "View Panel",
    contact_tag: "05 / Let's Connect",
    contact_title: "Start a Conversation",
    contact_sub: "Get in Touch",
    contact_desc: "Let's collaborate to build high-performance web applications. Reach out to discuss how we can bring your technical requirements to life.",
    contact_loc: "Remote / Worldwide",
    form_name_lbl: "Your Name",
    form_name_ph: "John Doe",
    form_email_lbl: "Your Email",
    form_email_ph: "john@example.com",
    form_msg_lbl: "Message",
    form_msg_ph: "Tell me about your project...",
    form_submit_btn: "Send Message",
    footer_copy: "&copy; 2026 Mohammad. All rights reserved."
  },
  fa: {
    nav_home: "خانه",
    nav_about: "درباره من",
    nav_exp: "تجربه‌ کاری",
    nav_skills: "مهارت‌ها",
    nav_projects: "پروژه‌ها",
    nav_contact: "تماس",
    btn_talk: "گفتگو کنیم",
    hero_badge: "کمتر از ۸۰ کیلوبایت gzipped، همیشه",
    hero_title: 'ایده‌اش از شما؛ <br><span class="gradient-text">پیاده‌سازی حرفه‌ای‌اش با من</span>.',
    hero_desc: "برنامه‌نویس ارشد فرانت‌اند با تخصص در توسعه معماری‌های بهینه و سبک با Vue و Nuxt. تمرکز من روی مدیریت استیت کارآمد، حذف کدهای اضافی و بهینه‌سازی حجم باندل برای رسیدن به بالاترین سرعت لود است.",
    btn_start_project: "شروع یک پروژه",
    btn_see_work: "مشاهده آثار من",
    hero_sub_prefix: "من ",
    about_tag: "۰۱ / درباره من",
    about_title: "تمرکز بر منطق ساده و کدهای کارآمد",
    about_p1: "سلام، من محمد هستم. من سیستم‌های فرانت‌اند با کارایی بالا را با استفاده از Vue و Nuxt توسعه می‌دهم. اعتقاد عمیق من تلفیق ظرافت و زیبایی بصری با سرعت و کارایی بالاست. رابط‌های کاربری زیبا زمانی موفق خواهند بود که بدون معطلی لود شوند؛ و از طرف دیگر، لود سریع بدون طراحی صیقل‌خورده و چشم‌نواز بی‌اثر است. کار من ایجاد تعادل میان این دو است.",
    about_p2: "تمرکز اصلی من روی حل چالش‌های پیچیده هیدریشن SSR، بهبود میکرواینمیشن‌ها و ساده نگه داشتن ساختار کامپوننت‌هاست. هدف من نوشتن کدهایی کاملاً بهینه‌سازی شده است که حجم باندل‌ها را کم و اجرای رابط‌های کاربری را در تمامی دستگاه‌ها به صورت خیره‌کننده و واکنش‌گرا حفظ کند.",
    about_stat1_num: "۵+",
    about_stat1_lbl: "سال تجربه کاری",
    about_stat2_num: "۴۰+",
    about_stat2_lbl: "پروژه تکمیل شده",
    about_stat3_num: "۱۰۰٪",
    about_stat3_lbl: "رضایت کارفرمایان",
    feat1_title: "منطق ساده",
    feat1_desc: "کدی بنویسید که دیگران هم بتوانند بخوانند. از کلاس‌های پیچیده مدیریت حالت دوری کنید. فقط وقتی حالت را به اشتراک می‌گذارید از کامپوزبل استفاده کنید.",
    feat2_title: "اول سرعت",
    feat2_desc: "پاسخ به تعاملات زیر ۱۰۰ میلی‌ثانیه. لِی‌زی-رندرینگ بر اساس ویوپورت. اگر نمره لایت‌هاوس زیر ۹۵ باشد، یعنی کار خراب است.",
    feat3_title: "انیمیشن‌های کاربردی",
    feat3_desc: "میکرواینمیشن‌ها باید سریع باشند. زیر ۲۰۰ میلی‌ثانیه، وگرنه کاربر تاخیر را حس می‌کند. به دسترس‌پذیری احترام بگذارید.",
    exp_tag: "۰۲ / تجربه‌ کاری",
    exp_title: "سوابق کاری",
    comp1_name: "آواپرداز",
    comp1_role: "توسعه‌دهنده زیرساخت و بک‌اند",
    comp1_desc: "هلدینگ بزرگ فناوری و ارائه‌دهنده سیستم‌های فروشگاهی و لجستیک. مسئول طراحی APIهای داخلی، بهینه‌سازی دیتابیس و رفع گلوگاه‌های مقیاس‌پذیری و حفظ پایداری سیستم در سطح ۹۹.۹ درصد بودم.",
    comp2_name: "زودکس",
    comp2_role: "مهندس ارشد فرانت‌اند",
    comp2_desc: "سامانه هوشمند تحویل سفارشات. پیاده‌سازی مدیریت حالت فرانت‌اند، طراحی پرتال پزشکی از راه دور و کاهش ۴۰ درصدی زمان بارگذاری صفحات با روش لِی‌زی-رندرینگ اختصاصی.",
    skills_tag: "۰۳ / تخصص‌ها",
    skills_title: "اکوسیستم فنی من",
    skills_cat1: "بخش فرانت‌اند",
    skills_cat2: "بخش بک‌اند و دیتابیس",
    skills_cat3: "نکات برجسته تخصصی",
    skills_cat4: "زبان‌ها",
    projects_tag: "۰۴ / نمونه کارها",
    projects_title: "تبدیل ایده‌ها به واقعیت",
    filter_all: "همه",
    filter_dev: "توسعه",
    filter_opt: "بهینه‌سازی",
    proj1_title: "پلتفرم سلامت Zoodex",
    proj1_desc: "پلتفرم پزشکی از راه دور با Nuxt 3. بهینه‌سازی مقداردهی اولیه حالت و کاهش ۴۰ درصدی زمان بارگذاری اولیه.",
    proj2_title: "پورتال وب تهران یو",
    proj2_desc: "پورتال راهنمای مشاغل تهران. پیاده‌سازی رندر سمت سرور (SSR) و بهینه‌سازی ساختار متادیتا با رشد ۱۰۰ درصدی ترافیک ارگانیک.",
    proj3_title: "سیستم مدیریت اطلس گیمز",
    proj3_desc: "پنل مدیریت بازی‌های اطلس. پیاده‌سازی کنترلر اختصاصی مسابقات با پاسخ‌دهی آنی و بدون تاخیر.",
    proj4_title: "سیستم کنترل زنده VST",
    proj4_desc: "پنل کنترل همگام‌سازی پلاگین‌های صوتی VST بر بستر وب‌سوکت با تاخیر فوق‌العاده کم و بدون مسدودسازی ترد اصلی.",
    proj_link_view: "مشاهده پروژه",
    proj_link_portal: "مشاهده پورتال",
    proj_link_dashboard: "مشاهده داشبورد",
    proj_link_panel: "مشاهده پنل",
    contact_tag: "۰۵ / ارتباط با من",
    contact_title: "شروع یک گفتگو",
    contact_sub: "شروع همکاری",
    contact_desc: "بیایید برای ساخت نرم‌افزارهای تحت وب با کارایی بالا همکاری کنیم. جهت گفتگو درباره نیازمندی‌های فنی خود پیام بگذارید.",
    contact_loc: "دورکاری / سراسر جهان",
    form_name_lbl: "نام شما",
    form_name_ph: "نام و نام خانوادگی",
    form_email_lbl: "ایمیل شما",
    form_email_ph: "example@domain.com",
    form_msg_lbl: "پیام شما",
    form_msg_ph: "در مورد پروژه‌تان بگویید...",
    form_submit_btn: "ارسال پیام",
    footer_copy: "&copy; ۲۰۲۶ محمد. تمامی حقوق محفوظ است."
  },
  de: {
    nav_home: "Startseite",
    nav_about: "Über mich",
    nav_exp: "Erfahrung",
    nav_skills: "Fähigkeiten",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    btn_talk: "Lass uns reden",
    hero_badge: "&lt; 80kb gzipped, jedes Mal",
    hero_title: 'Du hast eine Idee? <br><span class="gradient-text">Ich setze sie um</span>.',
    hero_desc: "Senior Frontend Engineer spezialisiert auf saubere Vue- und Nuxt-Architekturen. Ich entwerfe leichtgewichtige, performante Webanwendungen mit Fokus auf einfache Zustandshaltung und optimierte Bundle-Größen.",
    btn_start_project: "Projekt starten",
    btn_see_work: "Meine Arbeit sehen",
    hero_sub_prefix: "Ich ",
    about_tag: "01 / Über mich",
    about_title: "Fokus auf klare Logik",
    about_p1: "Hallo, ich bin Mohammad. Ich entwickle hochperformante Frontend-Systeme mit Vue und Nuxt. Es ist mir ein großes Anliegen, visuelle Eleganz mit maximaler Geschwindigkeit zu verbinden. Schöne Benutzeroberflächen überzeugen nur, wenn sie sofort laden; umgekehrt benötigt Schnelligkeit ein ausgefeiltes Design, um zu begeistern. Meine Arbeit verbindet beides.",
    about_p2: "Ich konzentriere mich auf die Behebung komplexer SSR-Hydrationskonflikte, die Verfeinerung von Mikroanimationen und die Strukturierung flacher Komponenten-Logik. Mein Ziel ist es, hochoptimierten Code zu schreiben, der Bundles leichtgewichtig und Layouts auf allen Geräten reaktionsschnell hält.",
    about_stat1_num: "5+",
    about_stat1_lbl: "Jahre Erfahrung",
    about_stat2_num: "40+",
    about_stat2_lbl: "Abgeschlossene Projekte",
    about_stat3_num: "100%",
    about_stat3_lbl: "Zufriedene Kunden",
    feat1_title: "Flache Logik",
    feat1_desc: "Schreibe Code, den andere lesen können. Vermeide verschachtelte State-Wrapper. Composables nur zum Teilen von State.",
    feat2_title: "Geschwindigkeit zuerst",
    feat2_desc: "Interaktionen unter 100ms. Viewport-basiertes Lazy-Rendering. Wenn der Lighthouse-Score unter 95 liegt, ist es kaputt.",
    feat3_title: "Nützliche Bewegung",
    feat3_desc: "Mikroanimationen müssen schnell sein. Unter 200ms, sonst spüren Nutzer die Verzögerung. Barrierefreiheit beachten.",
    exp_tag: "02 / Erfahrung",
    exp_title: "Beruflicher Werdegang",
    comp1_name: "Avapardaz",
    comp1_role: "Backend- & Systeminfrastruktur",
    comp1_desc: "Ein großer Technologiekonzern für E-Commerce und Logistik im Iran. Ich entwerfe interne APIs, optimiere Datenbankschemata und behebe Skalierungsengpässe. System-Uptime bei 99,9% gehalten.",
    comp2_name: "Zoodex",
    comp2_role: "Senior Frontend Engineer",
    comp2_desc: "On-Demand-Lieferplattform und Logistiknetzwerk. Zustandsverwaltung neu strukturiert, Telemedizin-Portal integriert und die Ladezeit durch Viewport-basiertes Lazy-Rendering um 40% verkürzt.",
    skills_tag: "03 / Expertise",
    skills_title: "Mein Tech-Ökosystem",
    skills_cat1: "Frontend-Stack",
    skills_cat2: "Backend & Datenbank",
    skills_cat3: "Spezialisierte Highlights",
    skills_cat4: "Sprachen",
    projects_tag: "04 / Ausgewählte Arbeiten",
    projects_title: "Konzepte in die Realität umsetzen",
    filter_all: "Alle",
    filter_dev: "Entwicklung",
    filter_opt: "Optimierung",
    proj1_title: "Zoodex Gesundheitsplattform",
    proj1_desc: "Nuxt 3 Telemedizin-Plattform. Zustandshaltung optimiert und initiale Ladezeit um 40% reduziert.",
    proj2_title: "Tehranio Webportal",
    proj2_desc: "Branchenverzeichnis für Teheran. SSR implementiert und Metadaten-Struktur optimiert, organischen SEO-Traffic verdoppelt.",
    proj3_title: "Atlas Games Admin-Suite",
    proj3_desc: "Echtzeit-Spielverwaltungs-Dashboard. Match-Controller mit Latenzen im Sub-Millisekundenbereich entwickelt.",
    proj4_title: "Echtzeit VST Stream-Steuerung",
    proj4_desc: "Echtzeit-Audio-Plugin-Controller über WebSockets mit extrem niedriger Latenz zur Entlastung des Haupt-Threads.",
    proj_link_view: "Projekt ansehen",
    proj_link_portal: "Portal ansehen",
    proj_link_dashboard: "Dashboard ansehen",
    proj_link_panel: "Panel ansehen",
    contact_tag: "05 / Kontakt",
    contact_title: "Ein Gespräch beginnen",
    contact_sub: "Kontakt aufnehmen",
    contact_desc: "Lassen Sie uns zusammenarbeiten, um performante Webanwendungen zu entwickeln. Kontaktieren Sie mich, um Ihre technischen Anforderungen zu besprechen.",
    contact_loc: "Remote / Weltweit",
    form_name_lbl: "Ihr Name",
    form_name_ph: "Max Mustermann",
    form_email_lbl: "Ihre E-Mail",
    form_email_ph: "max@beispiel.de",
    form_msg_lbl: "Nachricht",
    form_msg_ph: "Erzählen Sie mir von Ihrem Projekt...",
    form_submit_btn: "Nachricht senden",
    footer_copy: "&copy; 2026 Mohammad. Alle Rechte vorbehalten."
  }
};

function applyLanguage(lang) {
  window.currentLanguage = lang;
  
  // Update document metadata
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';

  // Apply translations to data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Apply translations to placeholders
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update navbar indicator
  const activeBtn = document.getElementById('lang-active-btn');
  if (activeBtn) {
    const flagSvgs = { en: 'flags/gb.svg', fa: 'flags/ir.svg', de: 'flags/de.svg' };
    const flagSrc = flagSvgs[lang] || '';
    activeBtn.innerHTML = `<img src="${flagSrc}" alt="" class="nav-flag"> <span>${lang.toUpperCase()}</span>`;
  }

  // Restart typed text with the new language words
  initTypedText();

  // Save selected preference
  localStorage.setItem('portfolio-lang', lang);
}

function initLanguage() {
  const modal = document.getElementById('lang-modal');
  const dropdownOpts = document.querySelectorAll('.lang-opt');
  const modalBtns = document.querySelectorAll('.lang-btn-select');
  const savedLang = localStorage.getItem('portfolio-lang');
  
  // Ensure default body overflow is unlocked initially
  document.body.style.overflow = '';

  // Pre-load default or saved language in background
  if (savedLang) {
    applyLanguage(savedLang);
    if (modal) {
      modal.style.display = 'none';
    }
  } else {
    applyLanguage('en');
    // Display selection modal on load only if no language is saved
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.remove('fade-out');
      document.body.style.overflow = 'hidden'; // Lock scroll
    }
  }

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
      if (modal) {
        modal.classList.add('fade-out');
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = ''; // Unlock scroll
        }, 500);
      }
    });
  });

  dropdownOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });
}

// Mobile Navbar Toggle Menu
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Hero Typography Typing Effect
let typedTextTimeout = null;
let currentWordIndex = 0;
let currentCharIndex = 0;
let isTypedDeleting = false;

function initTypedText() {
  const textEl = document.getElementById('typed-text');
  if (!textEl) return;

  const typedWordsDict = {
    en: [
      'reducing your Time to Interactive.',
      'shipping less JavaScript.',
      'making Lighthouse scores embarrassing for competitors.'
    ],
    fa: [
      'زمان لود و پاسخ‌دهی سایت را به حداقل می‌رسانم.',
      'کدهای جاوااسکریپت اضافی را حذف می‌کنم.',
      'بالاترین امتیاز لایت‌هاوس را هدف قرار می‌دهم.'
    ],
    de: [
      'reduziere Ihre Time to Interactive.',
      'liefere weniger JavaScript aus.',
      'mache Lighthouse-Scores peinlich für die Konkurrenz.'
    ]
  };

  function type() {
    const lang = window.currentLanguage || 'en';
    const words = typedWordsDict[lang] || typedWordsDict['en'];
    
    currentWordIndex = currentWordIndex % words.length;
    const currentWord = words[currentWordIndex];
    let typeSpeed = 100;

    if (isTypedDeleting) {
      textEl.textContent = currentWord.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      typeSpeed = 50;
    } else {
      textEl.textContent = currentWord.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      typeSpeed = 100;
    }

    let nextTypeSpeed = typeSpeed;

    if (!isTypedDeleting && currentCharIndex === currentWord.length) {
      nextTypeSpeed = 2000;
      isTypedDeleting = true;
    } else if (isTypedDeleting && currentCharIndex === 0) {
      isTypedDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      nextTypeSpeed = 500;
    }

    typedTextTimeout = setTimeout(type, nextTypeSpeed);
  }

  if (typedTextTimeout) {
    clearTimeout(typedTextTimeout);
  }
  currentWordIndex = 0;
  currentCharIndex = 0;
  isTypedDeleting = false;
  type();
}

// Hero 3D Card Hover Interaction
function init3DTilt() {
  const wrapper = document.querySelector('.interactive-card-wrapper');
  const card = document.getElementById('hero-card');
  if (!wrapper || !card) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Pass coordinate properties for glow background radial effect
    card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--y', `${(y / rect.height) * 100}%`);
  });

  wrapper.addEventListener('mouseleave', () => {
    // Keep flat without transformation to prevent text blur
  });
}

// Scroll animations via IntersectionObserver
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve to keep active classes persisted
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// Filter Portfolio project cards
function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button states
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          // Force a reflow to trigger scale transition
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          // Delay display change for smooth transitions
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Form submission using Formspree AJAX backend
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalText = submitBtn.querySelector('span').textContent;
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending...';

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        submitBtn.querySelector('span').textContent = 'Sent Successfully! ✨';
        form.reset();
      } else {
        submitBtn.querySelector('span').textContent = 'Submission Error ❌';
      }
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
      }, 3500);
    })
    .catch(() => {
      submitBtn.querySelector('span').textContent = 'Connection Error ❌';
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
      }, 3500);
    });
  });
}

// Keep Nav Link Highlighting consistent with scrolling
function initNavHighlight() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-10% 0px -60% 0px'
  });

  sections.forEach(sec => navObserver.observe(sec));
}

// Theme Switcher Toggle and Styling Classes Handler
function initThemeSwitcher() {
  const toggleBtn = document.getElementById('switcher-toggle');
  if (!toggleBtn) return;

  function setTheme(theme) {
    document.body.className = ''; // Reset
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('portfolio-theme', theme);
    
    // Update button icon: Sun for light theme, Moon for dark theme
    if (theme === 'psychology-light') {
      toggleBtn.innerHTML = `
        <svg class="theme-icon-light" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      toggleBtn.innerHTML = `
        <svg class="theme-icon-dark" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  }

  // Toggle on click
  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('theme-psychology-light');
    const targetTheme = isLight ? 'psychology' : 'psychology-light';
    setTheme(targetTheme);
  });

  // Load saved theme preference (default to dark psychology theme)
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'psychology-light') {
    setTheme('psychology-light');
  } else {
    setTheme('psychology');
  }
}

// Calculate parallax scroll + mouse translations on geometric background shapes
function initGeometryParallax() {
  const shapes = document.querySelectorAll('.geo-shape');
  if (shapes.length === 0) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  const lerpFactor = 0.08;

  // Listen to mouse movement
  window.addEventListener('mousemove', (e) => {
    // Relative position from window center (-0.5 to 0.5)
    targetX = (e.clientX / window.innerWidth) - 0.5;
    targetY = (e.clientY / window.innerHeight) - 0.5;
  }, { passive: true });

  const tick = () => {
    // LERP calculation for smooth mouse movement
    currentX += (targetX - currentX) * lerpFactor;
    currentY += (targetY - currentY) * lerpFactor;

    // Skip heavy animations on mobile/tablet viewports to prevent scroll lag
    if (window.innerWidth <= 1024) {
      requestAnimationFrame(tick);
      return;
    }

    const scrollY = window.scrollY;

    shapes.forEach(shape => {
      const scrollSpeed = parseFloat(shape.getAttribute('data-speed')) || 0.1;
      const mouseFactor = parseFloat(shape.getAttribute('data-mouse')) || 20;

      const xTranslate = currentX * mouseFactor;
      const yTranslate = (scrollY * scrollSpeed) + (currentY * mouseFactor);

      // Translate element with translate3d for hardware acceleration
      shape.style.transform = `translate3d(${xTranslate.toFixed(2)}px, ${yTranslate.toFixed(2)}px, 0)`;
    });

    requestAnimationFrame(tick);
  };

  // Start tick loop
  tick();
}



// Interactive 3D Wireframe Canvas Engine
function init3DRenderEngine() {
  const canvas = document.getElementById('canvas-3d');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const speedSlider = document.getElementById('render-rotate-speed');
  const countsEl = document.getElementById('3d-counts');
  const timeEl = document.getElementById('3d-render-time');

  // Math presets
  const geometries = {
    cube: {
      vertices: [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
      ],
      edges: [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ]
    },
    octahedron: {
      vertices: [
        [0, 1.4, 0], [1.4, 0, 0], [0, 0, -1.4], [-1.4, 0, 0], [0, 0, 1.4], [0, -1.4, 0]
      ],
      edges: [
        [0, 1], [0, 2], [0, 3], [0, 4],
        [5, 1], [5, 2], [5, 3], [5, 4],
        [1, 2], [2, 3], [3, 4], [4, 1]
      ]
    },
    icosahedron: {
      vertices: [
        [-0.8, 1.3, 0], [0.8, 1.3, 0], [-0.8, -1.3, 0], [0.8, -1.3, 0],
        [0, -0.8, 1.3], [0, 0.8, 1.3], [0, -0.8, -1.3], [0, 0.8, -1.3],
        [1.3, 0, -0.8], [1.3, 0, 0.8], [-1.3, 0, -0.8], [-1.3, 0, 0.8]
      ],
      edges: [
        [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
        [1, 5], [1, 7], [1, 8], [1, 9],
        [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
        [3, 4], [3, 6], [3, 8], [3, 9],
        [4, 5], [4, 9], [4, 11],
        [5, 9], [5, 11],
        [6, 7], [6, 8], [6, 10],
        [7, 8], [7, 10],
        [8, 9],
        [10, 11]
      ]
    }
  };

  let currentShape = 'icosahedron';
  let angleX = 0.5;
  let angleY = 0.5;
  let vx = 0.005;
  let vy = 0.005;
  let isDragging = false;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let autoRotateBase = 0.005;

  // Set sizing
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Mouse Interaction
  const container = canvas.parentElement;
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    vx = 0;
    vy = 0;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    angleY += dx * 0.008;
    angleX += dy * 0.008;
    vx = dx * 0.008;
    vy = dy * 0.008;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Interaction
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 0) return;
    isDragging = true;
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
    vx = 0;
    vy = 0;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length === 0) return;
    const dx = e.touches[0].clientX - lastMouseX;
    const dy = e.touches[0].clientY - lastMouseY;
    angleY += dx * 0.008;
    angleX += dy * 0.008;
    vx = dx * 0.008;
    vy = dy * 0.008;
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  }, { passive: true });

  // Shape preset control click
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentShape = btn.getAttribute('data-shape');
      
      const geom = geometries[currentShape];
      if (countsEl) {
        countsEl.textContent = `${geom.vertices.length} / ${geom.edges.length}`;
      }
    });
  });

  function draw() {
    const t0 = performance.now();
    
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);
    ctx.clearRect(0, 0, w, h);

    const geom = geometries[currentShape];
    const vertices = geom.vertices;
    const edges = geom.edges;

    // Speed slider multiplier
    const speedMultiplier = speedSlider ? parseFloat(speedSlider.value) / 30 : 1;

    // Apply spin speed
    if (!isDragging) {
      angleY += vx + autoRotateBase * speedMultiplier;
      angleX += vy + autoRotateBase * 0.5 * speedMultiplier;
      // Friction
      vx *= 0.95;
      vy *= 0.95;
    }

    // Precalculate sin/cos
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);

    // Rotate and project vertices
    const projected = [];
    const distance = 4.0;
    const scale = Math.min(w, h) * 0.35;

    for (let i = 0; i < vertices.length; i++) {
      const v = vertices[i];
      // Rotate Y
      const x1 = v[0] * cosY - v[2] * sinY;
      const z1 = v[0] * sinY + v[2] * cosY;
      // Rotate X
      const y2 = v[1] * cosX - z1 * sinX;
      const z2 = v[1] * sinX + z1 * cosX;

      // Project
      const sz = z2 + distance;
      const px = (x1 * scale) / sz + w / 2;
      const py = (y2 * scale) / sz + h / 2;

      projected.push({ x: px, y: py, z: z2 });
    }

    // Gather and draw edges
    // Theme color logic: read primary color from css variable
    const computedStyle = getComputedStyle(document.body);
    const primaryColor = computedStyle.getPropertyValue('--primary').trim() || '#5c64f2';

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i];
      const p1 = projected[e[0]];
      const p2 = projected[e[1]];

      // Average depth Z
      const zAvg = (p1.z + p2.z) / 2;
      // Range: max coordinate scale is ~2.0
      // Map zAvg from -2.0 to 2.0 -> opacity from 0.85 to 0.15
      const depth = Math.max(-2.0, Math.min(2.0, zAvg));
      const opacity = 0.15 + 0.70 * ((2.0 - depth) / 4.0);

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = primaryColor;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 1.2 + (1.0 - (depth + 2.0) / 4.0) * 1.5; // Thicker lines closer
      ctx.stroke();
    }

    // Draw vertices dots
    ctx.globalAlpha = 1.0;
    for (let i = 0; i < projected.length; i++) {
      const p = projected[i];
      const depth = Math.max(-2.0, Math.min(2.0, p.z));
      const opacity = 0.3 + 0.7 * ((2.0 - depth) / 4.0);
      const r = 3 + (1.0 - (depth + 2.0) / 4.0) * 3; // Larger dot closer

      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.globalAlpha = opacity;
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = r * 2;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow
    }

    ctx.globalAlpha = 1.0;

    const t1 = performance.now();
    if (timeEl) {
      timeEl.textContent = `${(t1 - t0).toFixed(2)}ms`;
    }

    requestAnimationFrame(draw);
  }

  // Start rendering loop
  requestAnimationFrame(draw);
}
