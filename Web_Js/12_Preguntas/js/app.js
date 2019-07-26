export function app() {
    console.log('Holi. Todo ok');

    let h2 = document.querySelector('h2')
    h2.id = 'h2-01' //así ponemos atributos a etiquetas que no la tienen
    h2.name = 'h2-01'
    h2.setAttribute('title', 'Utilizar atributos desde Js')//Otra menara de escribirlo, 1er parámetro lo que quieres modificar, 2o el valor que le quieres dar

    console.log(h2.name)
    console.log(h2.getAttribute('title')) //Qué es lo que queremos leer

    //Los elementos booleanos si que tienen el atributo value

    //para añadir una clase no podemos hacer h2.class porque es una palabra reservada. Tenemos que poner classname en JS

    //h2.className+= 'cl4' // es erróneo porque no dja espacio entre cl3 y cl4, por lo que creas y te cargas una

    h2.classList.add('cl4') //De esta manera si que añadimos una clase 

    h2.classList.remove('cl2')//Borramos una clase
    h2.classList.toggle('cl3') //Toggle es como un interrumptor. Si existía previamente se borra, pero si hacemos lo mismo otra vez, vuelve a existir esa clase. DE ESTA MANERA CL3 SE BORRA
    h2.classList.toggle('cl3') // CL3 SE ACTIVA
    //contain es para saber si un objeto tiene una clase o no, es un booleano. 

    let btn = document.querySelector('button')
    let btn2 = document.querySelector('.oculto')
    let out = document.querySelector('output')
    let div = document.querySelector('div')
    let question = document.querySelectorAll('#question')
    let response = document.querySelectorAll('#responde')
    let boton = document.querySelector('.boton')
    let boton2 = document.querySelector('.boton2')
    div.classList.add('ver')
   /*  response.classList.add('oculto') */

    btn.addEventListener('click', onClick)
    btn2.addEventListener('click', onClick)
    question.forEach(ques => ques.addEventListener('click', onClickQues))
    response.forEach(resp => resp.classList.add('oculto'))
    boton.addEventListener('mouseover', change)

    function onClick() {
        //btn.classList.add('ocultar')
        div.classList.toggle('ver')
        btn.classList.toggle('oculto')
        btn2.classList.toggle('oculto')        

        //out.value = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate ut voluptates error quis eius. Commodi incidunt dolore ipsam praesentium, similique accusamus beatae, consequuntur quisquam rem enim repudiandae, itaque atque?'

    }

    function onClickQues(ev) {
            ev.target.nextElementSibling.classList.toggle('oculto')
    }

    function change() {
        boton.classList.toggle('boton')
    }

}