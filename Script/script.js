function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const body = document.body;

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    body.classList.remove('blur-active');
  } else {
    menu.classList.add('active');
    body.classList.add('blur-active');
  }
}
