/* Una web qyue permita calcular la superficie de un circulo, triangulo y cuadrado */
console.log('Hola')

export class App {

    constructor() {
        this.aBtn = document.querySelectorAll('.btn')
        /* this.out = document.querySelectorAll() */

        this.cuadrado = document.querySelector('#cuadrado')

        this.outCuadrado = document.querySelector('#out-cuadrado')

        this.baseTri = document.querySelector('#baseTri')
        this.altTri = document.querySelector('#altTri')

        this.outTriangulo = document.querySelector('#out-triangulo')

        this.ladoCua = document.querySelector('#ladoCua')
        this.lado2Cua = document.querySelector('#lado2Cua')

        this.outRectangulo = document.querySelector('#out-rectangulo')

        this.rcirculo = document.querySelector('#rcirculo')

        this.outCirculo = document.querySelector('#out-circulo')

        /* Manejadores de eventos */

        this.aBtn.forEach((btn) => {
            btn.addEventListener('click', this.onBtnClick.bind(this))
        });
    }

    onBtnClick(event) {
        switch (event.target.id) {
            case 'btn-cuadrado':
                this.cuadradoMethod() 
                break;
            case 'btn-triangulo':
                this.triangulo() 
                break;
            case 'btn-rectangulo':
                this.rectangulo() 
                break;
            case 'btn-circulo':
                this.circulo() 
                break;
        }
    }

    cuadradoMethod() { 
        this.outCuadrado.value = this.cuadrado.value * this.cuadrado.value
    }

    triangulo() {

        this.outTriangulo.value = this.baseTri.value * this.altTri.value
    }

    rectangulo() {

        this.outRectangulo.value = this.ladoCua.value * this.lado2Cua.value
    }

    circulo() {
        const pi = Math.PI

        this.outCirculo.value = (pi * this.rcirculo.value * this.rcirculo.value).toFixed(3)
    }
}







