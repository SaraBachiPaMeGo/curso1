`use strict`

/**
 * 
 * @param {number} n 
 * @returns {number}
 */

function factorial(n) {
    let r
    for (let i = n-1; i < 0; i--) {
        const element = n[i];
        r += element*element
    }
    return r
}

console.log(factorial(4));

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function sumaRaices(a=0,b=0 ){
    let r =Math.sqrt(a)+Math.sqrt(b); /*Math.sqrt() => Te devuelve la raiz cuadrada de un número */
    
    return r;
}

/* Asignación de funciones */

let x = {};
let user = { user:'pepe', edad:21}
let restaRiaces =function (a=0,b=0 ){
    return r =Math.sqrt(a)-Math.sqrt(b);
}

console.log(sumaRaices(4,4));

/* Asignación de funciones ARROW */

let productoRaices= (a=0,b=0 ) =>{ /* Poner => Es lo mismo que poner function, se pone en ecma6 script SOLAMENTE. Es una lamda. Cuando solo tienen una linea como es este caso puedo ahorrarme las llaves y el return como es el caso de abajo */
    return r =Math.sqrt(a)*Math.sqrt(b);
}

let productoRaices= (a=0,b=0 ) => r =Math.sqrt(a)*Math.sqrt(b);


let mediaRaiz= (a=0) => Math.sqrt(a)/2;  /* Cuano solo hay un parámetro se pueden quitar los paréntesis */

let mediaRaiz= a => Math.sqrt(a)/2; /* Se llaman lamdas */