/**
 * IndexOf - Devuelve la POSICION en la que aparece lo que esté dentro del método
 */

function devolver(palabra) {
    return palabra.indexOf('a') + 1
}

console.log(devolver('fruta'))

/**
 * Join - Junta los elementos de un ARRAY con un separador o no 
 */

function joiN(letras) {
    return letras.join('') /* Me he dado cuenta de que tiene que venir como un array para que pueda actuar. El split no. */
}

console.log(joiN(['hola', 'me', 'llamo', 'Sara']))

/**
 * ToString - Convierte un array en string y devuelve el resultado(entre comas)
 */

function toStrinG(params) {
    return params.toString()
}

console.log('*****************')

console.log(toStrinG('Hola me llamo Sara')) /* te devuelve el string sin más: Hola me llamo Sara */

console.log(toStrinG(['hola', 'me', 'llamo', 'Sara'])) /* Te devuelve el array en cadena: hola,me,llamo,Sara */

console.log('*****************')

/**
 * Split - Convierte un String en ARRAY. 
 */

function spliT(k, m) {
    return k.split('.') && m.split() /* Este simplemente lo convierte a array. En el return cuando le he puesto || ha salido el primero, si le pongo && sale el segundo. No parece que si dentro del split pones algo salga */
}

console.log(spliT('Hola me llamo Sara', 'Hola kase'))

/**
 * Pop - Borra el último elemento del Array y te devuelve lo que ha borrado
 */

function poP(j) {
    return j.pop()
}

console.log(poP([1, 2, 3, 5]))

/**
* Push - Añade al último elemento del Array y te devuelve la longitud
*/

function pusH(j) {
    return j.push()
}

console.log(pusH([1, 2, 3, 0]))

/**
* Shift - Borra el primer elemento del Array y te lo muestra (lo que ha borrado)
*/

function shifT(g) {
    return g.shift()
}

console.log(shifT([1, 2, 3, 0]))

/**
 * Unshift - Añade elementos al array (al principio) y te devuelve la longitud que tiene el array con los elementos nuevos ya metidos
 */

function nsh(params) {
    return params.unshift(5,6)
}
console.log('FUNCION NSH')
console.log(nsh([1,2,3]))

/**
* Slice - Borra los x elementos que le digas (dentro del método) y te devuelve el array. Tambien se puede dar el caso, que sólo queramos posiciones salteadas NO CREO QUE SE PUEDA ELEGIR CON POSICIONES SALTEADAS, por lo que se puede meter dos números. Es en este caso cuando vemos que sólo nos devuelve 2 y 3 
array.slice(start, end)
*/

function slicE(params) {
    return params.slice(1, 3)
}

console.log(slicE([1, 2, 3, 0]))

function slCE(params, n) {
    /* for (let i = 0; i < params.length; n++) {
        const element = params[i]; */
        /* return params.slice(element) --> Si hago esto me devuelve esto-: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] y no tiene lógica porque n está en 3, por lo que sólo debería de faltar el 4*/
        /* return params.slice(n++) En este caso nos devulve : [ 4, 5, 6, 7, 8, 9, 10, 11, 12 ] tiene algo más de lógica pero aún no sirve, tiene que ser cada 3 veces borrar. Pero claro no sólo me está borrando un número sino todos lo que le siguen */
    /* }  */
    /*return params.slice(n++) si lo pongo aquí no devuelve nada. ENCIMA SE QUEDA PUTO BLOQUEADO*/
    return params.slice(1,7)
}

console.log('*****************')

console.log(slCE([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3))

/* Al aparecer el último número no lo coge, pero el primero si. HABLAMOS DE POSICIONES */
/* Creo que lo que quería hacer con n, no se puede, No se puede al parecer coger cachos de array sueltos, cada n veces. t   iene sentido; si es cada n veces y es 3, cada 3 veces se quitan elementos, por lo que no nos devolvería nada */

/**
 * Sort - Ordena los valores preestablecidos. Los números no los ordenará de mayor a menor, ya que los convierte a String, por lo que si los números se ordenan como cadenas, "25" es mayor que "100", porque "2" es mayor que "1". Y los meses del año los ordenará en orden alfabético.
 * GRACIAS a compareFunction : función que define el orden de clasificación. Si se omite, el array es ordenado atendiendo a la posición del valor Unicode de cada carácter, según la conversión a string de cada elemento.
 */

 function sorT(params) {
     /* let nArray
     for (let i = 0; i < params.length; i++) {
         const element = params[i];
         if(element>element){
             mayor = element
             menor = 
             nArray.push(element)
             return nArray
         }else{
             console.log('No funciona')
         }
     } */
     /* return params.sort() */
     params.sort(function(a, b) { /* Se supone que así se ordena de manera ascendente(?). MENTIRA. */
        return a - b;
      });
 }

 console.log(sorT([9,7,2,4,5]))