
let x=34;//Pos
x=-5;//Neg

if(x>=0){
    console.log('Positivo')
}else{
    console.log('Negativo')
}

//Todos los valores que devuelven falso

let w=false;
w=0;
w='';
w=null;
w=undefined;
if(w) {
/* if(Boolean (w)) { */    //Es lo mismo que lo de arriba, ya que los if siempre son booleanos
    console.log('verdadero')
}else{
    console.log('falso')
}

//Valores que dan true
w=true;
w=23;
w=-25;
w=' ';
w='Pepe';
w=[];
w={};

let q

if(q!=0){ //Se puede hacer con (q) sólo ya que el casting lo hace automáticamente
    console.log('q tiene valor')
}else {
    console.log('q es 0')
}

// cuando es q===x los tres iguales quiere decir que q es exactamente igual que x

let nota;

if(nota!=true){ // Esto es anti JavaScript
    console.log('Has sacado la nota mínimo (0)')
}

if(nota==0){ // Esto es anti JavaScript
    console.log('Has sacado la nota mínimo (0)')
}

if(!nota){ // false+false =true
    console.log('Has sacado la nota mínimo (0)')
}
/* 
let b = !!nota;// es false
let a= boolean(nota); // False */

let edad= 49

//Condiciones sucesivas

if(edad<18){
    console.log('Eres menor de edad',`con ${edad} años`)
    }else if(edad<35){
        console.log('Eres mayor de edad',`con ${edad} años`)
    }else if(edad<50){
        console.log('Eres un poco viejo',`con ${edad} años`)
    }else{
        console.log('Lo siento por ti' ,`con ${edad} años`)
    }

function probarEdad(edad){ //Codificar la edad, para hacerlo en un código finito
    let i=3;
    let mensajes= [
        'Eres menor de edad','Eres mayor de edad','Eres un poco viejo','Lo siento por ti' 
    ]
    if(edad<18){
        i=0;
    }else if(edad<35){
        i=1;
    }else if(edad<50){
        i=2;
    /* }else{ ELSE IMPLÍCITO
        i=3;
         */
    }
    console.log(`Con ${edad} años`,mensajes[i])
}

let age=2

function probarEdadW(age){ //Codificar la edad, para hacerlo en un código finito
   
    let i=3;
    let mensajes= [
        'Eres menor de edad','Eres mayor de edad','Eres un poco viejo','Lo siento por ti' 
    ] 
        switch(age){
        case(age<18):
            i=0;
        case(age<35):
            i=1;
        case(age<50):
            i=2;
    }
    console.log(`Con ${age} años con switch`,mensajes[i])
}

let e=18;
probarEdadW(e); 

//Separación de responsabilidades

function codificaEdad(edad){ //Codificar la edad, para hacerlo en un código finito
    let i=3;

    if(edad<18){
        i=0;
    }else if(edad<35){
        i=1;
    }else if(edad<50){
        i=2;
    }
    return i;
}

function mensajeEdad(edad){ //Codificar la edad, para hacerlo en un código finito
    let i=3;
    let mensajes= [
        'Eres menor de edad','Eres mayor de edad','Eres un poco viejo','Lo siento por ti' 
    ]
    console.log(`Con ${edad} años`,mensajes[codificaEdad(edad)])
}
let h=5;
mensajeEdad(h)




