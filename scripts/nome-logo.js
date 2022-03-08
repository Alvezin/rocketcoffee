
export function text(){
    if (window.matchMedia('(max-width: 855px)')){
    let box = document.getElementById('logo-nome');
    let text = document.createTextNode('RocketSeat');
    box.appendChild(text);
}};