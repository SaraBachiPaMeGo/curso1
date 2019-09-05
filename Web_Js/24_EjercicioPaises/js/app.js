import { url } from './api.js'
import { aDatos } from './api.js'
import { resultadoFilter } from './api.js'

export function app() {
    console.log('App Cargada')

    let aName = []

    //Nodos del DOM 
    let slcContinent = document.querySelector('#slc-continent')
    let newSlc = document.querySelector('#new-slc') // Haremos el innerHTML con otro select
    let aSlcCont = {
        europa: document.querySelector('#europa'),
        africa: document.querySelector('#africa'),
        asia: document.querySelector('#asia'),
        america: document.querySelector('#america'),
        oceania: document.querySelector('#oceania'),
    }
    let slcCountry = document.querySelector('#slc-country') // innerHTML

    //Asociación de eventos
    slcContinent.addEventListener('change', conection)

    /* slcContinent.addEventListener('click',onClick)
    slcContinent.addEventListener('click',onClick) */ /* SLC-CONTINENT.VALUE --> OPTION */

    //Funciones manejadoras

    function conection(ev) { // Hacemos la conexión con la BD y obtenemos los datos
        let newUrl = url + '/' + ev.target.value /* Hacer una url que va a ser igual a la que tenemos más el value del option */
        /* console.log(ev.target.value) */
        fetch(newUrl)
            .then(response => response.json())
            .then(data => {
                data = data.map(nombre => {
                    return { pepe: nombre.name }
                    
                })
                console.log(data)
            })


    }

    //Otras funciones

    function renderDatos(ev) { //Nos muestra los países       

        let html = ''

        aDatos.forEach(pais => {
            html += `
            <select name="select2" id="slc-country">
            <option value="europa" id="opt-pais">${pais.name}</option>
            `
        });

        newSlc.innerHTML = html
    }

}


