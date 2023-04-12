const openModal = document.querySelector('.btn');
const modal = document.querySelector('.form');
const closeModal = document.querySelector('.btn_close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('form--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('form--show');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});