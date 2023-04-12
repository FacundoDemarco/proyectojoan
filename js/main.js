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

const form = document.querySelector('form');
const wrapper = document.querySelector('#formulario-wrapper');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const alerta = document.createElement('div');
  alerta.classList.add('alerta');
  alerta.textContent = 'Gracias por su mensaje';
  
  document.body.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
  
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
