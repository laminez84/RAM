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
      const learnItem = document.getElementById('learn-item');
      const learnDropdown = document.getElementById('learn-dropdown');
      const navMenu = document.getElementById('nav-menu');
      if (learnItem && learnDropdown && navMenu) {
        const show = () => learnDropdown.classList.remove('hidden');
        const hide = () => learnDropdown.classList.add('hidden');
        [learnItem, learnDropdown].forEach(el => {
          el.addEventListener('mouseenter', show);
          el.addEventListener('mouseleave', hide);
        });
        navMenu.querySelectorAll('> li').forEach(li => {
          if (li !== learnItem) {
            li.addEventListener('mouseenter', show);
          }
        });
        navMenu.addEventListener('mouseleave', hide);
      }
    })
    .catch(err => console.error('Failed to load header:', err));
});