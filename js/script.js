const navbarToggle = document.querySelector('#navbar-toggle');
const navbar = document.querySelector('#navbar');

navbarToggle.addEventListener('click', function () {
  navbar.classList.toggle('show-navbar');
});

// ==================
// Smooth Scrolling
// ==================

const allLinks = document.querySelectorAll('.navbar-link');

allLinks.forEach((link) =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    //scroll to top

    if (href === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
    if (href !== '#' && href.startsWith('#')) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  })
);
