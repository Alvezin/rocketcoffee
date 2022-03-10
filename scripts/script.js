

let btn = document.getElementById('menu-btn');
btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    let nav = document.getElementById('nav');
    nav.classList.toggle('active');
}




/*
if (window.matchMedia('(min-width: 855px)').matches) {
    let cabeca = document.getElementsByTagName('header')[0];
    let cafe = document.getElementById('cafe');
    
    cabeca.appendChild(cafe);
} else{
    let principal = document.getElementsById('container__cafe')
    let cafe = document.getElementById('cafe');

    principal.appendChild(cafe);
}
*/