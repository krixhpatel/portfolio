/* =============================================
   KRISH PATEL — PORTFOLIO JAVASCRIPT
   File: script.js
   ============================================= */

// ─────────────────────────────────────────────
// 1. CUSTOM CURSOR
// ─────────────────────────────────────────────
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  // Dot follows instantly
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';

  // Ring follows with a slight lag
  setTimeout(() => {
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top  = e.clientY + 'px';
  }, 80);
});

// Cursor grows on hovering clickable elements
document.querySelectorAll('a, button, .skill-card, .cert-card, .project-card').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform     = 'translate(-50%, -50%) scale(2)';
    cursorRing.style.transform = 'translate(-50%, -50%) scale(1.4)';
    cursorRing.style.borderColor = 'var(--neon-green)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform     = 'translate(-50%, -50%) scale(1)';
    cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorRing.style.borderColor = 'var(--neon-yellow)';
  });
});

// ─────────────────────────────────────────────
// 2. SCROLL REVEAL  (Intersection Observer)
// ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

// Stagger delay for sibling cards
document.querySelectorAll('.fade-up').forEach((el, index) => {
  el.style.transitionDelay = `${(index % 4) * 0.1}s`;
  revealObserver.observe(el);
});

// ─────────────────────────────────────────────
// 3. ACTIVE NAV LINK  (highlight on scroll)
// ─────────────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';
        });
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--neon-green)';
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach((sec) => navObserver.observe(sec));

// ─────────────────────────────────────────────
// 4. NAVBAR  — add shadow on scroll
// ─────────────────────────────────────────────
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(57, 255, 20, 0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ─────────────────────────────────────────────
// 5. TYPING EFFECT  (hero role line)
// ─────────────────────────────────────────────
const roleEl    = document.querySelector('.hero-role');
const roleText  = 'B.Tech CSE · Jaipur National University ';
let   charIndex = 0;

function typeRole() {
  if (charIndex < roleText.length) {
    // Rebuild with typed chars + blinking cursor span
    roleEl.innerHTML =
      roleText.slice(0, charIndex + 1) +
      '<span class="blink">_</span>';
    charIndex++;
    setTimeout(typeRole, 55);
  }
}

// Start typing after a short delay so it feels intentional
window.addEventListener('load', () => {
  setTimeout(typeRole, 800);
});

// ─────────────────────────────────────────────
// 6. SKILL CARDS  — random neon flicker on load
// ─────────────────────────────────────────────
document.querySelectorAll('.skill-card').forEach((card, i) => {
  setTimeout(() => {
    card.style.borderColor = 'rgba(57, 255, 20, 0.5)';
    setTimeout(() => {
      card.style.borderColor = '';
    }, 300);
  }, 1200 + i * 80);
});

// ─────────────────────────────────────────────
// 7. CONSOLE EASTER EGG
// ─────────────────────────────────────────────
console.log(
  '%c👾 KRISH PATEL — PORTFOLIO',
  'color: #39ff14; font-size: 18px; font-weight: bold; font-family: monospace;'
);
console.log(
  '%c  B.Tech CSE · Jaipur National University · 2025–2029',
  'color: #fff01f; font-family: monospace;'
);
console.log(
  '%c  krish.patel2k22@gmail.com | github.com/krixhpatel',
  'color: #aaa; font-family: monospace;'
);