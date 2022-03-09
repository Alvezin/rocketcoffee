
function toggleMenu(){
    let nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

let btn = document.getElementById('menu-btn');
btn.addEventListener('click', toggleMenu)
