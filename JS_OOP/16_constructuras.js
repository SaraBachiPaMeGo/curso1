//Objeto JSON o literal

const saludo= 'Hola amigo';

/* console.log('Hola amigo') Codear el códgio, escribir los literales en el envío de parámetros. MALA PRÁCTICA */

const p1= {
    nombre:'Lola',
    edad: 25,
    altura : 178,
    pais: 'España',

}

console.log(p1)

function Persona(nombre,edad,altura,pais) { /* Función constructura, MAYÚSCULA. Va a hacer un new Persona(). */    
    this.nombre = nombre /* El parámetro se ha convertido en una propiedad de un objeto */
    this.edad = edad
    this.altura= altura
    this.pais= pais
    this.profesion=''
}

Object.freeze() /* Una vez instanciado no puedes entrar en el objeto */

const p2 = new Persona('Loli',40,164,'Portugal');
const p3= new Persona('Lolita',24,154,'Italia');

p2.serContratado= 'Profe'
p3.profesion='Médico'

console.log(p2)
console.log(p3)
/* delete p2.cerebro Se pueden eliminar propiedades
p2.ia = true */
/* p2.saludar(p3.nombre)
p3.saludar(p2.nombre) */
/* Los prootipos me sugieren que las personas tienen que tener esas propiedad, en cmabio las clases te obligan a que tengan esas propiedades. */

/* El prototipo de la función:  se establece una relación permanente entre el objeto y la función que lo crea */

const x = []

/* Esta´n todos los métodos: tiene una conexión con el prototipo. El prototipo es todo aquello general que es estático, como cerebro, todos van a tener cerebro, el nombre, la edad y demás son variantes, pero se pueden cambiar:*/
Persona.prototype.cerebro= true
p2.cerebro = false /* No hemos cambiado todos los cerebros a todo el mundo, sólo a p2 */
/* Array.prototype. */

Persona.prototype.saludar =function (otro='coleguita') { /* Hemos quitado el peso de la función al objeto para ser más rentable. Es general para todas las personas  */
    let msg = `Hola ${otro} soy ${this.nombre}`
    console.log(msg)
}

Persona.prototype.serContratado= function (puesto){
    this.profesion= puesto
}

p2.saludar(p3.nombre)

console.log(p2.cerebro)






