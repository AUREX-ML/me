/* Navigation — mobile toggle and active link highlighting */

(function () {
  'use strict';

  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');

  // Mobile menu open/close
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked
    menu.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav__link')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Active link highlighting via IntersectionObserver
  const sections = document.querySelectorAll('main section[id]');

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              const href = link.getAttribute('href');
              if (href === '#' + entry.target.id) {
                link.classList.add('is-active');
              } else {
                link.classList.remove('is-active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
