

let frase = 'Hola Sara que tal'

let frase2

frase2 = frase.split(' ') /* Calcula las palabras */
frase3 =frase.split(' ').join('') /* Une toda la frase sin espacios */
frase4 = frase3.split('')
/* 
frase3 = frase2 */

console.log(frase2)
console.log(frase3)
console.log(frase4)

console.log('.......................................')

//longitud media
/* 
let frase3 = frase2 */
let suma = frase4.length / frase2.length 

console.log(suma)

/* frase4.lenght --> Divisor */

/*cadena.charAt(posicion)/* Te devuelve un carácter. Le pasas una posición (numérico). Qué caracter hay en la posición x. */

/*cadena.charCodeAt(posicion)/* Te devuleve el código del caracter */

function frecuenciaLetras(frase) {
    frase2 = frase.split(' ') 
    frase3 = frase.split(' ').join('')
    frase4 = frase3.split('')
    let aLetras = []

    for (let i = 0; i < frase.length; i++) {
        console.log(element)
        const element = frase[i];
        if (element === element) {
            aLetras.push(element) /* Otro for y hacer lo mismo  */
            console.log(aLetras)
            for (let o = 0; o < aLetras.length; o++) {
                const item = aLetras[o];
                item+=''
                console.log(item)
            }
        }
    }

}



