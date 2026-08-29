(() => {
  'use strict';

  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll('[data-set-lang]')];
  const atsLinks = [...document.querySelectorAll('[data-ats-link]')];
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const sections = [...document.querySelectorAll('[data-section]')];
  const scaleSteps = [...document.querySelectorAll('.scale-step')];

  const ATS = {
    es: 'assets/Manuel_Quinsacara_CV_ATS_General_ES.pdf',
    en: 'assets/Manuel_Quinsacara_Resume_ATS_General_EN.pdf'
  };

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }

  function setLanguage(lang) {
    const next = lang === 'en' ? 'en' : 'es';
    root.lang = next;
    languageButtons.forEach(btn => {
      const active = btn.dataset.setLang === next;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    atsLinks.forEach(link => {
      link.href = ATS[next];
      if (link.hasAttribute('download')) {
        link.setAttribute('download', next === 'es' ? 'Manuel_Quinsacara_CV_ATS_ES.pdf' : 'Manuel_Quinsacara_Resume_ATS_EN.pdf');
      }
    });
    safeSet('mq-lang', next);
  }

  languageButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.setLang)));
  setLanguage(safeGet('mq-lang') || root.lang || 'es');

  const progress = document.querySelector('.progress');
  function updateProgress() {
    if (!progress) return;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
    progress.style.width = `${ratio * 100}%`;
  }
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = [...document.querySelectorAll('.reveal')];
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(el => revealObserver.observe(el));
  }

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.dataset.section;
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === id));
    }, { threshold: [0.18, 0.35, 0.55], rootMargin: '-20% 0px -55% 0px' });
    sections.forEach(section => sectionObserver.observe(section));
  }

  if ('IntersectionObserver' in window && scaleSteps.length) {
    const scaleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scaleSteps.forEach(step => step.classList.remove('active'));
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.55 });
    scaleSteps.forEach(step => scaleObserver.observe(step));
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (history.replaceState) history.replaceState(null, '', link.getAttribute('href'));
    });
  });
})();
