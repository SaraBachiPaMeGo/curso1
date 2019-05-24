let a=4;
console.log(a)

a=5;
console.log(a)

a=6;
console.log(a)

a=243;
console.log(a)

//ES6
const b=6;
/* b=7; ERROR, Una constante siempre es la misma. Tienen el mismo ámbito que los let */

if(true){
    c=7;
}

console.log(b)//6
/* console.log(c) */ //No está definida fuera de un bloque, por lo que va a salir error


//////////////////////////////////////

let aDatos =[71,82,83]; //Se utilizan para invocarlos tambien con []
aDatos[3]=48;//Añades un valor al array ó haciendo lo siguiente
aDatos[aDatos.length]=54; //Le pone en la última posición del array un nuevo número
aDatos.push(67);
aDatos.unshift(01);//Para añadir un número al principio del array 
/* aDatos = 3 *///Te cargas el array, y ys sólo vale 3;ERROR (?)
let persona = {
    nombre:'pepe',
    edad:'48'
}

console.log(aDatos[0]) //Posición entre corchetes
console.log(persona.nombre)




















