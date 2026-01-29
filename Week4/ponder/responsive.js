const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-btn');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggleButton.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
        nav.classList.remove('active');
        if(toggleButton.classList.contains('open')){
            toggleButton.classList.remove('open');
        }
    }
});
