// MATRIX RAIN
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
const chars = 'アイウエオカキクケコサシスセソ0123456789ABCDEF';
const fontSize = 13;
let drops = [];
function initDrops() { const cols = Math.floor(canvas.width / fontSize); drops = Array(cols).fill(0).map(() => Math.random() * -80); }
initDrops();
window.addEventListener('resize', initDrops);
function drawMatrix() {
  ctx.fillStyle = 'rgba(2,11,26,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + 'px "Share Tech Mono", monospace';
  for (let i = 0; i < drops.length; i++) {
    const ch = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize; const y = drops[i] * fontSize;
    if (drops[i] > 0) {
      ctx.fillStyle = 'rgba(255,255,255,0.88)'; ctx.fillText(ch, x, y);
      ctx.fillStyle = '#00F2FF'; ctx.fillText(chars[Math.floor(Math.random()*chars.length)], x, y - fontSize*2);
      ctx.fillStyle = 'rgba(42,82,190,0.55)'; ctx.fillText(chars[Math.floor(Math.random()*chars.length)], x, y - fontSize*5);
    }
    if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i] += Math.random() * 0.45 + 0.25;
  }
}
setInterval(drawMatrix, 42);

// PARTICLES
function spawnParticle() {
  const p = document.createElement('div'); p.className = 'particle';
  const size = Math.random() * 2.5 + 0.5;
  const colors = ['#00F2FF', '#8B5CF6', '#2A52BE'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  Object.assign(p.style, { width: size+'px', height: size+'px', left: Math.random()*100+'vw', background: color, boxShadow: '0 0 '+(size*4)+'px '+color, animationDuration: (Math.random()*18+12)+'s', animationDelay: (Math.random()*4)+'s' });
  document.body.appendChild(p); setTimeout(() => p.remove(), 35000);
}
setInterval(spawnParticle, 900);

// SCROLL REVEAL
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.08 });
document.querySelectorAll('.tl-content, .project-card, .edu-card, .cert-card, .value-card, .stat-item').forEach((el, i) => {
  el.style.opacity = '0'; el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.55s ease '+(i*0.04)+'s, transform 0.55s ease '+(i*0.04)+'s';
  revealObs.observe(el);
});

// ── HAMBURGER ──
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) closeMenu();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// ── ACTIVE NAV LINK ──
(function () {
  function normalize(str) {
    try { str = decodeURIComponent(str); } catch (e) {}
    return str.replace(/^\//, '').toLowerCase();
  }

  const currentPath = normalize(window.location.pathname.split('/').pop() || 'index.html');

  function markActive(selector) {
    document.querySelectorAll(selector).forEach(function(link) {
      const linkPath = normalize(link.getAttribute('href').split('/').pop());
      const isCurrent =
        linkPath === currentPath ||
        (currentPath === '' && linkPath === 'index.html');

      if (isCurrent) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  markActive('.nav-links a');
  markActive('.mobile-menu a:not(.mobile-cta)');
})();