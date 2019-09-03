export function app() {
    /* AJAX */
    const userURL = 'https://jsonplaceholder.typicode.com/users' /* Creamos una variable para instanciar un objeto XMLhttpRequest (nos lo proporciona el navegador, el window, en node no tenemos este objeto) */
    //Función del evento AJAX  
    const ajax = new XMLHttpRequest() /* La hemos sacado de la función para que realemnte sea una constante AJAX */

    //Nodos del DOM
    let btnBorrar = document.querySelector('#btn-borrar')
    let btnBuscar = document.querySelector('#btn-buscar')
    let inputId = document.querySelector('#input-id')
    let outputNombre = document.querySelector('#output-nombre')

    //Manejadores
    btnBorrar.addEventListener('click', onClickBorrar)
    btnBuscar.addEventListener('click', onClickBuscar)

    //Funciones manejadoras de eventos
    function onClickBorrar(ev) { /* Borramos sólo en la pantalla, no en el localStorage */
        inputId.value = ''
    }

    function onClickBuscar(ev) {

        
        let url = userURL + '/' + inputId.value

        llamadaAjax('GET', url, leerDatos) /* OTRA FORMA DE HACERLO */
    }

    function llamadaAjax(metodo, url, callback) {

        ajax.addEventListener('readystatechange', ()=>{callback(ajax)}) /* Quiero pasar parámetros a mi función manejadora callback. queremos tener acceso a http, de esta manera, se puede pasar parámetros  */
        
        ajax.open(metodo, url) /* Abre la conexión. Pide dos parámetros, 1º método(GET para conseguir la conexión ), 2º String al que te quieres conectar (a dónde te quieres conectar) */
        ajax.send() /* Manda los datos. Ejecuta la petición */
    }

    //Función manejadora donde la llamada al evento está dentro 

    if (ajax.readyState == 4 && ajax.status == 200) { 
        let data = JSON.parse(ajax.responseText)  /* o ajax.responseText.username */
        console.log(ajax.responseText) /* Datos que devuelve el servidor(api) */
        outputNombre.innerHTML = data.username
        /* Al parsear un JSON nos devuelve un objeto */
             /* username es la propiedad del objeto data, que a su vez son los datos que nos devuelve el servidor . TENEMOS QUE PARSEARLO DE JSON PORQUE LOS DATOS NOS VIENEN DADOS EN ESE FORMATO Y NO LO PODEMOS VER, NOS DARÍA UNDENIFED */
        
    }else if(ajax.readyState == 4){ // PONEMOS ESTO PARA QUE MIENTRAS ESTÁEN EL PROCESO NO SALTE 'no vale'
        
        // location.assign('./error.html')/*Te lleva a otra pág */
    }
}