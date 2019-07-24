export function app() {
    console.log('Cargada app') 

    function pruebas () {
            class Lista extends Array {}

        let x = new Lista()
        console.dir(x)
        let nodo = document.querySelector('#nodos')
        console.dir(nodo instanceof Element)
        console.dir(nodo instanceof HTMLElement)
        console.dir(nodo.children)
        console.dir(nodo.children instanceof HTMLCollection)
        console.dir(nodo.children instanceof Array)
        console.dir(nodo.childNodes)
        console.dir(nodo.childNodes instanceof NodeList)
        console.dir(nodo.childNodes instanceof Array)
        let item = nodo.children[1].children[0]
        let item2 = document.querySelector('#saludo')

        console.dir()    
    }

    // Nodos
    let aEnlaces = document.querySelectorAll('.social a')
    let lista = document.querySelector('.social ul')
    let counter = 0

    // Asignación de manejadores
    aEnlaces
        .forEach(enlace => enlace
            .addEventListener('click', onClickEnlace))

    // Funciones

    function onClickEnlace(ev) {
        if (counter < 3) {
            ev.target.parentElement.outerHTML="Ops!! "
            console.log(++counter)         
        } else {
        /*  ev.target.parentElement
            .parentElement.parentElement.outerHTML = 
                    '<p>Opps!!. No existo</p>'    */
            lista.outerHTML = '<p>Opps!!. No existo</p>'
        }
    }
 
{
    document.getElementsByTagName('p')
    document.querySelectorAll('p')

    document.getElementsByName('user')
    document.querySelectorAll('[name="user"]')

    document.getElementsByClassName('clase1')
    document.querySelectorAll('.clase1')

    document.getElementById('id1')
    document.querySelector('#id1')

    /* document.getElementsByTagNameNS */
}

{
    // Creacion de Nodos
    let origen  = document.querySelector('.addNodos div')
    console.dir(origen)

    origen.innerHTML = '<p>Creando desde JS</p>'

    let html = document.createElement('p')
    let content = document.createTextNode('Creando un párrafo desde un nodo nuevo')

    html.appendChild(content)
    origen.appendChild(html)

    let aside = document.createElement('aside')
    aside.innerHTML = '<h2>Más info</h2>'

    aside.innerHTML += '<p>Aquí va la info</p>'

    // origen.innerHTML += aside ----> NO VA, innerHTML espera que le pases un string no un nodo. Cada vez que hacemos += renderizamos otra vez la página pero es para que no se pierda lo anterior. Tenemos que hacer appendChild para que no pase eso en vez de utilizar innerHTML 

    origen.appendChild(aside)
}

}