

let btn = document.getElementById('menu-btn');
btn.addEventListener('click', toggleMenu);  //serve para acionar a função quando houver um click no botão selecionado, no caso o botão de menu do header

function toggleMenu(){                  //Função utilizada no menu responsivo;
    let nav = document.getElementById('nav');       
    nav.classList.toggle('active'); //adicionar uma classe ao nav;
}


