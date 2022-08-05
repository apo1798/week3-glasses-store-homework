const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNavbar = hamburgerMenu.closest('.mobile-navbar');

[hamburgerMenu].forEach((element) => {
  element.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active');
  });
});

const breadcrumb = document.querySelector('.blog-breadcrumbs');

(() => {
  if (!breadcrumb) return;
  const breadcrumbList = breadcrumb.querySelectorAll('li');

  breadcrumbList.forEach((list, i) => {
    if (i === breadcrumbList.length - 1) return;
    return list.insertAdjacentText('afterend', '/');
  });
})();
