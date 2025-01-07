document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const closeIcon = document.querySelector('.close-icon');
    const navbarLinks = document.querySelector('.navbar-links');
    const links = document.querySelectorAll('.links li a');

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.add('active');
        toggleButton.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () {
        navbarLinks.classList.remove('active');
        closeIcon.style.display = 'none';
        toggleButton.style.display = 'flex';
    });

    links.forEach(link => {
        link.addEventListener('click', function () {
            navbarLinks.classList.remove('active');
            closeIcon.style.display = 'none';
            toggleButton.style.display = 'flex';
        });
    });
});
