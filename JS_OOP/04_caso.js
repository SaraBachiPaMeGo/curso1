`use strict`

/**
 * @description comprobar si la cadena tiene: 
 * solo mayus (1), 
 * solo minus (0), 
 * o una mezcla de ambas(2) los valores de r en un futuro 
 * @param {string} x 
 * @returns {number}
 */

 let cadena = 'Hola'

function comprobarCadena(cadena = '') {
    let r = 2
    if (cadena == cadena.toUpperCase()) {  // solo mayusculas 
        r = 0
    }else if (cadena == cadena.toLowerCase()) { //solo minus
        r = 1
    }
    return r
}

function mostrarComprobacionCadena(cadena = '') {
    let msg =[
        'solo mayúsculas',
        'solo minúsculas',
        'mayus y minus'
    ]
    console.log(msg[comprobarCadena(cadena)])
}

console.log(mostrarComprobacionCadena(cadena))

module.exports = {}
module.exports.comprobarCadena = comprobarCadena
module.exports.mostrarComprobacionCadena =mostrarComprobacionCadena

{
/**
 * @description Función que compruebe si una cadena es una mezcla de mayúsculas y minúsculas 
 * @param {string} texto 
 * @returns {boolean}
 */
/* 
function minMax(texto= '') {

    for (let i = 0; i < texto.length; i++) {
        const element = texto[i];
        letraMayus =element.toLocaleUpperCase();
        letraMinus =element.toLowerCase()
        if(letraMayus && letraMinus){
            return `La cadena tiene mayúsculas : ${letraMayus} y minúsculas ${letraMinus}`
        }else if( element =  letraMayus ){
            return `La cadena tiene mayúsculas `
        }else if (element = letraMinus){
            return `La cadena tiene minúsculas `
        }
    }

}

console.log(minMax('Hola'))
 */
/* function minMax(texto) {
    let texto = '';

    for (let i = 0; i < texto.length; i++) {
        const element = texto[i];
        letraMayus =element.toLocaleUpperCase();
        letraMinus =element.toLowerrCase()

        switch (element) {
            case value:
                
                break;
        
            default:
                break;
        }

        if(element = (letraMayus && letraMinus)){
            return `La cadena tiene mayúsculas : ${letraMayus} y minúsculas ${letraMinus}`
        }else if(element = ){

        }
    }

} */
}
