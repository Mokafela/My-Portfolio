// Client Side Interactive Features Initialization
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTypedText();
  init3DTilt();
  initScrollReveal();
  initProjectFilters();
  initContactForm();
  initNavHighlight();
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
