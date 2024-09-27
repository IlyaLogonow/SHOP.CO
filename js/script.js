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

/*MAIN*/
/*shops*/
document.addEventListener('DOMContentLoaded', function() {
    const shopsSection = document.querySelector('.shops');
    const shopsItems = document.querySelectorAll('.shops__item');

    function checkVisibility() {
        const sectionTop = shopsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
            shopsItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 400);
            });
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});
/*shops*/

/*new-arrivals*/
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.new-arrivals__item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        observer.observe(item);
    });
});
/*new-arrivals-end*/
/*MAIN-END*/

 