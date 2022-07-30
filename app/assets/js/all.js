const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileNavbar = hamburgerMenu.closest('.mobile-navbar');

[hamburgerMenu, closeMenu].forEach((element) => {
  element.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active');
  });
});
