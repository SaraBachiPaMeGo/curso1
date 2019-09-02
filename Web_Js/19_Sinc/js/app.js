export function app() {

    const store = 'userName' 

    //Nodos del DOM
    let btnBorrar = document.querySelector('#btn-borrar')
    let btnGuardar = document.querySelector('#btn-guardar')
    let inputNombre = document.querySelector('#input-nombre')
    let outputNombre = document.querySelector('#output-nombre')
    //Manejadores
    btnBorrar.addEventListener('click',onClickBorrar)
    btnGuardar.addEventListener('click',onClickGuardar)
    inputNombre.addEventListener('input', onInput)
    /* inputNombre.addEventListener('change',onChange) */

    //Inicialización de valores

    let user = localStorage.getItem(store)
    if(user){
        inputNombre.value = store
        outputNombre.innerHTML = inputNombre.value
    }
    
    //Funciones manejadoras de eventos
    function onClickBorrar(ev) { /* Borramos sólo en la pantalla, no en el localStorage */

        inputNombre.value = ''
        outputNombre.innerHTML = inputNombre.value
        localStorage.removeItem(store) /* Añadientdo esto se borra tambien en local storage */
    }

    /* CHANGE - Cuando hacemos un enter, tabulador ... hace un change. Pierde el foco y se produce el evento change. Es una evento que se produce una vez en un input. Hasta que no termine el usuario de hacer x no hago y 
    INPUT - Cada vez que escribo una letra. A la vez que el ususario hace algo hacer x*/

    function onClickGuardar(ev){
        localStorage.setItem(store, inputNombre.value)/* Sitio para guardar las cosas -> LOCALSTORAGE . Nos inventamos una variable para que sea más corto*/
    }

    function onInput(ev) {
        console.dir(ev.target.value) /* ev.target es igual que inputNombre, porque es quien dispara el evento */
        outputNombre.innerHTML = ev.target.value /* Para que salgan las letras al mismo tiempo que el usuario escribe */
    }
    /* function onChange(ev) {
        console.log('Change ->', ev.target.value)
    } */
}