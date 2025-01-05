// menu
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon')
    const closeIcon = document.querySelector('.close-icon')
    const navMenu = document.querySelector('.nav-menu')
    const links = document.querySelectorAll('.navbar-list li a')

    menuIcon.addEventListener('click', function() {
        navMenu.classList.add('open')
    })

    closeIcon.addEventListener('click', function() {
        navMenu.classList.remove('open')
    })

    links.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('open')
        })
    })
})
