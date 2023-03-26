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