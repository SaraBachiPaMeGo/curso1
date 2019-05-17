
function main () {
    document.querySelector('#btn_Info').addEventListener('click', mostrar); /* No se pone después de mostrar los paréntesis porque no quiero que se ejecute directamente, sino que cuando  se realice se ejecutará. */
    document.querySelector('#btn_cerrar').addEventListener('click', cerrar);
}

function mostrar () {
    document.querySelector('#dialogo').open=true;
}

function cerrar () {
    document.querySelector('#dialogo').open=false;
}

                                                                /* OTRA FORMA DE HACERLO */

function main2 () {

    let modal= document.querySelector('#dialogo');

    dialogPolyfill.registerDialog(modal);
    modal.showModal();

    document.querySelector('#btn_Info').addEventListener('click', onclick); 
    document.querySelector('#btn_cerrar').addEventListener('click', onclick);

}

function onclick () {

     if(!modal.open) {
         modal.open =false
        };
    modal.open=!modal.open;
    if (modal.open){
        modal.showModal();
    }
    document.querySelector('#dialogo').open=false;
}


document.addEventListener("DOMContentLoaded", main);

document.addEventListener("DOMContentLoaded", canvas);

function canvas () {
    let c = document.querySelector('#cnv').getContext('2d'); /* Getcontext permite coger el área del cavas (por eso ponemos 2d EN MINÚSCULA) */
    c.fillRect(20, 20, 50, 75);
}

import dialogPolyfill from '../../node_modules'

