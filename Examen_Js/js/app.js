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

/* 1º- Convertir frase en un array con un split para que nos separe las palabras por comas
    2º- Recorrer el Array y contabilizar las posiciones que hay
    3º- Sumar esas posiciones para que nos de el número total de posiciones (Hay que sumar 1 ya que los arrays empiezan por 0) */

function nLetras(frase) {
    frase2 = frase.split(' ').join('')
    return `FUNCION NLETRAS ---> El número de letras de : ${frase} es de ${frase2.length}`
}

function nPalabras(frase) {
    frase2 = frase.split(' ')

    let element
    for (let i = 0; i < frase2.length + 1; i++) {
        element = [i];
        element += ''
    }
    return `FUNCION NPALABRAS -----> El número de Palabras de '${frase}' es de : ${element}`
}

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

    return `FUNCION LONGITUD -----> La longitud media de ${frase} es de ${frase4.length/frase2.length} `    
}

function vecesLetra() {
    
}

/* 1º- Convertir frase en un array con un split para que nos separe las palabras por comas  
    2º - Deberemos de hacer un if dentro de un for para comprobar */

function frecuenciaLetras(frase) {
    frase2 = frase.split(' ') 
    frase3 = frase.split(' ').join('')
    frase4 = frase3.split('')
    console.log(frase4)
    let letra
    for (let i = 0; i < frase4.length; i++) {
        const element = frase4[i];
        letra = element.charAt([i])
        if (letra === letra) {
            return 'FUNCION FRECUENCIALETRAS --------->' + letra
        }
        
    }

}

function render() {
    console.log()
}


let frase = 'hola Sarai que tal'
console.log('.......................................')

console.log(nLetras(frase))

console.log('.......................................')

console.log(nPalabras(frase))

console.log('.......................................')

console.log(longitud(frase))

console.log('.......................................')

console.log(frecuenciaLetras(frase))







