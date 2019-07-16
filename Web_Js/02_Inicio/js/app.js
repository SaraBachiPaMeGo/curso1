
/* Nodos del DOM */

const btnNormal = document.querySelector('#btn-normal')


const btnSuper = document.querySelector('#btn-super')


const user = document.querySelector('#nombre')

const outSaludo = document.querySelector('#out-saludo')

const apel1 = document.querySelector('#out-apel')

const apel = document.querySelector('#apellido')

/* Manejadores de eventos  */

/* btnNormal.onclick = saludar
btnSuper.onclick = protestar */

btnNormal.addEventListener('click',saludar)
btnSuper.addEventListener('click',protestar)
/* apel.addEventListener('click', saludar) */
apel.addEventListener('input', escribirContinuo)

//Otra opción

/*  const nodos = {
    btnNormal : document.querySelector('btn-normal'),

    btnSuper : document.querySelector('#btn-super'),    
    
    user : document.querySelector('#nombre').value ,
    
    outSaludo : document.querySelector('#out-saludo')
 } */

function saludar() {
    outSaludo.textContent =`Hola ${user.value} desde una función`
}

function protestar() {
    outSaludo.value =`NO TOCAR`
}

function escribirContinuo() {
    apel1.value = `${apel.value}`
}














