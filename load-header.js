document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('site-header');
  if (!placeholder) return;
  fetch('/header.html')
    .then(r => r.text())
    .then(html => {
      placeholder.innerHTML = html;
      const toggle = document.getElementById('nav-toggle');
      const mobileMenu = document.getElementById('nav-menu-mobile');
      if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
      }
    })
    .catch(err => console.error('Failed to load header:', err));
});
