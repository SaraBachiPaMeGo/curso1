export function validacion() {
    let userName = document.querySelector('#userName')
    //userName.addEventListener('input', onUserInput)
    userName.addEventListener('change', onUserInput) // blur ve el estado cuando el foco ya no está y hace x

    function onUserInput(ev) {
        let nodo = ev.target
        console.dir(nodo)// igual que userName

       // if (!nodo.validity.valid) //Tienen que ser todas tru en alidity para que pase
       if(!nodo.checkValidity()) { //cjekear a través de la porpiedad (valid) método existente que hace lo msmo, te devuelve el valor de la propiedad validity (es lo mismo que lo de arriba)
            nodo.nextElementSibling.innerHTML =
                 nodo.validationMessage
            nodo.nextElementSibling.hidden = false
        }
    }
}

export function validacionFinal(nodos){
    console.dir(nodos)
    console.log(nodos)

    let r = false 

    nodos.some(nodo => {
        if(!nodo.checkValidity()) { //cjekear a través de la porpiedad (valid) método existente que hace lo msmo, te devuelve el valor de la propiedad validity (es lo mismo que lo de arriba)
        nodo.nextElementSibling.innerHTML =
             nodo.validationMessage
        nodo.nextElementSibling.hidden = false
        r = false
        return true // Para terminar el some. La funcion interna del some se repite simpre hasta que encuentre un true. Tiene el mismo efecto que un break en un switch. Estilo lo que hace chrome
    }else{
        r=true
        nodo.nextElementSibling.hidden = true

    }
        
    });
    return r
}
import { comprobarDNI } from './helper.js'

export function validacion() {

    let userName = document.querySelector('#userName')
    // userName.addEventListener('input', onUserInput)
    userName.addEventListener('blur', onUserInput)
    console.dir(userName)

    function onUserInput(ev) {
        let nodo = ev.target
        console.dir(nodo)
        // if (!nodo.validity.valid) { 
           if( !nodo.checkValidity()) {
            nodo.nextElementSibling.innerHTML = 
                nodo.validationMessage
            nodo.nextElementSibling.hidden = false    
        }
    }
}

export function validacionFinal(nodos) {
    console.dir(nodos)
    let r = false
    nodos.some(nodo => {
        if (nodo.name === 'dni') { // nodo del dni
            nodo.setCustomValidity('')
            if (nodo.value && !comprobarDNI(nodo.value)) {
                nodo.setCustomValidity('Letra del DNI incorrecta') 
            }    
        }
        if( !nodo.checkValidity()) {
            nodo.parentNode.nextElementSibling.innerHTML = 
                nodo.validationMessage
            nodo.parentNode.nextElementSibling.hidden = false
            r = false  
            return true  
        } else {
            r = true
            nodo.parentNode.nextElementSibling.hidden = true
        }
    });

    return r
}