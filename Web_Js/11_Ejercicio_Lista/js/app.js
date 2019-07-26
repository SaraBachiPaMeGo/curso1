export function app() {

    // Existe un input #in-new
    // Existe un elemento #out-lista
      
    // Nodos
    let inAnimal = document.querySelector('#in-new')
    let outAnimal = document.querySelector('#out-lista')
    let dlgConfirmar = document.querySelector('.confirmacion')
    let aDlgBotones = document.querySelectorAll('.confirmacion button')

    // Asignar manejador de eventos
    inAnimal.addEventListener('change', addAnimal)
    aDlgBotones.forEach(btn => 
        btn.addEventListener('click', onClickDlg))


    // Crear e inicializar el array
    let animales = [] 
    // ¿Existe storage?
    if(localStorage.getItem('zoo')) {
        animales = JSON.parse(localStorage.getItem('zoo'))
        render()
    }
    
    // Elemento a Bornar
    let numBorrar

    // let animales = (localStorage.getItem(animales)) ?
    //        localStorage.getItem(animales) : [] 

    // Funciones
    function addAnimal() {
        animales.push(inAnimal.value)
        inAnimal.value = ''
        save()
        render()
    }

    function save() {
        localStorage.setItem('zoo', JSON.stringify(animales))
    }
    
    function render() {
        let html = '' 
        html += '<ul>'
        animales.forEach((item, i) => html += 
            `<li>
                <span class="texto" data-id="${i}">${item}</span>
                <span class="btn btn-editar" data-id="${i}">️✍️</span>  
                <span class="btn btn-borrar" data-id="${i}">🗑️</span>
            </li>`)
        html += '</ul>'
        outAnimal.innerHTML = html

        let aBtnBorrar = document.querySelectorAll('.btn-borrar')
        let aBtnEditar = document.querySelectorAll('.btn-editar')
        let aTextos = document.querySelectorAll('.texto')

        aBtnBorrar.forEach(btn => btn.addEventListener('click', onBorrar))
        aBtnEditar.forEach(btn => btn.addEventListener('click', onEditar))
        aTextos.forEach(txt => txt.addEventListener('blur', onChange)) // ¿Qué es blur? Evento de perder el foco. Queremos saber si el usuario ha dado al botón de enter. En vez de un botón es un campo único. Change sirve para perder el foco de un objeto que sea un input auténtico (cuando tenemos un elemento html que tiene la propi value y cambia, quiere decir que hay un evento)
    }

    function onBorrar(ev) {
        numBorrar = ev.target.dataset.id
        dlgConfirmar.showModal()
    }

   function onClickDlg (ev) {
       if (ev.target.textContent === 'SI') {
        animales.splice(numBorrar, 1)
        save()
        render()     
       }
       dlgConfirmar.close()
   }   

   function onEditar(ev) {
    console.log(ev.target.dataset.id) // .data sirve para invertarte propiedades para los lementos html. dataset los guarda todos los atributos de tipo data. En este caso el data id se guarda en dataset
    ev.target.previousElementSibling.contentEditable = true // consigues el hermano anterior. Gracias a la relacion de cada nodo no necesitamos apuntar directamente a un nodo
    console.dir(ev.target.parentNode)
   }

   function onChange(ev) {
    ev.target.contentEditable = false
    animales.splice(
        ev.target.dataset.id, 1, ev.target.textContent)
    save()
    render()
   }



}
