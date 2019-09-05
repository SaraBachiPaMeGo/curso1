import { url } from "./api.js";
export function app() {

    let aUsers = []

    //Creamos los nodos del DOM 

    let aBtn = document.querySelectorAll('button')
    let dlgData = document.querySelector('#dlg-sdata')
    /* let btnVer = document.querySelector('#btn-ver')
    let btnOcultar = document.querySelector('#btn-borrar') */

    //Asociación de manejadores
    aBtn.forEach(btn => {
        btn.addEventListener('click', onClick)
    });

    //Funciones manejadoras
    function onClick(ev) {
        if (ev.target.textContent == 'Ver') {
            //Llamada a una función
            onClickVer()
        } else /* if (ev.target.textContent == 'Ocultar') */{ /* Si pongo lo comentado no me sale ningún error, pero no me va */
            //Llamada a una función
            onClickBorrar()
        }
    }

    function onClickVer() {
        let html = `<tr>
        <td class="id">ID</td>
        <td class="nombre">Nombre</td> 
        <td class="edad">Edad</td>
        </tr>`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                aUsers = data /* Metemos todos los datos en el array genérico para objetener los datos */
                getDatos() /* EN EL CASO DE QUE TENGAMOS TODO EN UNA FUNCIÓN, CÓMO HAGO PARA NO TENER QUE LLAMAR A OTRA FUNCIÓN? */
            })
            /* RESPUESTA: En vez de llamar a una función, el código que consigue los datos lo  metemos en donde meteríamos la función */
            .catch(error => {
                error = new Error() /* PASARLE COMO PARÁMETRO ERROR? EN 23\Usuarios CUANDO HACÍAMOS LA FUNCIÓN getDatos() NO LE PASÁBAMOS EN EL PARÁMETRO DATA O aUsers*/
                errorData()
            })

        aUsers.forEach(user => {
            html += `<tr>
        <td >${user.id}</td>
        <td >${user.nombre}</td> 
        <td >${user.edad}</td>
        </tr>`

            dlgData.innerHTML = html /* Para que se vean los datos donde queremos que salga, tendremos que coger el nodo del elemento HTML */
            dlgData.showModal()
        });
    }

    function awaitPrueba() {
        let response = await fetch(url) /* Hay que importar await pero no se cómo */
        let data = await response.json()
        aUsers = data

        /* aUsers = await response.json() Puedes quitarle el intermediario*/

        /* SI NO QUIERO PONER UN IF PARA EL STATUS COMO LE PONGO EL CATCH? TENGO QUE HACER UN TRY-CATCH OBLIGATORIAMENTE?
        EN EL CASO DEL FETCH LLAMÁBAMOS A UNA FUNCIÓN PARA QUE NOS RENDERIZARA LOS DATOS, PERO EN ESTE CASO? */
        /* En los apuntes en 'promesa' se supone que siempre se debe meter dentro de un try - catch */
        /* No ponemos delante la palabra reservada async? */

        /*RESPUESTA: SI QUEREMOS GESTIONAR ERRORES, IMPRENCINDIBLE UTILIZAR EL TRY-CATCH. A la respuesta de renderizar los datos, como tengo una función tocha que está dentro el renderizar, deberia de llamar a esa función o mucho mejor, hacer otra que sólo se dedique a ello */
        /* RESPUESTA: si quiero utilizar el await IMPRENCINDIBLE poner la palabra reservada async. De esta manera nos permitirá utilizar el await */
        /* No tenemos que meter los datos en renderData() porque aUsers es genérico, en cambio el error no es global, por lo que se lo tenemos que pasar en parámetro */
    }

    function onClickBorrar() {
        dlgData.close() /* POR QUÉ NO SE CIERRA SIN MÁS? */
    }

    function getDatos() {
        /* Ya has conseguido los datos en la función tocha a través del fetch() */
    }

    function errorData() {
        let html = `<p>Lo sentimos, la información no está disponible</p>`
        dlgData.innerHTML = html
        dlgData.showModal()
    }
}
/* function renderError(error) {
    pError.innerHTML = 'error de conexión: ' + error --> No entiendo de dónde sale pError
} */