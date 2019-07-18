/* Una web qyue permita calcular la superficie de un circulo, triangulo y cuadrado */
console.log('Hola')

export class App {

    constructor() {
        this.aBtn = document.querySelector('.btn')
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
                this.outCuadrado
                break;
            case 'btn-triangulo':
                this.outTriangulo
                break;
            case 'btn-rectangulo':
                this.outRectangulo 
                break;
            case 'btn-circulo':
                this.outCirculo
                break;
            default:
                break;
        }
    }

    cuadrado(lado) {
        this.lado = lado

        this.outCuadrado = this.lado * this.lado
    }

    triangulo(base, altura) {
        this.baseTri = base
        this.altTri = altura

        this.outTriangulo = this.baseTri * this.altTri
    }

    rectangulo(lado, lado2) {
        this.ladoCua = lado
        this.lado2Cua = lado2

        this.outRectangulo = this.ladoCua * this.lado2Cua
    }

    circulo(radio) {
        const pi = Math.PI
        this.rcirculo = radio

        this.outCirculo = pi * this.rcirculo * this.rcirculo
    }
}







