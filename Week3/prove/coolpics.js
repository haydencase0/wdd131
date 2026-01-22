const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-btn');
const mediaQuery = window.matchMedia('(min-width: 700px)');

toggleButton.addEventListener('click', () =>{
    nav.classList.toggle('active');
});

mediaQuery.addEventListener('change', (event) => {
    console.log(window.innerWidth);
    if (event.matches) {
        nav.classList.remove('active');
    }
});
