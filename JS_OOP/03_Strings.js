`use strict`

let cadena = "Esto no es buena práctica,comillas dobles" /* en html se usa comillas dobles, para diferenciar los string en javascript se ponen comillas simples */

let cadena1 = 'Esto sí buena práctica, con comillas simples'

let cadena2= `Esto son comillas francesas y una nueva forma de hacer un string. Además que te saca las variables`

Math.trunc(3.67) /* Equivalente a parseInt pero parseint espera un string. Sólo quita los decimales. Te devolverá 3 */
Math.round() /* Espera un número y redondea al número más cercano, el .5 tira para abajo  */
Math.ceil() /* Redondea al "techo" lo que tengas con ,x tirará para arriba */
Math.floor()/* Redondea al "suelo" lo que tengas con ,x tirará para abajo(para el entero) */
Math.random() /* Numero aleatorio entre 0 y 1 */

console.log(Math.trunc(Math.random()*10)) /* Te devuelve un numero aleatorio pero siendo entero */
