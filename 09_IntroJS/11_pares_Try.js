/**
 * JSDoc
 * @description Programa que calcula y muestra si un número es par o impar
 * 
 */

/**
 * @description FUNCIÓN QUE COMPRUEBA SI UNA EXPRESIÓN ES CONVERTIBLE A NUMERO O NO rechazando arrays, objects, booleans...
 * @param  {*}n 
 * @returns {boolean}
 */

function isNumber(n) {
    let r = true;
    if (isNaN(n) || typeof n == 'boolean' || Array.isArray(n) || n === '' || n === null) { //== COMPARACIÓN
        r = false
    }
    return r;
}

/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */

function isEntero(n) {
    return (parseInt(n) === parseFloat(n))
}

/**
* JSDoc
* @description Función que calcula si un número es par o impar
*      Puede devolver: -1,-2, true y false
* @param {number}: x
* @returns {*} 
*/

function isPar(x) {
    let r = true;
    if (!isNumber(x)) {
        //Excepción: n no es un número 
        const error= new Error(` ${x} x no es un número `)
        error.numero=0
        throw error; //Antes -1
    } else if (!isEntero(x)) {
        //Excepción: x no es un número entero
        const error= new Error(` ${x} x no es un número entero `)
        error.numero=1
        throw error;
    } else if (x % 2) {
        r = false;
    }
    return r;
}

let x = 8;

isPar(x);

console.log(isPar(x))

/**
 * 
 * @description Función que muestra si un número es par o impar
 * @param {number}:n
 * @returns {boolean}
 * 
 * Porque void debería de estar en la otra función porque no te devuelve nada, en cambio mostrar debería de ser boolean
 */

function mostrar(x) {
    let output = '';
    let info = [`El número ${x} es impar`, `El número ${x} es par`]
    let excepciones= [ `El valor introducido ${x} no es válido`, `El número ${x} no es entero`]
    try {
     i = Number(isPar(x))//Como tenemos que asignarle valores a i, tenemos que hacer un casting // RETURN 0.1 (DEL BOOLEAN) Ó THROW -1 -2
    output = info[i]
    } catch (error) { // THROW -1 -2
        // i = -error + 1; // ESTO LO PONEMOS AQUÍ PARA QUE NOS SALGA EL CÓDIGO DE ERROR DEL ARRAY
        /* output = excepciones[i] */
        output=error.message
    }
    console.log(output)
}
mostrar(2)
    
function probar() {
    let x;
    x = 1;
    x = 859
    x = 0
    x = -5
    x = 2
    x = 'pepe'
    x = -96.5
    x = '59'
    mostrar(x);
    //console.log(isEntero(x));
}
/* probar(); */
/* 
(()=>)() */

// GESTIÓN DE ERRORES

/* const p = 67;
try {
    /* p=76; 
    throw 'Probando error' /* Llamas al error por un nombre 

} catch (error) { /* Cuando llamas al error, en caso de throw le asignas el error producido que en este caso es 'Probando error' a error 
    console.log('Error!')
    if (error.name) { /* Todos los objetos tienen name por defecto, todos los errores son objetos por lo que preguntamos el nombre del error para ver si es un objeto y si realmente lo hay 
        console.log(error.name, error.message)
    }else {
        console.log(error) /* Aquí va a saltar cuando provoques tu el error en el throw de arriba  
    }
    
}

console.log(p)
 */

exports.isPar=isPar;
exports.isNumber =isNumber;
exports.isEntero =isEntero;
exports.mostrar =mostrar;







