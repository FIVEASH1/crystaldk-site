const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  const isActive = menuButton.classList.toggle('active');
  menu.classList.toggle('hidden', !isActive);
});
