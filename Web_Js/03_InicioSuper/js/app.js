
export function app() {
    /* const btnNormal = document.querySelector('#btn-normal')
    const btnSuper = document.querySelector('#btn-super') */
    
    const aBtn = document.querySelectorAll('.btn')/* Me devuelve una lista de nodo. Se puede poner una class por ejemplo o etiqueta. Los nombres e clase no tienen nada que ver con el nombre del id. Te ahorras las dos líneas de arriba*/

    const user = document.querySelector('#nombre')

    const outSaludo = document.querySelector('#out-saludo')

    const apel1 = document.querySelector('#out-apel')

    const apel = document.querySelector('#apellido')

    /* Manejadores de eventos  */

    aBtn.forEach((btn) => { /* Espera que lepasemos una función callback donde los parámetros son cada item de la vuelta. Nos ahorramos las dos líneas de abajo */
        btn.addEventListener('click', onBtnClick)});
    

    /* btnNormal.addEventListener('click', onBtnClick)
    btnSuper.addEventListener('click', onBtnClick) */

    apel.addEventListener('input', escribirContinuo)

    function onBtnClick(event) {
        let mensaje =''
        switch (event.target.id) {
            case 'btn-normal':
                mensaje = `Hola ${user.value} desde una función`
                break;
        
            case 'btn-super':
                mensaje = `NO TOCAR`
                break;
            default: 
                mensaje = 'Esto es otro botón'    
        }
        outSaludo.value = mensaje
    }
    
    function escribirContinuo() {
        apel1.value = `${apel.value}`
    }

}


