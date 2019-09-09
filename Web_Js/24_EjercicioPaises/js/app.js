
import { url } from './api.js'

export function app() {
    console.log('App Cargada')

    let aName = []
    let actualPais = {}
    let newUrl = url + '/'
    let nombrePais = ''

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
        console.log(ev.target.value)
        newUrl = newUrl + ev.target.value /* Hacer una url que va a ser igual a la que tenemos más el value del option */
        fetch(newUrl)
            .then(response => response.json())
            .then(data => {
                aName = data.map(nombre => {
                    return { nombre: nombre.name }
                })
                renderDatos()

            })
    }

    function conection2(ev) {
        console.log(ev.target.value + 'ev.target connection2') //Sale europa

        let url = 'https://restcountries.eu/rest/v2/name/' + ev.target.value + '?fullText=true'//Necesito el nombre del país
        /* newUrl = ev.target.value  + 's=name;capital;flag;currencies;languages' */

        fetch(url)
            .then(response => response.json())
            .then(data => {
                actualPais = data.map(info => {
                    return {
                        capital: info.capital,
                        flag: info.flag,
                        languages: info.languages.map(idioma => {
                            return idioma.name
                        })
                    }
                })
                renderDatos2()
            })
    }

    function newNodo() {
        let slcCountry = document.querySelector('#slc-country') // innerHTML
        slcCountry.addEventListener('change', conection2)
    }

    //Otras funciones

    function renderDatos(ev) { //Nos muestra los países       

        let html = '<select name="select2" id="slc-country">'

        aName.forEach(pais => {
            html += `
            <option value="${pais.nombre}" id="opt-pais">${pais.nombre}</option>
            `
            actualPais = pais

        });

        newSlc.innerHTML = html
        newNodo()
    }

    function renderDatos2(ev) { //Nos muestra los países       

        let html = ' <div>'

        actualPais.forEach(pais => {
            html += `
            <span>CAPITAL</span><i class="fas fa-map-marker-alt"></i> <span class="span1">${pais.capital}</span>            
            <span>IDIOMA </span> <span class="span1">${pais.languages}</span>
            <span>BANDERA </span>
            <div class="div-img">
            <img src="${pais.flag}" alt="Banderas de paises">
            </div>
            </div>
            `
        });
        
        newDiv.innerHTML = html
    }
}


