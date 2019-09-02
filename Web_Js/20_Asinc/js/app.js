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

        if(inputId.value<0 || inputId.value>10) { /* Sabemos que hay entre 0 y 10 usuarios */
            return
        }

        let url = userURL + '/' +inputId.value

        
        ajax.addEventListener('readystatechange', leerDatos)
        /*ajax.onreadystatechange() --> Cada vez que el servidor me avisa de un cambio de estado. Pasan por 4 estados diferentes. El último lo que me indica es que ya se ha terminado la conexión, los datos ya han llegado y por parte del servidor ya ha acabado. Podemos igualarlo a una función o con el evento addEventoListener. ES MAS MODERNO COMO LA PARTE DE ARRIBA PORQUE DESASOCIAMOS Y PODEMOS HACER QUE HAGA DOS METODOS O EVENTOS AL MISMO OBJETO */
        ajax.open('GET', url) /* Abre la conexión. Pide dos parámetros, 1º método(GET para conseguir la conexión ), 2º String al que te quieres conectar (a dónde te quieres conectar) */
        ajax.send() /* Manda los datos. Ejecuta la petición */
    }

    //Función manejadora donde la llamada al evento está dentro 

    function leerDatos(ev) {
        if (ajax.readyState == 4 && ajax.status == 200) { /* Verificamos que el proceso ha terminado con el readyState, y con el status vemos si ha ido bien (200) o mal (300 o x, depende de la causa del problema) */
            let data = JSON.parse(ajax.responseText)  /* o ajax.responseText.username */
            console.log(ajax.responseText) /* Datos que devuelve el servidor(api) */
            outputNombre.innerHTML = data.username /* username es la propiedad del objeto data, que a su vez son los datos que nos devuelve el servidor . TENEMOS QUE PARSEARLO DE JSON PORQUE LOS DATOS NOS VIENEN DADOS EN ESE FORMATO Y NO LO PODEMOS VER, NOS DARÍA UNDENIFED */
        }
        

    }















}