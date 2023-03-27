const showDisplay = (e) => {
  try {

    const menu = e.target.querySelector('ul');
    menu.classList.toggle('show');
    menu.classList.toggle('hide');

    e.target.querySelector('img').classList.toggle('flip');
  } catch (error) {
    
  }
}

const menus = document.querySelectorAll('.headerMenu');
menus.forEach(menu => {
  menu.addEventListener('click', showDisplay);
})