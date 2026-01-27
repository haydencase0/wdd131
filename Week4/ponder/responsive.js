const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-btn');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggleButton.classList.toggle('open');
    //if(toggleButton.classList.toggle('open')){
    //    toggleButton.classList.toggle('open');
    //} else {
    //    toggleButton.classList.toggle('close');
    //}
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
});
