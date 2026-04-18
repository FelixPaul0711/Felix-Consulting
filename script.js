const menuToggle = document.querySelector('.menu-toggle');
const navWrap = document.querySelector('.nav-wrap');
const navLinks = document.querySelectorAll('.nav a, .nav-actions a');

if (menuToggle && navWrap) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navWrap.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navWrap) {
      navWrap.classList.remove('open');
    }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
