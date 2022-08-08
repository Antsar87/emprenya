const html = document.querySelector('html');

const hamburguer = document.querySelector('.hamburguer');

const servicio = document.querySelector('.servicio');

const dropdown__content = document.querySelector('.dropdown__content');

let clicked = false;

let clickHamburguer = false;

// Sirve para agregarle hidden al html y no se pueda hacer scroll cuando se activa el menu
hamburguer.addEventListener('click', () => {
  html.style.overflow = clickHamburguer ? '' : 'hidden';

  clickHamburguer = !clickHamburguer;
});

// Sirve para activar las categorias del menu
servicio.addEventListener('click', () => {
  dropdown__content.style.display = clicked ? '' : 'grid';

  clicked = !clicked;

  if (window.innerWidth <= 900) {
    dropdown__content.style.display = clicked ? 'none' : 'grid';
  }
});
