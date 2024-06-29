//Script Troca de imagem receita
function slider(anything, recipe_text) {
    document.querySelector('.one').src = anything;
    document.querySelector('.recipe-text').innerHTML = recipe_text;
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};