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
    function onClickBorrar(ev) {
        inputId.value = ''
    }

    function onClickBuscar(ev) {
        let url = userURL + '/' + inputId.value
        fetch(url)/* Devuelve una promesa (un objeto que tiene la capacidad de devolver valores pero en un futuro, pueden ser distintos según el transcurso del proceso). Se puede responder con tehn(cuando todo haya ido bien ) o catch (cuando no se cumple la promesa) */
            .then(response => {
                console.log(response) /*  response => response.json() */
                if (response.status == 200) {
                    return response.json()/* Blob es un fichero de imágenes. Primero te mandan los datos sin procesar (normalmente el json).Todos devuelven una promesa. Nos devuelve una promesa para poder hacer otro then y pasarles los datos.  */
                }
                throw (new Error(response.status)) /* Generamos un error porque la promesa no te da ningún error, ya que te responde. Ponemos el response.status dentro del new Error para ver el error que ha dado esa propiedad. De esta manera salta directamente al catch */
            })
            .then((data) => { /* fetch te devuelve un body (un chorro de datos que se tienen que procesar a apartir de un función y no sotros le tenemos que decir con qué función) */
                outputNombre.innerHTML = data.username
                console.log(data)
            }) /* También puedes poner directamente leerDatos() en vez de hacer una función anónima (metes todo el código de leerDatos) */
            .catch((error) => {
                outputNombre.innerHTML = 'Error de conexión ' + error
            })
    }

    //ES2017 

    async function onClickBuscar2017(ev) {
        let url = userURL + '/' + inputId.value
        try {
            let response = await fetch(url) /* Cuando se haga la promesa, lo que te devuelva lo guardas en response */
            if (response.status == 200) {
               let data = await response.json()
                outputNombre.innerHTML = data.username
            } else {
                throw (new Error(response.status)) /* Generamos un error porque la promesa no te da ningún error, ya que te responde. Ponemos el response.status dentro del new Error para ver el error que ha dado esa propiedad. De esta manera salta directamente al catch */
            }
        } catch (error) {
            outputNombre.innerHTML = 'Error de conexión ' + error
        }
    }
}