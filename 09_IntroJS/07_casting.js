'Use strict'

//Operaciones con number

let x = 2;
let b = 3;
let y = 3;
let z = x*y; //Todos van a ser number

//Operaciones con 

y = '3';
z = x * y ; // Durante la operación hará un casting. A number() le pasamos NUmber(y) o sea 3
x='5';
z=x*y; // Van a salir los dos number

console.log(x,typeof x);
console.log(z,typeof z); // NUmber
console.log(y,typeof y);

console.log(typeof z); // Es un String, el casting se hace DURANTE la operación

let w = x + ' '+ y; // sobrecarga del símbolo +

console.log(w,typeof w);
/* 
"Hola "+"Pepe"; //Concatenación */

//En cuanto hay un número String todo se concatena

x= 23;
y = '20';

w = x +y; //El string tiene preferencia, hace el casting de number a String, por lo que lo concatena
console.log(w,typeof w);

w = w*2; // El número se multiplica por dos
console.log(w,typeof w);

//VARIAS FORMAS DE HACER CASTING O CONTROLAR LOS NÚMEROS Ó STRING

function sumar(a,b){
    if(typeof a!='number' || typeof b!='number' ){
        return 'No se pueden sumar dos String'
    }// Ó = || Y = &&
    return 'La suma de a y b es: ' + a + b;
}

console.log(sumar(1,'5'));

function sumar1(a,b){    
    let r= Number(a) + Number(b)
    return 'La suma de a y b es: ' + r;
}

console.log(sumar(1,'5'));

function isNumber(n){
    let r=true;
    if(isNaN(n)||  typeof n=='boolean'|| Array.isArray(n) ){ //== COMPARACIÓN
        r=false
    }
    return r;
}


function sumar(a,b){    
    let r= parseFloat(a) + parseFloat(b)
    return 'La suma de a y b es: ' + r;
}

console.log(sumar(1,'5'));

function sumar(a,b){    
    let r= +a + +b
    return 'La suma de a y b es: ' + r;
}

console.log(sumar(1,'5'));

function sumar(a,b){    
    if(isNaN(a)|| isNaN(b) ){ //Comprueba si al convertir un valor da NAN o no 
        return 'a ó b da NaN'
    }// Ó = || Y = &&
    let r= +a + +b
    return 'La suma de a y b es: ' + r; 
}

console.log(sumar(1,'Juan'));
console.log(sumar(1,false));//El casting de true a number es 1, el de false es 0

function sumar(a,b){    
    if(isNaN(a)|| isNaN(b)|| typeof a=='boolean'|| typeof b=='boolean' ){ //== COMPARACIÓN
        return 'a ó b da NaN'
    }// Ó = || Y = &&
    let r= +a + +b
    return 'La suma de a y b es: ' + r; 
}

console.log(sumar(1,'Juan'));
console.log(sumar(1,true));
console.log(sumar({},{})); //Da error
console.log(sumar([],[])); //Da 0 en el caso de que estén vacío, si no no se puede sumar

function sumar(a,b){    
    if(isNaN(a)|| isNaN(b)|| typeof a=='boolean'|| typeof b=='boolean'|| typeof a=='object'|| Array.isArray(b)  ){ //== DA IGUAL SI PONEMOS OBJECT O ARRAY SI AMBOS SON OBJETOS, PERO EN EL CASO QUE QUERAMOS VER UN ARRAY SE ESTABLECE LA FUNCIÓN
        return 'a ó b da NaN'
    }
    let r= +a + +b
    return 'La suma de a y b es: ' + r; 
}

console.log(sumar(1,{})); // Da error
console.log(sumar(1,5));
//En el caso de que a ó b sea undefined datá error
console.log(sumar());
console.log(sumar(undefined,undefined));
console.log(sumar(1,undefined)); //ERROR

//Para que los números no salgan undefined, se establece un valor por defecto con a=0 y b=0

function sumar(a=0,b=0){    
    if(isNaN(a)|| isNaN(b)|| typeof a=='boolean'|| typeof b=='boolean'|| typeof a=='object'|| Array.isArray(b)  ){ 
        return 'a ó b da NaN'
    }
    let r= +a + +b
    return 'La suma de a y b es: ' + r; 
}

console.log(sumar(1));


