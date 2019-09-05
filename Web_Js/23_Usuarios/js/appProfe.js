import { USERS } from './api.js'

export function app() {
    console.log('Cargada app')
    let aUsers = []
    let userActual = {} 
    getDatos()

    // Nodos del DOM
    let aInputs = document.querySelectorAll('input')
    let btnAdd = document.querySelector('#btn-add')
    let tbUsuarios = document.querySelector('#tb-usuarios')
    let aBtnEditar = [] // Toman valor tras renderizar la tabla
    let aBtnBorrar = [] // Toman valor tras renderizar la tabla
    let dlgBorrar = document.querySelector('#dlg-borrar') 
    let dlgEditar = document.querySelector('#dlg-editar') 

    let nodosBorrar = {
        nombre: document.querySelector('#out-nombre-editar'),
        edad: document.querySelector('#out-edad-editar'),
        confirmar: document.querySelector('#btn-borrar'),
        cancelar:document.querySelector('#btn-cancel-borrar')
    }
    let nodosEditar = {
        nombre: document.querySelector('#in-nombre-editar'),
        edad: document.querySelector('#in-edad-editar'),
        confirmar: document.querySelector('#btn-update'),
        cancelar:document.querySelector('#btn-cancel-update')
    }

    // Asociación de manejadores de eventos
    btnAdd.addEventListener('click', onClickAdd)
    nodosBorrar.confirmar.addEventListener('click', onDlgBorrar)
    nodosBorrar.cancelar.addEventListener('click', onDlgBorrar)
    nodosEditar.confirmar.addEventListener('click', onDlgEditar)
    nodosEditar.cancelar.addEventListener('click', onDlgEditar)

    // Funciones manejadoras de eventos
    function onClickAdd() {
        let oUser = {
            nombre: aInputs[0].value,
            edad: aInputs[1].value
        }
        console.log(oUser)
        let cabecera = new Headers({
            'Content-Type':  'application/json' /* Especificamos el tipo de dato que mandamos nosotros (que va a estar en JSON), es el request no el response. Es un objeto estándar de JS y tenemos que ponerle comillas al nombre  */
        })
        fetch(USERS, {
            method: 'POST', /* Debemos mandarle los datos (body) */
            headers: cabecera, 
            body: JSON.stringify(oUser) }) /* Mis datos están en el objeto oUser y estoy recogiendo los datos que me está mandando el user. De esta manera parseamos los datos y los pasa a string */
        .then (response => response.json())
        .then (data => {
            if(data.id > 0) {
                getDatos()
            }
        })
    }

    function openModal(ev) {
        let id
        if (ev.target.tagName == 'TD') {
            id = ev.target.dataset.id
        } else { // ev.target.tagName == 'I'
            id = ev.target.parentElement.dataset.id
        }
        userActual = aUsers.find(item => item.id == id)
        if (ev.target.classList.contains('btn-editar') || 
            ev.target.parentElement.classList.contains('btn-editar') ) {
            setEditarModal()
        } else {
            setBorrarModal()
        }
    }

    function setEditarModal() {
        nodosEditar.nombre.value = userActual.nombre
        nodosEditar.edad.value = userActual.edad
        dlgEditar.showModal()
    }

    function setBorrarModal() {
        nodosBorrar.nombre.value = userActual.nombre
        nodosBorrar.edad.value = userActual.edad
        dlgBorrar.showModal()
    }

    function onDlgBorrar(ev) {
        if(ev.target.id == 'btn-borrar') {
           
            fetch(USERS+'/'+userActual.id,{method:'DELETE'}) /* Si response json, aunque sea un booleano será json.Nos mandará un objeto vacío  */
            .then(response => response.json())
            .then(() => getDatos()) /* Volvemos a hacer la petición para refrescar la página . data es un objeto vacío por lo que ponermos ()*/
        }
        dlgBorrar.close()
    }

    function onDlgEditar(ev) {
        if(ev.target.id == 'btn-update') {
            // Actualizar con put (volver a mandar todos los datos del registro. Los datos que no se modifican hay que volverlos a especificar, ej: nombre:jose y la edad la borra porque no se lo has especificado. Aquello que no modificas le tienes que decir que no quieres modificarlo) / patch() (sabe que si no me mandas un campo no es 0 sino que no lo quieres mmodificar)
            /* Hay que hacer el put de un registro concreto */
            
            let oUser = { /* Guardamos en el objeto usuario los datos metidos en los input. Se actualiza con los datos dados en apntalla */
                nombre: nodosEditar.nombre.value, /* Tenemos que coger los datos de los NUEVOS inputs */
                edad: nodosEditar.userActual.edad
        
            }

            let cabecera = new Headers({
                'Content-Type':  'application/json' /* Especificamos el tipo de dato que mandamos nosotros (que va a estar en JSON), es el request no el response. Es un objeto estándar de JS y tenemos que ponerle comillas al nombre  */
            })
            fetch(USERS+'/'+userActual.id, {
                method: 'PUT', /* Debemos mandarle los datos (body) */
                headers: cabecera, 
                body: JSON.stringify(oUser) }) /* Mis datos están en el objeto oUser y estoy recogiendo los datos que me está mandando el user. De esta manera parseamos los datos y los pasa a string */
            .then (response => response.json())
            .then(data => {
                oUser=data
                getDatos()
            })
        }
        dlgEditar.close()
    }

    // Otras funciones

    function getDatos() {
        fetch(USERS)
        .then( response => response.json())
        .then( data => {
            aUsers = data
            renderData()
        })
    }

    function renderData() {
        let html = `
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
            <th></th>
        </tr>`
        aUsers.forEach(item => html += `
        <tr>
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.edad}</td>
            <td class='boton btn-editar' data-id="${item.id}">
                <i class="fas fa-edit"></i></td>
            <td class='boton btn-borrar' data-id="${item.id}">
                <i class="fas fa-trash-alt"></i></td>
        </tr>` );
        tbUsuarios.innerHTML = html
        actualizarBotones()
    } 

    function actualizarBotones () {
        // Nodos del DOM
        aBtnEditar = document.querySelectorAll('.btn-editar')
        aBtnBorrar = document.querySelectorAll('.btn-borrar')
        // Asociación de manejadores de eventos
        aBtnBorrar.forEach(item => 
            item.addEventListener('click', openModal))
        aBtnEditar.forEach(item => 
                item.addEventListener('click', openModal))
    }

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }
}