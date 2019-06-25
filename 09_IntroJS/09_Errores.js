
function codificaEdad(edad){ //Codificar la edad, para hacerlo en un código finito
    let i=3;
    if(!isNumber(edad)){
        i=-2;
    } else if(edad<=0){
        i=-1;
    } else if(edad<18){
        i=0;
    }else if(edad<35){
        i=1;
    }else if(edad<50){
        i=2;
    }
    return i;
}

function mensajeEdad(edad){ //Codificar la edad, para hacerlo en un código finito
    let mensajes= [
        'Eres menor de edad','Eres mayor de edad','Eres un poco viejo','Lo siento por ti' 
    ]
    let i = codificaEdad(edad);
    if(i>=0 && i<=3){
        console.log(`Con ${edad} años`,mensajes[i])
    }else{
        console.log(`Edad no válida :${edad}`)
    }    
}

let h=40;
h=0/* 
h=-8;
h=19
h=-84;
h=2;
h=87; */
mensajeEdad(h);
console.log(mensajeEdad(h))

function isNumber(n){
    let r=true;
    if(isNaN(n)||  typeof n=='boolean'|| Array.isArray(n) || n===''|| n===null){ //== COMPARACIÓN
        r=false
    }
    return r;
}

let n ='pepe';
n=''
n=-9
console.log(n,isNumber(n))