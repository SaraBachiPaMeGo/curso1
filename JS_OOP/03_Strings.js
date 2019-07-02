`use strict`

let intl = require('intl')
require('intl/locale-data/jsonp/es.js')

let cadena = "Esto no es buena práctica,comillas dobles" /* en html se usa comillas dobles, para diferenciar los string en javascript se ponen comillas simples */

let cadena1 = 'Esto sí buena práctica, con comillas simples'

let cadena2= `Esto son comillas francesas y una nueva forma de hacer un string. Además que te saca las variables`

Math.trunc(3.67) /* Equivalente a parseInt pero parseint espera un string. Sólo quita los decimales. Te devolverá 3 */
Math.round() /* Espera un número y redondea al número más cercano, el .5 tira para abajo  */
Math.ceil() /* Redondea al "techo" lo que tengas con ,x tirará para arriba */
Math.floor()/* Redondea al "suelo" lo que tengas con ,x tirará para abajo(para el entero) */
Math.random() /* Numero aleatorio entre 0 y 1 */

console.log(Math.trunc(Math.random()*10)) /* Te devuelve un numero aleatorio pero siendo entero */

console.log(cadena.toLocaleUpperCase()) /*Este método pone todo en mayúsculas. No se pone dentro del método porque cadena hace de objeto (a través del .) temporalmente. En el caso de que esté dentro de una función y queramos que siempre sea en mayúscula la tendremos que meter en una variable. En éste caso, no está guardado el String en mayúsculas y por lo tanto sólo va a salir una vez. Hace un cambio en la salida de los datos. Estas funciones se llaman funcionesno mutables. */

console.log(cadena.length) /* Te devuelve el número de caracteres. ES UNA PORPIEDAD NO UN MÉTODO*/

console.log(cadena[0]) /* Te devuelve la primera letra del String por la posición que tiene en el array. En el caso de que le demos una posición que no tiene (por ejemplo 50), dará undefined. */

for (let i = 0; i < cadena.length; i++) {
    const element = cadena[i];
    console.log(element)
} /* Te devuelve la frase en forma de array (de arriba a abajo) */

let x= cadena.split() /* Si no le pasas nada a split, guarda la cadena entera dentro de un array */

console.log(x)
console.clear;

let y= cadena.split(' ') /* Split crea un array, y por lo tanto te lo separa por comas */

console.log(y)

/* Lo contrario de split es join, convierte todos los elementos de un array en una cadena */

y= cadena.split(' ').join(' ') /* Da lo mismo */

console.log(y)

cadena.slice(inicio,final)
cadena.substring(inicio,final)
cadena.substr(inicio,desplazamiento)

/* FUNCIONES DE BÚSQUEDA .Le pasamos dos expresiones regulares para buscar x */
cadena.match()// recupera el resultado de hacer coincidir una cadena con una expresión regular .
cadena.search() // ejecuta una búsqueda de una coincidencia entre una expresión regular y este Stringobjeto.
cadena.replace() /* Busca las veces que aparezca x y lo sustituye por y */

cadena.indexOf(clave) /* le pasas una expresión o cadena y te devuelve la posición en la que aparece tu clave */
cadena.lastIndexOf(clave)/* Lo mismo pero empezando por atrás. Detecta la última vez que detecta la clave */

cadena.charAt(posicion)/* Te devuelve un carácter. Le pasas una posición (numérico). Qué caracter hay en la posición x. */

cadena.charCodeAt(posicion)/* Te devuleve el código del caracter */

String.fromCharCod(num) /*Instanciada en la clase genérica . Le dices un número de códgio y te lo convierte a código. 65 a A mayúscula por ejemplo */

let numero = 23.5974;
console.log(numero.toString())/* Convierte el número a string */
console.log(numero.toFixed(2)) /*Le dices los dígitos que quieres que salgan y redondea */
console.log(numero.toPrecision(2)) /* No distingue entre enteros y decimales. Te saca justo los números que dice que salga. Por ejemplo (3) le doy 1000 y saca 100 */
console.log(numero.toExponential())/* Notación científica */
console.log(numero.toLocaleString())/*  */

console.log(numero.toLocaleString('es',{style: 'currency', currency : 'EUR'}))