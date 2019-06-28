function calcular(a,b,operacion,callback) {
    let msg = `El resultado de una ${operacion} con ${a} y ${b} es = `;
    return msg + callback(a,b)
}

/* calcular(4,6,'suma',function(x,y){return x+y}) */

console.log(calcular(4,6,'suma',(x,y) => x+y))
console.log(`...........................................`)
console.log(calcular(4,6,'resta',function(x,y) {return x-y}))
console.log(`...........................................`)
console.log(calcular(4,6,'multiplicar',function(x,y) {return x*y}))
console.log(`...........................................`)
console.log(calcular(4,6,'multiplicar',producto())) /* El resultado de esto dará NaN */
console.log(`...........................................`)

/* Las funciones siempre serán constantes, por lo que a la hora de igualar un nombre a una función será const */

const productoRaices= (a=0,b=0 ) => r =Math.sqrt(a)*Math.sqrt(b);

/* API Interfaz de programación de aplicaciones, lenguaje de programación. El conjunto de instrucciones de un lenguaje que tiene que utilizar los arrys, será el api de los arrays. El core es como declarar las varibales, como hacer un if, for... (el núcleo) */

/* api rest palabras que pone a mi despositivo un server para interactuar con ellas */

/* framwrok, entorono de trabajo, sobre un lenguaje determinado alguien te da unas instrucciones concretas, librería, es parecida a un api pero no es estándar, no está cargada en los navegadores. */

/* para usar un api no necesitas nada, ya lo tienen los navegadores, las librerias son como prolongaciones-ampliaciones del lenguaje pero no son estándar, necesita que le des unas normas para que el navegador lo pueda ententer, framework, evolución de una librería pero a lo grande, de dice "el camino" por donde ir ('conjunto de normas') */



