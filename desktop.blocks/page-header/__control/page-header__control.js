var content = document.querySelector('.page-header__content');
var control = document.querySelector('.page-header__control');
var nav_header = document.querySelector('.page-header__nav');

control.addEventListener('click', (e) => {
  content.classList.toggle('page-header__content_menuopen')
  control.classList.toggle('page-header__control_menuopen')
  nav_header.classList.toggle('page-header__nav_menuopen');
 });
