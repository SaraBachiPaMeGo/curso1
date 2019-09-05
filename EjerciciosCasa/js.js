/**
 * @description 1. Crea una función que devuelva el número PI con dos decimales. Utiliza la letiable PI que ya existe en javascript
 * @return {number} n
 */

function nPi() {
    return Math.PI.toFixed(2)
}

console.log(nPi())

/**
 * @description 2. Crea una función que reciba un parámetro, un dni, y devuelva la letra del mismo. Si el dni pasado tiene algún error devolverá “”.
 * @return {number} n
 */

function letra(dni) {
    const arrayChar = 'TRWAGMYFPDXBNJZSQVHLCKE'
    let char = dni % 23
    let letra = ''
    if (dni > 0 && dni <= 99999999) {
        letra = arrayChar.charAt(char)
        return letra
    } else {
        console.log('dni no válido')
    }
}

console.log(letra(51133045))

/**
 * @description 3. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.
 * @param {number} precio
 * @param {number} iva
 * @return {number} n
 */

function fac(precio, iva) {
    /*  if(iva = 0){ */
    iva = iva || 21 /* No sé que significa esto, pero si no lo pongo no me lo hace. No entiendo en qué momento el sistema entiende que cuando es 0, iva tiene que ser 21, si no le he especificado que cuando sea 0 pase eso. Quizas porque cuando es undefined o 0 es 21. Da bien  */
    return (precio + precio * iva / 100)
    /* }else{ */
    /* return (precio+precio*iva/100) */
    /* } */
}

/* INTERESANTE --> Si los valores no son booleanos, JavaScript convierte la conversación implícita en booleana . Esto significa que si el valor es Falsey (por ejemplo 0, "", null, undefined(véase también Todos los valores Falsey en JavaScript )), que será tratado como false; de lo contrario se trata como true.

Si xes verdad, xse le asigna x, por lo que en realidad no sucede nada; de lo contrario yestá asignado a x. Se usa comúnmente para definir parámetros predeterminados en las funciones. Sin embargo, a menudo se considera una mala práctica de programación , ya que evita que pase un valor falsey (que no es necesariamente undefinedo null) como parámetro. 
*/

console.log('Precio con iva')
console.log(fac(2, 7))
console.log('Precio SIN iva')
console.log(fac(2))

/* Copiado de internet */

function masIva(precio, iva) {
    iva = iva || 21
    let coniva = (precio + precio * iva / 100);
    return coniva;
}
function r(precio, iva) {
    if (iva > 0) {
        let resultado = masIva(precio, iva);
        return resultado
    }
    else {
        let resultado = masIva(precio);
        return resultado
    }
}

console.log(masIva(2, 7))
console.log(r(2, 0))

/**
 * @description 4. Crea una función que reciba un texto y lo devuelva al revés
 * @param {String} texto
 * @param {String} reves
 */

function txt(texto) {
    /* txtReves = texto.split()
    txtReves.reverse()
    return txtReves.join('') */
    return texto.split('').reverse().join('')
}

console.log(txt('Sara'))

/**
* @description 5. Crea una función que genere número entero aleatorio entre min y max, que serán pasados como parámetros. Por defecto min = 1 y max = 100
* @param {number} x
* @param {number} y
*/

function ran(x, y) {
    return `${x} -- ${y}` /* He tenido que ponerle las comillas francesas porque me salía un número larguísimo. Deduzco que es porque los números se han juntado */
}

console.log(ran(Math.random() * 10, Math.random() * 10))

/**
  * @description 6. Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y luego muestralos por pantalla
  * @return {array} nArray
  */

function randoM() {
    return Math.random
}

/* tengo que hacer, un for para que haga 100 números, guardarlos en un array con un push. Ver si existe con un if. ¿Qué hacer cuando existan?. Crear variable "existe" que sea un booleano (aunque no tendriamos que hacer otra variable, simplemente lo igualamos a true o false y fuera) */

function arr() {
    let nArray = []
    let existe = false
    for (let i = 0; i = 100; i++) {
        const element = randoM();
        nArray.push(element)
        for (let i = 0; i < nArray.length; i++) {
            const item = nArray[i];
            if (item == existe) {
                arr()
            } else {
                return nArray
            }
        }/* 

        if (element = element) {
            element = Math.random
        }

        console.log(nArray) */
    }
}

console.log(arr())