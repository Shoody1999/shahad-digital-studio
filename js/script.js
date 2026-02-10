/* =========================
   LANGUAGE TOGGLE
========================= */
function toggleLang() {
  const html = document.documentElement;
  const isEn = html.lang === 'en';

  html.lang = isEn ? 'ar' : 'en';
  html.dir  = isEn ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang.en').forEach(el => el.style.display = isEn ? 'none' : 'block');
  document.querySelectorAll('.lang.ar').forEach(el => el.style.display = isEn ? 'block' : 'none');
}

/* =========================
   THEME TOGGLE
========================= */
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
}

/* =========================
   REVEAL ON SCROLL
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* =========================
   INIT
========================= */
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  toggleLang();
});