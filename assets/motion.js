/* Native motion: progressively enhanced; content stays visible without JavaScript. */
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set();
  const animate = (node, frames, options) => {
    if (preference.matches || !node.animate) return;
    const animation = node.animate(frames, { duration: 480, easing: 'cubic-bezier(.22,.7,.25,1)', ...options });
    animations.add(animation);
    animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
  };
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  const nav = document.querySelector('nav');
  let pending = false;
  function updateScroll() {
    const distance = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0})`;
    nav?.classList.toggle('nav-scrolled', scrollY > 80);
    pending = false;
  }
  addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  addEventListener('resize', updateScroll, { passive: true });
  updateScroll();
  const hero = document.querySelector('.hero');
  if (hero && hero.getBoundingClientRect().top < innerHeight && !location.hash) {
    ['.hero-eyebrow', '.hero-title', '.hero-lead-hook', '.hero-lead-sub', '.hero-takeaways', '.hero-actions', '.hero-video-card'].forEach((selector, index) => {
      const node = hero.querySelector(selector);
      if (node) animate(node, [{ opacity: .3, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }], { delay: Math.min(index * 45, 230), duration: 500 });
    });
  }
  if ('IntersectionObserver' in window) {
    const selector = '.section-header, .compare-card, .persona-card, .mentor-grand-card, .curriculum-card, .quote-box, .books-bar, .proof-card, .form-box';
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const siblings = [...node.parentElement.children];
        const delay = Math.min(siblings.indexOf(node) * 65, 180);
        animate(node, [{ opacity: .35, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }], { delay });
        reveal.unobserve(node);
      });
    }, { threshold: .08 });
    document.querySelectorAll(selector).forEach(node => reveal.observe(node));
    const links = [...document.querySelectorAll('.nav-menu a')];
    const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const activeSection = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('nav-current', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => activeSection.observe(section));
  }
  preference.addEventListener('change', () => {
    if (preference.matches) animations.forEach(animation => animation.cancel());
  });
})();
