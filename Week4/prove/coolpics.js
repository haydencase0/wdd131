const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-btn');
const mediaQuery = window.matchMedia('(min-width: 700px)');
const main = document.querySelector('main');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
main.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    if(e.target.tagName != 'IMG'){
        return;
    }
    modalImage.src = e.target.src.replace('-sm.', '-full.');
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

toggleButton.addEventListener('click', () =>{
    nav.classList.toggle('active');
});

mediaQuery.addEventListener('change', (event) => {
    console.log(window.innerWidth);
    if (event.matches) {
        nav.classList.remove('active');
    }
});
