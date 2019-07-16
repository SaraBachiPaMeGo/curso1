/**
 * @description Crear un programa con funciones de desencriptación y encriptación. El algoritmo será simplemente sustituir cada carácter por el correspondiente a la suma de su valor + el de un número fijo usado como clave
 * @param {string} frase
 * @return {string} enigma
 */

function encriptación(frase) {
    let enigma
    for (let i = 0; i < frase/* .charCodeAt(i) */; i++) { /* Te devuelve un carácter. Le pasas una posición (numérico). Qué caracter hay en la posición x. */
        const element = element.charCodeAt(0)
        element += enigma;
        console.log(enigma)
        for (let o = 0; o < enigma/* .charAt(i+3) */; o++) { /* Te devuleve el código del caracter */
            const element = element.charAt(0 + 3);
            element += enigma
            console.log(enigma)
        }
    }
    return enigma
}

function encriptación2(frase) {
    let r
    let array = frase.split('').join(' ')
    array = frase.split('')
    let arrayVacio = []
    let arrayVacio2 = []
    for (let i = 0; i < array.length; i++) {
        const element = element.charCodeAt(i);
        arrayVacio.push(element)
        console.log(arrayVacio)
        for (let o = 0; o < arrayVacio.length; o++) {
            const item = item.charAt(i + 3)
            arrayVacio2.push(element)
            console.log(arrayVacio)
        }
    }
    return arrayVacio
}

let frase = 'Hola'
console.log(encriptación2(frase))

/*
let frase = 'sara'

encriptación(frase)

console.log(encriptación(frase))

encriptación2(frase)

console.log(encriptación2(frase))


 */
