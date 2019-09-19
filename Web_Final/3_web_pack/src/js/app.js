
export class Main {    
    constructor() {
        console.log('Página cargada')
        //Nodos del DOM 
        this.btn = document.querySelector('button')
        this.div = document.querySelector('#saludo')

        //Manejadores de eventos
        this.btn.addEventListener('click', this.onBtnClick.bind(this))
    }
    onBtnClick(ev){
        this.div.innerHTML = 'Hola desde el 3er ejercicio'
        console.log(this.div.value)
    }
}