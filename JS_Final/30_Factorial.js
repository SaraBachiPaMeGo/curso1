/**
 *@description Hacer factorial de un número
 * @param {number} n
 * @return {number}
 */
function isNumber(n){
    let r=true;
    if(isNaN(n)||  typeof n=='boolean'|| Array.isArray(n) || n===''|| n===null){ //== COMPARACIÓN
        r=false
    }
    return r;
}

 function valorAbs(n) {     
    return Math.abs(Math.trunc(n))       
 }

function factorial(n=0) {
    let r=1;
    if (isNumber(n) && n === valorAbs(n))  {  
        for (let i = 1; i <=  n; i++) {
            r *= i
        } 
    } else {
        throw new Error('Error! el número introducido no es un número')   
    }    
    return r;
}


try {
    console.log(factorial(5)) 
} catch (error) {
    console.log(error.message)
}



module.exports = {}
module.exports.isNumber = isNumber
module.exports.factorial = factorial 

/**
 * 1.- Función booleana que comprueba que un valor puede ser tratado como número.
 * 2.- Función que comprueba que es un número válido para poder calcular un factorial.
 * 3.- Función que calcula el factorial de un número . En caso de valores no válidos generar un error.
 * 4.- Función que muestra (renderiza) los resultados por pantalla.
 * 
 * Al menos para las 3 pimeras, realizar tests unitarios. 
 */

