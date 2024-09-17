/*header-promo*/
document.addEventListener('DOMContentLoaded', function() {
    const closeIcon = document.querySelector('.close-icon');
    const headerPromo = document.querySelector('.header-promo');

    closeIcon.addEventListener('click', function() {
        headerPromo.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            headerPromo.style.display = 'none';
        }, 500); // Время должно совпадать с временем перехода в CSS
    });
});
/*header-promo-end*/

 