document.addEventListener('DOMContentLoaded', function () {
  var botaoMenu = document.getElementById('botaoMenu');
  var menu = document.getElementById('menuNavegacao');

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      menu.classList.toggle('aberto');
    });
  }
});