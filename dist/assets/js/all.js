"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
var closeMenu = document.querySelector('.close-menu');
var mobileNavbar = hamburgerMenu.closest('.mobile-navbar');
[hamburgerMenu, closeMenu].forEach(function (element) {
  element.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
  });
});
//# sourceMappingURL=all.js.map
