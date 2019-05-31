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

function isNumber(n){
    let r=true;
    if(isNaN(n)||  typeof n=='boolean'|| Array.isArray(n) || n===''|| n===null){ //== COMPARACIÓN
        r=false
    }
    return r;
}

/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */

function isEntero (n){
    return (parseInt(n)===parseFloat(n))
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
    if(!isNumber(x)){
        //Excepción: n no es un número 
       return -1; //Generar un código de error
    }else if (!isEntero(x)){
        //Excepción: n no es un número entero
        return -2;//Generar un código de error
    } else if (x%2) {
        r=false;
    }
    return r;
}

let x =8;

isPar(x);

console.log(isPar(x))

/**
 * 
 * @description Función que muestra si un número es par o impar
 * @param {number}:n
 * @returns void
 * 
 * Porque void debería de estar en la otra función porque no te devuelve nada, en cambio mostrar debería de ser boolean
 */

 function mostrar(x){
    info =[`El número ${x} es impar`, `El número ${x} es par`,`El valor introducido ${x} no es válido`, `El número ${x} no es entero`,]
    let i =Number(isPar(x)) //Como tenemos que asignarle valores a i, tenemos que hacer un casting // Devuelve -2.-1.0.1
    if(i<0){ //Código de error
        i= -i +1; // -1--> 2 // -2 -->3
    }
    console.log(info[i])
} 
 
function probar(){
    let x;
    x=1;
    x=859
    x=0
    x=-5
    x=2
    x='pepe'
    x=-96.5
    x='59'
    mostrar(x);
    //console.log(isEntero(x));
}
probar();

mostrar(x);










