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
});

// Global translation state
window.currentLanguage = 'en';

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    btn_talk: "Let's Talk",
    hero_badge: "Available for Freelance & Full-time",
    hero_title: 'Building Digital <span class="gradient-text">Masterpieces</span> That Drive Impact.',
    hero_desc: "A Senior Frontend Engineer & Nuxt Specialist crafting high-performance, immersive web applications. Distance is irrelevant—I deliver world-class Vue systems and pixel-perfect results for clients globally.",
    btn_view_projects: "View Projects",
    btn_learn_more: "Learn More",
    about_tag: "01 / About Me",
    about_title: "Bridging Code and Aesthetics",
    about_p1: "Hi! I am Mohammad. I'm a Senior Frontend Engineer focused on Vue 3, Nuxt 3, and modern web architectures. I specialize in building highly interactive, lightning-fast digital platforms that deliver premium user experiences across all devices.",
    about_p2: "I focus on pixel-perfection, smooth micro-animations, and clean code architectures. Collaborating seamlessly from anywhere, I build top-tier frontend solutions for teams worldwide, proving that high-impact execution is entirely location-independent.",
    about_stat1_num: "5+",
    about_stat1_lbl: "Years Experience",
    about_stat2_num: "40+",
    about_stat2_lbl: "Completed Projects",
    about_stat3_num: "100%",
    about_stat3_lbl: "Client Delight",
    feat1_title: "Clean Architecture",
    feat1_desc: "Maintainable, scalable, and optimized composable design systems built for production.",
    feat2_title: "High Performance",
    feat2_desc: "Flicker-free loads, viewport lazy-rendering, and 100/100 Lighthouse scores.",
    feat3_title: "User Centric",
    feat3_desc: "Intuitive user flows, responsive gestures, and accessible designs (WCAG/A11y).",
    skills_tag: "02 / Expertise",
    skills_title: "My Tech Ecosystem",
    skills_cat1: "Frontend Stack",
    skills_cat2: "Backend & State",
    skills_cat3: "UI & Performance",
    projects_tag: "03 / Selected Works",
    projects_title: "Bringing Concepts to Reality",
    filter_all: "All",
    filter_dev: "Development",
    filter_opt: "Optimization",
    proj1_title: "Zoodex Healthcare Platform",
    proj1_desc: "High-performance telemedicine web application with state management, doctor portals, and responsive patient tools.",
    proj2_title: "Tehranio Web Portal",
    proj2_desc: "Lightning-fast portal and location directory with server-side rendering for optimal SEO and client page loads.",
    proj3_title: "Atlas Games Admin Suite",
    proj3_desc: "Dual-interface match control panel and player management system for live gaming configurations.",
    proj4_title: "Realtime Stream VST Control",
    proj4_desc: "Low-latency telemetry dashboard for remote audio plugins, streaming WebSocket data at 60fps.",
    proj_link_view: "View Project",
    proj_link_portal: "View Portal",
    proj_link_dashboard: "View Dashboard",
    proj_link_panel: "View Panel",
    contact_tag: "04 / Let's Connect",
    contact_title: "Start a Conversation",
    contact_sub: "Have an idea in mind?",
    contact_desc: "Let's collaborate to build something outstanding. Drop me a line, and let's turn your vision into pixel-perfect reality.",
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
    nav_skills: "مهارت‌ها",
    nav_projects: "پروژه‌ها",
    nav_contact: "تماس",
    btn_talk: "گفتگو کنیم",
    hero_badge: "آماده برای پروژه‌های فریلنسری و تمام‌وقت",
    hero_title: 'خلق <span class="gradient-text">شاهکارهای</span> دیجیتالی با تأثیرگذاری بالا.',
    hero_desc: "مهندس ارشد فرانت‌اند و متخصص ناکست که سیستم‌های وب فوق‌العاده سریع و تعاملی خلق می‌کند. فاصله جغرافیایی اهمیتی ندارد — من سیستم‌های ری‌اکتیو در سطح جهانی و طراحی‌های پیکسل‌پرفکت برای کارفرمایان سراسر دنیا ارائه می‌دهم.",
    btn_view_projects: "مشاهده پروژه‌ها",
    btn_learn_more: "اطلاعات بیشتر",
    about_tag: "۰۱ / درباره من",
    about_title: "پیوند میان کدنویسی و زیبایی‌شناسی",
    about_p1: "سلام! من محمد هستم. یک مهندس ارشد فرانت‌اند با تمرکز ویژه بر روی Vue 3 و Nuxt 3 و معماری‌های مدرن وب. تخصص من در ساخت پلتفرم‌های دیجیتال بسیار تعاملی و پرسرعت است که تجربه کاربری ممتازی را در تمام دستگاه‌ها ارائه می‌دهند.",
    about_p2: "تمرکز من بر طراحی‌های پیکسل‌پرفکت، میکرواینمیشن‌های روان و معماری‌های کد تمیز است. با همکاری آنلاین و بی‌وقفه از هر کجا، راه‌حل‌های ممتاز فرانت‌اند برای تیم‌ها در سراسر جهان پیاده‌سازی می‌کنم و نشان می‌دهم که کیفیت و تخصص عالی هیچ وابستگی جغرافیایی ندارد.",
    about_stat1_num: "۵+",
    about_stat1_lbl: "سال تجربه کاری",
    about_stat2_num: "۴۰+",
    about_stat2_lbl: "پروژه تکمیل شده",
    about_stat3_num: "۱۰۰٪",
    about_stat3_lbl: "رضایت کارفرمایان",
    feat1_title: "معماری تمیز",
    feat1_desc: "طراحی سیستم‌های کامپوزبل نگهداری‌پذیر، مقیاس‌پذیر و بهینه‌شده برای محیط عملیاتی.",
    feat2_title: "کارایی فوق‌العاده",
    feat2_desc: "بارگذاری‌های بدون لرزش صفحه، لِی‌زی-رندرینگ بر اساس ویوپورت و نمرات ۱۰۰/۱۰۰ لایت‌هاوس.",
    feat3_title: "کاربرمحور",
    feat3_desc: "جریان‌های کاربری بصری، ژست‌های حرکتی واکنش‌گرا و طراحی‌های دسترس‌پذیر (WCAG/A11y).",
    skills_tag: "۰۲ / تخصص‌ها",
    skills_title: "اکوسیستم فنی من",
    skills_cat1: "بخش فرانت‌اند",
    skills_cat2: "بخش بک‌اند و استیت",
    skills_cat3: "رابط کاربری و عملکرد",
    projects_tag: "۰۳ / نمونه کارها",
    projects_title: "تبدیل ایده‌ها به واقعیت",
    filter_all: "همه",
    filter_dev: "توسعه",
    filter_opt: "بهینه‌سازی",
    proj1_title: "پلتفرم سلامت Zoodex",
    proj1_desc: "سامانه پزشکی از راه دور با کارایی بالا همراه با مدیریت حالت پیشرفته، پنل‌های پزشک و ابزارهای واکنش‌گرای بیمار.",
    proj2_title: "پورتال وب تهران یو",
    proj2_desc: "پورتال خدمات شهری و راهنمای مکانی سریع با رندرینگ سمت سرور (SSR) برای سئوی بهینه و لود سریع صفحات.",
    proj3_title: "سیستم مدیریت اطلس گیمز",
    proj3_desc: "پنل مدیریت دوطرفه برای کنترل مسابقات و سیستم مدیریت بازیکنان برای تنظیمات زنده بازی.",
    proj4_title: "سیستم کنترل زنده VST",
    proj4_desc: "داشبورد سنجش از راه دور با تاخیر کم برای پلاگین‌های صوتی، با پخش داده‌های وب‌سوکت در فریم‌ریت 60fps.",
    proj_link_view: "مشاهده پروژه",
    proj_link_portal: "مشاهده پورتال",
    proj_link_dashboard: "مشاهده داشبورد",
    proj_link_panel: "مشاهده پنل",
    contact_tag: "۰۴ / ارتباط با من",
    contact_title: "شروع یک گفتگو",
    contact_sub: "ایده‌ای در ذهن دارید؟",
    contact_desc: "بیایید برای ساختن یک اثر برجسته با یکدیگر همکاری کنیم. برای من پیام بگذارید تا چشم‌انداز شما را به واقعیت پیکسل‌پرفکت تبدیل کنیم.",
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
    nav_skills: "Fähigkeiten",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    btn_talk: "Lass uns reden",
    hero_badge: "Verfügbar für Freelance & Vollzeit",
    hero_title: 'Digitale <span class="gradient-text">Meisterwerke</span> bauen, die Wirkung zeigen.',
    hero_desc: "Senior Frontend Engineer & Nuxt-Spezialist für hochperformante, immersive Webanwendungen. Entfernung spielt keine Rolle – ich liefere erstklassige Vue-Systeme und pixelgenaue Ergebnisse für Kunden weltweit.",
    btn_view_projects: "Projekte ansehen",
    btn_learn_more: "Mehr erfahren",
    about_tag: "01 / Über mich",
    about_title: "Verbindung von Code und Ästhetik",
    about_p1: "Hallo! Ich bin Mohammad. Ich bin ein Senior Frontend Engineer mit Fokus auf Vue 3, Nuxt 3 und moderne Webarchitekturen. Ich bin spezialisiert auf die Entwicklung hochgradig interaktiver, blitzschneller digitaler Plattformen, die auf allen Geräten ein erstklassiges Nutzungserlebnis bieten.",
    about_p2: "Mein Fokus liegt auf Pixelgenauigkeit, flüssigen Mikroanimationen und sauberen Codearchitekturen. Durch die nahtlose Zusammenarbeit von überall auf der Welt entwickele ich erstklassige Frontend-Lösungen für globale Teams und beweise, dass exzellente Arbeit standortunabhängig ist.",
    about_stat1_num: "5+",
    about_stat1_lbl: "Jahre Erfahrung",
    about_stat2_num: "40+",
    about_stat2_lbl: "Abgeschlossene Projekte",
    about_stat3_num: "100%",
    about_stat3_lbl: "Zufriedene Kunden",
    feat1_title: "Saubere Architektur",
    feat1_desc: "Wartbare, skalierbare und optimierte Composable-Design-Systeme für die Produktion.",
    feat2_title: "Hohe Performance",
    feat2_desc: "Flimmerfreie Ladezeiten, Viewport-basiertes Lazy-Rendering und 100/100 Lighthouse-Scores.",
    feat3_title: "Benutzerzentriert",
    feat3_desc: "Intuitive Benutzerführung, responsive Gesten und barrierefreie Designs (WCAG/A11y).",
    skills_tag: "02 / Expertise",
    skills_title: "Mein Tech-Ökosystem",
    skills_cat1: "Frontend-Stack",
    skills_cat2: "Backend & State",
    skills_cat3: "UI & Performance",
    projects_tag: "03 / Ausgewählte Arbeiten",
    projects_title: "Konzepte in die Realität umsetzen",
    filter_all: "Alle",
    filter_dev: "Entwicklung",
    filter_opt: "Optimierung",
    proj1_title: "Zoodex Gesundheitsplattform",
    proj1_desc: "Hochperformante Telemedizin-Webanwendung mit State Management, Arzt-Portalen und responsiven Patienten-Tools.",
    proj2_title: "Tehranio Webportal",
    proj2_desc: "Blitzschnelles Portal und Standortverzeichnis mit Server-Side Rendering für optimales SEO und schnelle Ladezeiten.",
    proj3_title: "Atlas Games Admin-Suite",
    proj3_desc: "Match-Control-Panel mit doppelter Benutzeroberfläche und Spieler-Managementsystem für Live-Gaming-Konfigurationen.",
    proj4_title: "Echtzeit VST Stream-Steuerung",
    proj4_desc: "Echtzeit-Telemetrie-Dashboard mit geringer Latenz für Audio-Plugins, WebSocket-Datenübertragung mit 60fps.",
    proj_link_view: "Projekt ansehen",
    proj_link_portal: "Portal ansehen",
    proj_link_dashboard: "Dashboard ansehen",
    proj_link_panel: "Panel ansehen",
    contact_tag: "04 / Kontakt",
    contact_title: "Ein Gespräch beginnen",
    contact_sub: "Haben Sie eine Idee im Kopf?",
    contact_desc: "Lassen Sie uns zusammenarbeiten, um etwas Außergewöhnliches zu schaffen. Schreiben Sie mir und lassen Sie uns Ihre Vision in eine pixelgenaue Realität umsetzen.",
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
    const flags = { en: '🇬🇧', fa: '🇮🇷', de: '🇩🇪' };
    const flag = flags[lang] || '🌐';
    activeBtn.innerHTML = `${flag} <span>${lang.toUpperCase()}</span>`;
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

  // Pre-load default or saved language in background
  if (savedLang) {
    applyLanguage(savedLang);
  } else {
    applyLanguage('en');
  }

  // Always display selection modal on load
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.remove('fade-out');
  }

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
      if (modal) {
        modal.classList.add('fade-out');
        setTimeout(() => {
          modal.style.display = 'none';
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
    en: ['a Frontend Engineer.', 'a UI/UX Designer.', 'a Creative Thinker.'],
    fa: ['یک مهندس فرانت‌اند.', 'یک طراح رابط کاربری.', 'یک متفکر خلاق.'],
    de: ['ein Frontend-Entwickler.', 'ein UI/UX-Designer.', 'ein kreativer Denker.']
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
    
    // Convert to percentage values (-0.5 to 0.5)
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;

    // Calculate rotation angles
    const tiltX = py * -15; // Max tilt angle on X
    const tiltY = px * 15;  // Max tilt angle on Y

    card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Pass coordinate properties for glow background radial effect
    card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--y', `${(y / rect.height) * 100}%`);
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
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

// Client Side Form Validation & Interactive Feedback 
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalText = submitBtn.querySelector('span').textContent;
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending Message...';

    // Simulate submission progress
    setTimeout(() => {
      submitBtn.querySelector('span').textContent = 'Message Sent! ✨';
      form.reset();

      // Reset button state
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
      }, 3000);
    }, 1500);
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
  const menu = document.getElementById('switcher-menu');
  const themeButtons = document.querySelectorAll('.theme-btn');

  if (!toggleBtn || !menu) return;

  // Toggle menu display
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', () => {
    menu.classList.remove('open');
  });

  // Theme selection handler
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      
      // Update active button state
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update body theme classes
      document.body.className = ''; // Reset
      if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
      }

      // Save user preference
      localStorage.setItem('portfolio-theme', theme);
    });
  });

  // Load saved theme preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    const targetBtn = document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`);
    if (targetBtn) {
      targetBtn.click();
    }
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
