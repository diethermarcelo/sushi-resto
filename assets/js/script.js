
// Burger Menu

let mobile_nav_burger_button    = document.querySelector('header .mobile .burger-icon button');
let mobile_nav_close_button     = document.querySelector('header .mobile .nav-container .close')
let mobile_nav_container        = document.querySelector('header .mobile .nav-container');
let body                        = document.querySelector('body');


mobile_nav_close_button.addEventListener('click', () => {
    mobile_nav_container.classList.remove('show')
    mobile_nav_container.classList.add('disappear')
    body.classList.remove('disable-scroll')
})


mobile_nav_burger_button.addEventListener('click', () => {
    mobile_nav_container.classList.add('show')
    mobile_nav_container.classList.remove('disappear')
    body.classList.add('disable-scroll')
})
