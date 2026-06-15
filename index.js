// Client Side Interactive Features Initialization
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTypedText();
  init3DTilt();
  initScrollReveal();
  initProjectFilters();
  initContactForm();
  initNavHighlight();
  initThemeSwitcher();
  initSplineTransparency();
  initSplineScrollTrigger();
});

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
function initTypedText() {
  const textEl = document.getElementById('typed-text');
  if (!textEl) return;

  const words = ['a Frontend Engineer.', 'a UI/UX Designer.', 'a Creative Thinker.'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      textEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      textEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

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

// Remove default backgrounds from Spline Viewer's internal shadow canvas
function initSplineTransparency() {
  const viewer = document.querySelector('spline-viewer');
  if (!viewer) return;

  // Set attribute directly
  viewer.setAttribute('background', 'transparent');

  const makeTransparent = () => {
    const shadow = viewer.shadowRoot;
    if (!shadow) return;

    // Target internal container and canvas elements
    const canvas = shadow.querySelector('canvas') || shadow.getElementById('canvas3d');
    const container = shadow.getElementById('container');
    const shadowLogo = shadow.getElementById('logo');

    if (canvas) canvas.style.background = 'transparent';
    if (container) container.style.background = 'transparent';
    if (shadowLogo) shadowLogo.style.opacity = '0.3'; // Subtle watermark transparency
  };

  // Run on load event or immediately if already loaded
  viewer.addEventListener('load', makeTransparent);
  
  // Backup polling in case event triggers early
  let attempts = 0;
  const interval = setInterval(() => {
    viewer.setAttribute('background', 'transparent');
    makeTransparent();
    attempts++;
    if (attempts > 30) clearInterval(interval);
  }, 100);
}

// Map scroll progress to 3D rotation, translation, and opacity of the Spline Viewer
function initSplineScrollTrigger() {
  const wrapper = document.querySelector('.spline-wrapper');
  const viewer = document.querySelector('spline-viewer');
  if (!wrapper || !viewer) return;

  let splineObject = null;

  // Query Spline internal object when loaded
  const find3DObject = () => {
    const spline = viewer._spline || viewer.spline;
    if (spline && typeof spline.getAllObjects === 'function') {
      const objects = spline.getAllObjects();
      // Look for earth, planet, globe, or sphere objects
      splineObject = objects.find(obj => {
        const name = (obj.name || '').toLowerCase();
        return name.includes('earth') || name.includes('planet') || name.includes('globe') || name.includes('sphere');
      });
      // Fallback: any group/mesh object that is not camera or light
      if (!splineObject) {
        splineObject = objects.find(obj => {
          const name = (obj.name || '').toLowerCase();
          return !name.includes('camera') && !name.includes('light') && !name.includes('ambient');
        });
      }
    }
  };

  viewer.addEventListener('load', find3DObject);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    const isMobile = window.innerWidth <= 1024;

    // 1. Rotate the 3D Object directly vs Fallback to container canvas rotation
    if (splineObject) {
      viewer.style.transform = 'none'; // Clear CSS transform on viewer element
      const rotY = scrollY * 0.0025;
      const rotX = scrollY * 0.0006;
      splineObject.rotation.y = rotY;
      splineObject.rotation.x = rotX;
    } else {
      // Fallback: Rotate HTML canvas element
      const rotY = scrollY * 0.15;
      const rotX = scrollY * 0.05;
      viewer.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      find3DObject(); // Attempt to query object again
    }

    // 2. Move Earth down the screen (parallax effect)
    const translateYOffset = scrollY * 0.45;
    wrapper.style.transform = `translateY(${translateYOffset}px)`;

    // 3. Darken/fade Earth on scroll
    if (isMobile) {
      wrapper.style.opacity = Math.max(0.06, 0.22 - (progress * 0.16));
    } else {
      wrapper.style.opacity = Math.max(0.12, 1 - (progress * 0.88));
    }

    // 4. Reduce WebGL canvas brightness
    const brightness = 1 - (progress * 0.7);
    viewer.style.filter = `brightness(${Math.max(0.3, brightness)})`;
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  // Polling to capture 3D object once loaded in the background
  let attempts = 0;
  const pollInterval = setInterval(() => {
    find3DObject();
    handleScroll();
    attempts++;
    if (splineObject || attempts > 50) clearInterval(pollInterval);
  }, 200);

  // Initial call
  handleScroll();
}
