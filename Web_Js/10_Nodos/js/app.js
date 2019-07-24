export function app() {
    console.log('Holi. Todo ok');
    /* 
        class Lista extends Array{} /* Clase que desciende del objeto array */

    /* let x = new Lista() Te da un objeto lista */

    /* let nodo = document.querySelector('#nodos')
 
 
     console.dir(nodo)
     console.dir(typeof nodo)
     console.dir(nodo instanceof Element)
     console.dir(nodo instanceof HTMLElement)
     console.dir(nodo.children instanceof HTMLCollection)
     console.dir(nodo.childNodes instanceof NodeList) */

    let a = document.querySelector('a')
    let inst = document.querySelector('#inst')
    let face = document.querySelector('#face')
    let twi = document.querySelector('#twi')
    let last = document.querySelector('#last')

    /* Manejador */

    a.addEventListener('click', change)
    inst.addEventListener('click', change)
    face.addEventListener('click', change)
    twi.addEventListener('click', change)
    last.addEventListener('click', change)

    function change(ev) {
        switch (ev.target.id) {
            case 'inst':
                inst.textContent = 'Lo sentimos no tenemos Instagram'
                break;
            case 'face':
                face.textContent = 'Lo sentimos no tenemos Facebook'
                break;
            case 'twi':
                twi.textContent = 'Lo sentimos no tenemos Twitter'
                break;
            case 'last':
                last.textContent = 'Nunca vas a contactar'
                break;
        }

    }
}