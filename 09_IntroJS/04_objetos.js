`use strict`

var antes =2;
let a =2;
let b=3;

function prueba() {
    //Variable de ámbito local a la función
    var int =3;//local a la función
    let i=6;//local al bloque (sólo lo que esté entre llaves).Se suele utilizar siempre let. Se tiene más control sobre las variables
    let b=4;

    if(true){
        //varibale local a la función
        var z=4; 
        //Variable de ámbito local al bloque if, 
        let w=7;
        console.log('Es verdad');
        console.log('Desde eñ if', a);//2
        console.log('Desde eñ if', b);//9
        console.log('Desde eñ if', w);//7
    }
    
    console.log('Desde eñ if', a);//2
    console.log('Desde eñ if', b);//9
    /* console.log('Desde eñ if', w)//ERROR */
    console.log('Desde eñ if', z);//4
}

prueba();

console.log('Desde el programa ',a);//2
console.log('Desde el programa ',b);//4

let v=45;

function ejemplo () {
    if(true){
    let v=3;
    console.log(v);
    }
    console.log(v); //No puede ver la v porque let sólo es para la variable en bloque, por lo que cogerá la variable universal: 45
}

function sample (){
    /* console.log(v); da ERROR */
}

ejemplo();
sample();

