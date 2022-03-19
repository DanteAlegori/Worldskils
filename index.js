const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if(iconMenu) {
iconMenu.addEventListener("click", function(e) {
iconMenu.classList.toggle('_active');
document.body.classList.toggle('_lock');
menuBody.classList.toggle('_active');
});
}
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0) {
menuLinks.forEach(menuLink => {
menuLink.addEventListener("click", onMenuLinkClick);
});

function onMenuLinkClick(e) {
const menuLink = e.target;
if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
const gotoBlock = document.querySelector(menuLink.dataset.goto);
const gatoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

if(iconMenu.classList.contains('_active')) {
iconMenu.classList.remove('_active')
menuBody.classList.remove('_active');
document.body.classList.remove('_lock');
}

window.scrollTo ({
top: gatoBlockValue,
behavior: "smooth"
});
e.preventDefault();
}
}
}
