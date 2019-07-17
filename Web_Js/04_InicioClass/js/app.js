
export class App {

    constructor() {
        console.log('Todo Ok')

        // Nodos del DOM 
        this.aBtn = document.querySelectorAll('.btn')

        this.user = document.querySelector('#nombre')

        this.outSaludo = document.querySelector('#out-saludo')

        this.apel1 = document.querySelector('#out-apel')

        this.apel = document.querySelector('#apellido')

        /* Manejadores de eventos  */

        this.aBtn.forEach((btn) => {
            btn.addEventListener('click', this.onBtnClick)
        });

        this.apel.addEventListener('input', this.escribirContinuo)
    }

    onBtnClick(event) {
        let mensaje = ''
        switch (event.target.id) {
            case 'btn-normal':
                mensaje = `Hola ${user.value} desde una función`
                break;

            case 'btn-super':
                mensaje = `NO TOCAR`
                break;
            default:
                mensaje = 'Esto es otro botón'
        }
        this.outSaludo.value = mensaje
    }

    escribirContinuo() {
        this.apel1.value = `${this.apel.value}`
    }

}


