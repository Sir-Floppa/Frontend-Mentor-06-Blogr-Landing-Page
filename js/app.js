const showDisplay = (e) => {
  try {
    const menu = e.target.querySelector('ul');
    menu.classList.toggle('show');
    menu.classList.toggle('hide');
  } catch (error) {
    
  }
}

const menus = document.querySelectorAll('.headerMenu');
menus.forEach(menu => {
  menu.addEventListener('click', showDisplay);
})