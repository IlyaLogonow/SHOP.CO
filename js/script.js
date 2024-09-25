/*header-promo*/
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');
    const closeIcon = document.querySelector('.close-icon');
    const headerPromo = document.querySelector('.header-promo');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    closeIcon.addEventListener('click', function() {
        headerPromo.classList.add('hidden');
    });
});
/*header-promo-end*/

 