/* DECLARACIÓN DE OBJETOS- */

const obj = new Object();
const persona1 = { /* OBJETOS LITERALES */
    nombre:'pepe', /* Propiedad + valor */
    edad:23
}

const animal = {
    nombre:'caballo', 
    raza: 'árabe'
}

animal.edad=7;

const animal2= ['Rata','escocesa',2] /* Los arrays deberían tener cosas homogéneas, sino deberíamos de hacerlo en un objeto. como este caso */

console.log(animal.nombre)
console.log(animal['nombre']) /* Nos pertmite hacer referencias a una propiedad por su nombre.INTERPOLAR UNA VARIABLE PARA SELECCIONAR LA PROPIEDAD, SOLO SE USAN LOS CORCHETES*/
console.log('...........................................................')

let propiedad = 'nombre';

console.log(animal[propiedad])
console.log('...........................................................')
console.clear();

/* Crear un objeto que se llame "MESES" donde las propiedades son los meses en español y los valores son los nombres correspondientes en otro idioma. Queremos un bucle que diga "enero en ingles se llama January" */

function meses() {  
    let msg ='' 
    const objMeses = {
        enero:'January',
        febrero: 'Febrary',
        marzo: 'March',
        abril: 'April',
        mayo: 'May',
        junio:'june',
        julio:'July',
        agosto:'August'
    }
    for (const key in objMeses) {
        if (objMeses.hasOwnProperty(key)) {
            const element = objMeses[key];   
            msg +=`${key} en inglés es: ${element}\n` /* msg+= ------------ msg = msg + (el texto a concatenar)*/        
        }        
    }    
    return msg
}

console.log(meses())
console.log('...........................................................')

/* function tonta(n) { */ /* Se poner return cuando: devuelves algo */
    /* return n */
/* }

function render(n) {
    console.log(n)
} */

/* let x = tonta(6)  *//* No aparece en la pantalla, te devuelvo un valor */
/* let y = render(6)  *//* Te dará undefined, sirve para pintar por console */

/* render(tonta(5)) */ /* Te pinta a través de la otra función */

function meses1() {    
    const objMeses = {
        enero:'January',
        febrero: 'Febrary',
        marzo: 'March',
        abril: 'April',
        mayo: 'May',
        junio:'june',
        julio:'July',
        agosto:'August'
    }
   for (const key in objMeses) {
       if (objMeses.hasOwnProperty(key)) {
           const element = objMeses[key];
           console.log(`${key} ${element}`) /* No es acceso un dato por lo que puedes ponerlo donde quieras. Es menos eficazporque accede a la consola */
       }
   }
}









