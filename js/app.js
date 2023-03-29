const showDisplay = (e) => {
  try {

    const menu = e.target.querySelector('ul');
    menu.classList.toggle('show');
    menu.classList.toggle('hide');

    e.target.querySelector('img').classList.toggle('flip');
  } catch (error) {
    
  }
}

const showMobileMenu = (e) => {
  try {
    const closeIcon = './images/icon-close.svg';
    const openIcon = './images/icon-hamburger.svg';
    
    if(e.target.src.split('/')[e.target.src.split('/').length - 1] == 'icon-hamburger.svg') {
      e.target.src = closeIcon;
    }
    else {
      e.target.src = openIcon;
    }
    const menu = document.querySelector('.menu');
    menu.classList.toggle('desktopMenu');
  } catch (error) {
    
  }
}

const menus = document.querySelectorAll('.headerMenu');
menus.forEach(menu => {
  menu.addEventListener('click', showDisplay);
})

const hamBtn = document.querySelector('#hamMenu');
hamBtn.addEventListener('click', showMobileMenu);