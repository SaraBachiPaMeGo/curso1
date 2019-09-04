
import { url } from './api.js'
export function app() {
    console.log('Cargada app')

    let aUsers = []
    let userActual ={}
    getDatos() /* Para que se ejecute y se vean los datos */

    //Nodos del DOM     

    let tabUsuarios = document.querySelector('#tb-usuarios')
    let aInput = document.querySelectorAll('input')
    let btnAdd = document.querySelector('#btn-add')
    let inNombreDelete = document.querySelector('#in-nombre-edit')
    let inEdadDelete = document.querySelector('#in-edad-edit')
    let outNombreDelete = document.querySelector('#out-nombre-delete')
    let outEdadDelete = document.querySelector('#out-edad-delete')
    let btnBorrar = document.querySelector('#btn-borrar')
    let btnCancel = document.querySelector('#btn-cancel')
    let btnCancelModify = document.querySelector('#btn-cancel-modify')
    let btnModify = document.querySelector('#btn-modify')
    /* AÑADIR LOS DIALOGS */
    let dlgBorrar = document.querySelector('#dlg-borrar')
    let dlgEditar = document.querySelector('#dlg-editar')


    let aBtnEditar = []//Toman valor tras renderizar la tabla
    let aBtnDelete = []

    //Asociación manejadoras de eventos
    btnAdd.addEventListener('click', onClickAdd)
    btnBorrar.addEventListener('click', onDlgBorrar)
    btnCancel.addEventListener('click', onDlgBorrar)
    btnCancelModify.addEventListener('click', onDlgEditar)
    btnModify.addEventListener('click', onDlgEditar)
    

    //Funciones manejadoras de eventos
    function onClickAdd() { /* Le pasas el evento sólo cuando tenemos varios eventos para distinguirlos */
        let oUser = {
            nombre: aInput[0].value, /* Cogemos la posición 0 del objeto (nombre porque el id lo hace el sólo según jsonplaceholder) y lo metemos en el value */
            edad: aInput[1].value /* No se pone entre comillas porque no estamos en un fichero JSON (EN LOS CUALES SI QUE SE PONE). Utilizamos notación json y las propiedades no van entre comillas y los valores entre comillas simple  */
        }
        console.log(oUser)
        let cabecera = new Headers({
            'Content-Type': 'application/json'
        }) /* Recibe un objeto donde definimos el nombre y el valor de la cabecera, son predeterminados no puede ser el que te inventes. Custom header cabecera particular de mi back. Content type se manda para decirle al que recibe los datos que los datos están escritos en x, también la longitud (el stringify, todos los datos en una cadena, es esa longitud)  */
        fetch(url, {
            method: 'POST',
            headers: cabecera,
            body: JSON.stringify(oUser)
        }) /* Objeto de configuración 2º parámetro. Body darle un string con todos los datos que tenemos que enviar. Los datos que queremos enviar  */
            .then(response => response.json())
            .then(data => {
                if (data.id > 0) {
                    getDatos() /* Nos muestra en pantalla la actualización */
                }
            }
            )

        /* Una cabecera es (?) */
    }

    //Otras funciones

    function onDlgBorrar(ev) {
        if(ev.target.id == 'btn-borrar'){

        }
        dlgBorrar.close()
    }

    function onDlgEditar(ev) {
        if(ev.target.id == 'btn-modify'){

        }
        dlgEditar.close()
    }

    function getDatos() {
        fetch(url) /* Por defecto fetch es GET */
            .then(response => response.json()) /* CUIDADO!  EN LAS FUNCIONES ARROW CUANDO PONEMOS {} TENEMOS QUE PONER UN RETURN DENTRO, SI NO LO PONES SE PONE COMO ESTÁ  */
            .then(data => {
                aUsers = data
                renderData()
            })

    }
    function renderData() {
        let html = `<tr>
        <td class="id">ID</td>
        <td class="nombre">Nombre</td> 
        <td class="edad">Edad</td>
        </tr>`

        aUsers.forEach(item => html += `
        <tr>
            <td >${item.id}</td>
            <td >${item.nombre}</td> 
            <td >${item.edad}</td>
            <td class="button delete" data-id="${item.id}"><i class="fas fa-user-minus"></td>
            <td class="button edit" data-id="${item.id}"><i class="fas fa-user-edit"></td>
        </tr>` );
        tabUsuarios.innerHTML = html
        actualizarBtn()
    }

    function actualizarBtn() {
        //Definir los nuevos DOM del html de renderData()
        aBtnEditar = document.querySelectorAll('.edit')
        aBtnDelete = document.querySelectorAll('.delete')

        //Asociación de los eventos
        aBtnEditar.forEach(item => {
            item.addEventListener('click', onClickEdit)
        });
        aBtnDelete.forEach(item => {
            item.addEventListener('click', onClickDelete)
        });
    }

    function onClickEdit(ev) {
        //ev.target.parentElement.dataset.id /* el data set es el OBJETO que tiene la propiedad id que le has puesto en el html*/
        let id
        if (ev.target.tagName == 'TD') { /* Hacemos esto para cuando le demos click no nos salga undefined (acuerdate que era por culpa del i que tiene un before). tagName --> el nombre de la etiqueta de HTML */
            id = ev.target.dataset.id
        } else {
            id = ev.target.parentElement.dataset.id 
        }
        userActual = aUsers.find(item=> item.id == id) /* A través de find, buscamos el id que nos proporciona el evento */
        dlgEditar.showModal()
        console.log('editando',userActual)
    }

    /* EXPLICACIÓN: "En el caso de que la etiqueta HTML sea 'td' coge el id del td, si no es así, coge el id del i, que en realidad es el id del padre (porque i no tiene id)" */

    function onClickDelete(ev) {
        //ev.target.parentElement.dataset.id
        let id
        if (ev.target.tagName == 'TD') { /* Hacemos esto para cuando le demos click no nos salga undefined (acuerdate que era por culpa del i que tiene un before) */
            id = ev.target.dataset.id
        } else {
            id = ev.target.parentElement.dataset.id
        }
        userActual = aUsers.find(item=> item.id == id)
        dlgBorrar.showModal()
        console.log('Borrando,', id) 
        
    }

    /* EXPLICACIÓN: Tenemos dos funciones iguales porque ambas llaman después a un diálogo. Lo apropiado sería hacer una función y mostrar la información en el diálogo en donde se ha hecho el evento (aunque esté dentro de él) */

    /* HACER COMMIT DE LA OTRA FORMA DEL PROFE */

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }

}

/* ev.target.classList.contains() --> Comprobamos si la clase contiene el String x (nombre de la clase en HTML)
PREGUNTA: EL NOMBRE QUE PONES DENTRO DE CONTAINS DEBE SER UN NODO? O DIRECTAMENTE PUEDE VER "classList" TODO EL HTML Y ENCONTRAR EL EV.TARGET  */