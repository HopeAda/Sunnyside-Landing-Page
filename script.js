const menuIcon= document.getElementById('menu-icon');
const menuItem= document.getElementById('menu-container');
const heading= document.getElementById('heading');
const arrow= document.getElementById('arrow');


menuIcon.addEventListener('click', ()=> {
    menuItem.classList.toggle('show');
    heading.classList.toggle('title');
    arrow.classList.toggle('title');
})