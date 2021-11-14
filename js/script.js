const navMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  navMenu.style.display = 'flex';
  navMenu.style.top = '0';
}

function close(){
  navMenu.style.top = '-100%';
}
