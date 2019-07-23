import { getCookie } from "./cookies.js.js.js";

export function app() {
    console.log('Cargada app')

    // Nodos
    let aBotones = document.querySelectorAll('button')
    let output = document.querySelector('output')

    // Manejadores 
    aBotones.forEach(btn => {
        btn.addEventListener('click', onClick)
    });

    let numVisitas = getCookie('visitas');
    console.log(numVisitas)
    if (numVisitas !== '') {
        localStorage.setItem("visitas", ++numVisitas, 5);
    }

    // Funciones manejadoras

    function onClick(ev) {
        switch (ev.target.textContent) {
            case 'Iniciar':
                localStorage.setItem('visitas', 0, 5)
                location.reload()
                break;
            case 'Eliminar':
                localStorage.removeItem('visitas', 0, -2)
                location.reload()
                break;
            case 'Mostrar':
                output.value = numVisitas
                break;
            case 'Recargar':
                location.reload()
                break;
        }
    }
}