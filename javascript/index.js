const burgerIcon = document.querySelector('#burger')
const navbarMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})

bulmaCarousel.attach('#carousel', {
    slidesToScroll: 2,
    slidesToShow: 4,
pagination: false,
loop: true,
});