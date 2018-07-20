const mobileMenu = function () {
    const bodyElement = document.querySelector('body');
    const toggleElement = document.querySelector('.navbar-toggler');

    toggleElement.addEventListener('click', event => {
        bodyElement.classList.toggle('opened');
    });
}

mobileMenu();