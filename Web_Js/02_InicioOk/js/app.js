
/Nodos del DOM */

export function main() {
    const btnNormal = document.querySelector('#btn-normal')


    const btnSuper = document.querySelector('#btn-super')


    const user = document.querySelector('#nombre')

    const outSaludo = document.querySelector('#out-saludo')

    const apel1 = document.querySelector('#out-apel')

    const apel = document.querySelector('#apellido')

    /* Manejadores de eventos  */

    /* btnNormal.onclick = saludar
    btnSuper.onclick = protestar */

    btnNormal.addEventListener('click', saludar)
    btnSuper.addEventListener('click', protestar)
    /* apel.addEventListener('click', saludar) */
    apel.addEventListener('input', escribirContinuo)

    //Otra opción // arkaitzgarro.com --> Listado de eventos

    /*  const nodos = {
        btnNormal : document.querySelector('btn-normal'),
    
        btnSuper : document.querySelector('#btn-super'),    
        
        user : document.querySelector('#nombre').value ,
        
        outSaludo : document.querySelector('#out-saludo')
     } */

    function saludar() {
        outSaludo.textContent = `Hola ${user.value} desde una función`
    }

    function protestar() {
        outSaludo.value = `NO TOCAR`
    }

    function escribirContinuo() {
        apel1.value = `${apel.value}`
    }

}


 /*window.addEventListener('load',main) Hasta que no se cargue la ventana con todo no hacemos lo siguiente. Si hay muchas imágenes esperará hasta la carga de éstas */

document.addEventListener('DOMContentLoaded', main) /* Hace lo mismo, espera a que la página cargue todo el contenido. Las imágenes no estánrenderizadas al 100% pero los nodos ya están listos. En la segundo parámetro le diremos que haga todo. Por eso lo meteremos todo en una función. Es un patrón que se usa bastante para generar el código de las páginas web: haciendo uan función general */














