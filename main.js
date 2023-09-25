let openBtn = document.querySelector('.open-menu');
let closeBtn = document.querySelector('.close-menu');
let menu = document.querySelector('.menu-side-bar');

openBtn.addEventListener('click', () => {
  menu.classList.add('show-menu');
  document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  document.body.style.overflow = '';
});
