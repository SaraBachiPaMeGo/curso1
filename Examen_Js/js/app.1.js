/**
 * @description Crear un programa capaz de analizar una frase:
        número de palabras
        longitud media de las palabras
        veces cada letra
        frecuencia cada letra
    Incorporar un interface Web de entrada y salida
 * @param {array} frase
 * @returns
 * 
 */

console.log('Hola')

/* 1º- Convertir frase en un array con un split para que nos separe las palabras por comas
    2º- Recorrer el Array y contabilizar las posiciones que hay
    3º- Sumar esas posiciones para que nos de el número total de posiciones (Hay que sumar 1 ya que los arrays empiezan por 0) */

function nLetras(frase) {
    frase2 = frase.split(' ').join('')
    /* let element
    for (let i = 0; i < frase.length; i++) {
        element = [i];
        element += ''
    }
    return `FUNCION NLETRAS -----> El número de Letras de '${frase}' es de : ${element}`  */
    return `El número de letras de : ${frase} es de ${frase2.length}`
}

let frase = 'hola Sarai que tal'
console.log(nLetras(frase))
console.log('.......................................')

function nPalabras(frase) {
    frase2 = frase.split(' ')

    let element
    for (let i = 0; i < frase2.length + 1; i++) {
        element = [i];
        element += ''
    }
    return `FUNCION NPALABRAS -----> El número de Palabras de '${frase}' es de : ${element}`
}

console.log(nPalabras(frase))

/* 1º- Convertir frase en un array con un split para que nos separe las palabras por comas
    2º- Recorrer las palabras e ir sumando sus letras 
    3º- Sumar todas sus longitudes y dividirlo por el número de palabras que hay 
    Habrá que usar un .length, .split, 
    ó
    hacer dos veces split, una para separar las palabras y otro para separar las letras*/

function longitud(frase) {

    frase2 = frase.split(' ') /* Calcula las palabras */
    frase3 = frase.split(' ').join('') /* Une toda la frase sin espacios */
    frase4 = frase3.split('')

    return frase4.length / frase2.length 

    /* frase2 = frase.split(' ').join('')
    letras = frase2.split('')
    let element 
    for (let i = 0; i < letras.length; i++) {
        element = [i];
        element+= ''
    } */
    /* return `${letras} -----> ${element}` */
    /* let element
    let letra
    let totalLetras
    for (let i = 0; i < frase.length; i++) {
        element = frase[i];
    }
    for (let o = 0; o < element.split('').length; o++) {
        letra = [o];
        letra += letra + 1
        totalLetras = letra / element
        return `El número de medio de letras de ${frase} es de : ${totalLetras}`
    } */


}

console.log(longitud(frase))

/* 1º- Convertir frase en un array con un split para que nos separe las palabras por comas  
    2º - Deberemos de hacer un if dentro de un for para comprobar */

function frecuenciaLetras(frase) {
    
}



function render() {
    console.log()
}