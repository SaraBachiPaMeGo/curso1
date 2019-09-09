import { url } from './api.js'
import { aName } from './api.js'
import { resultado } from './api.js'

export function app() {
    console.log('App Cargada')
    let aName = [] /* CUANDO LA VARIABLE ESTÁ EN LA API ME DA UN ERROR PORQUE LA PONE COMO CONST */
    let aPais = []
    let newUrl = ''
    let actualPais =''

    //Nodos del DOM 
    let slcContinent = document.querySelector('#slc-continent')
    let newSlc = document.querySelector('#new-slc') // Haremos el innerHTML con otro select
    let newDiv = document.querySelector('#new-div')
    let aSlcCont = {
        europa: document.querySelector('#europa'),
        africa: document.querySelector('#africa'),
        asia: document.querySelector('#asia'),
        america: document.querySelector('#america'),
        oceania: document.querySelector('#oceania'),
    }
    
    //Asociación de eventos
    slcContinent.addEventListener('change', conection)
    
    //Funciones manejadoras

    function conection(ev) { // Hacemos la conexión con la BD y obtenemos los datos
        newUrl = url + '/' + ev.target.value /* Hacer una url que va a ser igual a la que tenemos más el value del option */
        /* console.log(ev.target.value) */
        fetch(newUrl)
            .then(response => response.json())
            .then(data => {
                aName = data.map(nombre => {
                    return {
                        nombre: nombre.name
                    }
                })
                renderDatos()
               // console.log(aName) //Array de objetos 
            })
    }

    function conection2(ev) { 
        newUrl = '/' + ev.target.value 
        console.log(ev.target.value) 
        fetch(newUrl)
            .then(response => response.json())
            .then(data => {
                actualPais = data.map(info => {
                    return {
                        bandera: info.flag,
                        capital: info.capital,
                        idioma: info.languages[3].nativeName//new
                    }
                })
                renderDatos2()
                console.log(actualPais) 
            })
    }

    function newNodos() {
        let slcCountry = document.querySelector('#slc-country') // innerHTML
        slcCountry.addEventListener('change', conection2)
    }

    //Otras funciones

    function renderDatos(ev) { //Nos muestra los países

        let html = `<select name="select2" id="slc-country">`

        aName.forEach(pais => {
            html += `
            <option value="lang" id="opt-pais">${pais.nombre}</option>
            `
            actualPais = pais.nombre
            console.log(pais)/* ${ev.target.value}<option value="europa" id="opt-pais">${aName}</option> */
        });

        newSlc.innerHTML = html
        newNodos()
    }

    function renderDatos2(ev) { //Nos muestra los países  
        let html = ``

        actualPais.forEach(pais => {
            html += `
            <div value="opt-pais" id="opt-pais">${pais.bandera}</div>
            <div value="opt-pais" id="opt-pais">${pais.capital}</div>
            <div value="opt-pais" id="opt-pais">${pais.bandera}</div>
            `
            resultado = pais
            console.log(resultado)/* ${ev.target.value}<option value="europa" id="opt-pais">${aName}</option> */
        });

        newDiv.innerHTML = html
    }

}


