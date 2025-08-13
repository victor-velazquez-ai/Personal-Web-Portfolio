document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
  document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id && id.startsWith('#')) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - (navHeight - 1);
          window.scrollTo({ top, behavior:'smooth' });
          history.pushState(null, '', id);
        }
      }
    });
  });
});