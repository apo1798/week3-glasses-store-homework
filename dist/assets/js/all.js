"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
var mobileNavbar = hamburgerMenu.closest('.mobile-navbar');
[hamburgerMenu].forEach(function (element) {
  element.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
  });
});
var breadcrumb = document.querySelector('.blog-breadcrumbs');

(function () {
  if (!breadcrumb) return;
  var breadcrumbList = breadcrumb.querySelectorAll('li');
  breadcrumbList.forEach(function (list, i) {
    if (i === breadcrumbList.length - 1) return;
    return list.insertAdjacentText('afterend', '/');
  });
})();
//# sourceMappingURL=all.js.map
