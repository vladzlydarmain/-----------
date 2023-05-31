const menu = document.querySelector('.panel');
const body = document.querySelector('body');
const div = document.querySelector('.big-div');
const circle = document.querySelector(".circle");



function showMenu(){
    menu.style.display = "inherit";
    div.style.display = "inherit";
}

function closeMenu(){
    menu.style.display = "none";
    div.style.display = "none";
}


circle.addEventListener('click', showMenu);
div.addEventListener('click', closeMenu);

