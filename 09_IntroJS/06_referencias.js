'use strict'

//Valores primitivos (number,boolean,String)

let a =2;
let b=a; // Asignación de valor. No se establece relación entre ellas. Las cajitas que se crean son independientes, b no hace referencia a la cajita de a. B simplemente mete 2 en su caja

console.log('Al crear b',a,b)

b=b*b;
a=a /2

console.log('Valor de b ',b)//4
console.log('Valor de a ',a)//1

b=a;

console.log('Valor de b ',b)//1

//Valores referenciados

let p1={nombre:'pepe', edad:25}
let p2= p1; //La asignación de referencia
p1.nombre= 'Alex';
//Tenemos dos variables y un sólo objeto. Referencia es el nombre del objeto
console.log(p1)// Alex
console.log(p2)

let a1={nombre:'luci', edad:25, saldo:0};
let a2={nombre:'Paca', edad:25, saldo:100};
let a3={nombre:'Paco', edad:25, saldo:584}


function inscribirseJs(alumno, curso='JS') { // Alumno no es un valor, es un objeto. Alumno es una copia de la referencia. La función va a manipular los objetos exteriores a través del parámetro 
    if(alumno){
        alumno.curso='JS'
    }
}

function inscribirMal() {
    a1.curso='JS';

}
//Está acomplada, en otro programa diferente no funcionará. Dependerá de si en el otro ámbito está definida a1 (sería variable global o sea que mala idea)

inscribirseJs(a1); //Paso por referencia (no hay funciones puras como en el caso de x)
console.log(a1)
inscribirseJs(a2,'HTML')

let saldo = 100;

function invertir(x) { //En la caja de memoria de x sólo está el valor de saldo que es 100, por lo que no ve a saldo
    x=x*2;
    return x; //Hay que poner return para que te de la operación
}

saldo = invertir(saldo); //Paso por valor. X coge el valor de saldo pero invertir no toca a saldo

console.log(saldo);

//O sea que saldo es como el nombre que le das a la variable para recordar lo que tiene dentro. Haciendo la función global con un parámetro le puedes meter varios valores

//Ejemplo de una función de inversión 


function invertir(x) { 
    let z = Math.random()
    let rendimiento = (x * z) / 10
    return (x + rendimiento).toFixed(2)
    
}

a1.saldoNew = invertir(a1.saldo);
a2.saldoNew = invertir(a2.saldo);
a3.saldoNew = invertir(a3.saldo);
console.log(a1);
console.log(a2);
console.log(a3);







