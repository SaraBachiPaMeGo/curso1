
/* let saludo; // Declarar variable => Tipo undefined
saludo ='Hola'; //Inicializar la variable
let user ='Pepe'; */ //Declarar+inicializar
/* let saludo = ''  *///Tipo String nulo. Cuando no sabemos qué valor tendrá saludo la inicializas como nulo
//MALA PRÁCTICA
//curso ='JavaScript' // Inicializar la variable

//Declaración de la función

function sample(){
    let saludo; 
    saludo ='Hola ';
    console.log(saludo);
}

//let saludo='holi'; Son mala idea las variables universales/globales

function saludar(nombre='amigo'){ //Nombre actúa como parámetro
    let saludo='Hola '; 
    console.log(saludo+nombre);
}

//Ejecución o uso de una función

saludar();
saludar('Pepe'); // Te pasa el parámetro
/* console.log(saludo); */

/**
 * 
 * @param {number} 
 * @param {number} 
 * @returns {number}
 */

// Separation of concerns (Separación de responsabilidades o intereses)

/**
 * JSDOC
 * Función mostrar
 * Recibe un texto
 * y lo saca por pantalla
 * 
 * @description Recibe dos parámetros y devuelve la suma de ambos
 * 
 * @param {string | number}
 * @returns {void}
 */

function mostrar(texto=' '){
    console.log(texto);
}
function suma(a ,b) {
    let c= a+b;    
    return c;
}

/* console.log(suma(6,4));
suma(1,2); */

function resta(a ,b) {
    let c= a-b;    
    return c;
}

function division(a,b){
    if (b=undefined | a= undefined) {
        b=0;
        a=0;
    } else {
        b=b;
        a=a;
    }
    return a/b;

}

function multi(a,b){
    /* if (b=undefined | a= undefined) {
        b=0;
        a=0;
    } else {
        b=b;
        a=a;
    } */
    return a*b;

}



suma(12,56);
suma(12,'pepe');

function probar(){
    let x=2;
    let y =3;
    mostrar(suma(x,y)); //Y así con todas las funciones
    mostrar(suma(x));
    mostrar(suma(undefined,y));
    mostrar(suma());
    mostrar(resta(2,2));
    mostrar(division(2,2));
    mostrar(multi(x,y));
    mostrar()
}