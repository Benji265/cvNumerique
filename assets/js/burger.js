const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navBar');
    const navLinks = document.querySelectorAll('.navBar li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    });

}

navSlide();