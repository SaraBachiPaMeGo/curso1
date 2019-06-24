// Ejemplo de iteración y condición

let limite = 10
let acumulador = 0
let maximo = 100
let contador = 0
for (let i = 0; i < limite; i++) {
    contador = i
    console.log(i)
    if ( acumulador + (i*i) > maximo) {
        break
    }
    acumulador += (i*i)
}
console.log(acumulador, contador)
{
/** JSDoc
 * Saber si un numero es múltiplo de tres,
 * seleccionar en un array los que lo sean, guardandolos en otro array y
 * mostrarlo por pantalla
 *  
 */    
}

/** function isMultiplo 
 * @description devuelve true si un numero m es múltiplo de n
 * @param {number}: m
 * @param {number}: n
 * @returns {boolean} 
 */

function isMultiplo(m = 0, n = 0) {
    if(isNaN(m)|| isNaN(n)){
        throw new Error('Parámetros numéricos')        
    }
    let r = true
    if(m%n) { //  n%m != 0)
        r = false
    }
    return r
 }


/** function extraerMultiplos
 * @description extraer de un array los multiplos de n
 * @param {number}: n
 * @param {array}: aDatos 
 * @returns {array}
 */

function extraerMultiplos(n=0, aDatos=[]) {
    let r = []
    for (let i = 0; i < aDatos.length; i++) {
        const element = aDatos[i];
        if(isMultiplo(element,n)){
           /* r[r.length]=item */ /* Primera casilla vacía, la rellenamos con Element ()l última  */
           r.push(element) /* Añadimos un elemento al array como la parte de arriba */
        }        
    }
    return r
}

/**
 * @description Muestra un Array con los múltiplos de n 
 * @param {number} n 
 * @param {Array} aDatos 
 * @return {void}
 */

function mostrarMultiplos(n,aDatos){
    console.clear();
    console.log(`Los múltiplos de ${n}` )
    console.log(`En el Array de ${aDatos} son:` )
    console.log(extraerMultiplos(n,aDatos));
}

{
/* 
    let aDatos = [1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
    n%3 == 0  
*/    
}

module.exports = {};
module.exports.isMultiplo = isMultiplo
module.exports.extraerMultiplos= extraerMultiplos
module.exports.mostrarMultiplos= mostrarMultiplos

{
    let aDatos = [1,2,3,4,5,6,7,8,9]
    mostrarMultiplos(2,aDatos);
}