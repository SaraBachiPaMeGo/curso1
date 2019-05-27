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

let aDatos =[71,82,83]; //Se utilizan para invocarlos también con []
aDatos[3]=48;//Añades un valor al array ó haciendo lo siguiente
aDatos[aDatos.length]=54; //Le pone en la última posición del array un nuevo número
aDatos.push(67);
aDatos.unshift(01);//Para añadir un número al principio del array 
/* aDatos = 3 *///Te cargas el array, y ys sólo vale 3;ERROR cambias radicalmente el valor al igual que si pones un array vacío. Puede crecer pero no generar de nuevo el array del mismo valor
let persona = {
    nombre:'pepe',
    edad:'48'
}

console.log(aDatos[0]) //Posición entre corchetes
console.log(persona.nombre)

//En la memoria del orndeandor, cuando creas una variable le pones el nombre a una cajita en la memoria y dentro metes su valor, en cmabio si la quieres cambiar la caja se borra y se vuelve a crear otra para guardar el contenido de la variable nueva. Con los objetos es distinto, la caja hace referencia a otra parte de memoria que hace que no se pierda toda la información que se ha creado dentro del objeto


















