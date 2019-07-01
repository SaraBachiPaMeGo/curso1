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

console.log(cadena.toLocaleUpperCase()) /*Este método pone todo en mayúsculas. No se pone dentro del método porque cadena hace de objeto (a través del .) temporalmente. En el caso de que esté dentro de una función y queramos que siempre sea en mayúscula la tendremos que meter en una variable. En éste caso, no está guardado el String en mayúsculas y por lo tanto sólo va a salir una vez. Hace un cambio en la salida de los datos. Estas funciones se llaman funcionesno mutables. */

console.log(cadena.length) /* Te devuelve el número de caracteres. ES UNA PORPIEDAD NO UN MÉTODO*/

console.log(cadena[0]) /* Te devuelve la primera letra del String por la posición que tiene en el array. En el caso de que le demos una posición que no tiene (por ejemplo 50), dará undefined. */

for (let i = 0; i < cadena.length; i++) {
    const element = cadena[i];
    console.log(element)
} /* Te devuelve la frase en forma de array (de arriba a abajo) */









