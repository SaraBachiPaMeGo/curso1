/**
 * @description Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, si se lee de la misma forma desde izq a derch y viceversa.
 * @param {string} frase
 * @return {boolean}
 */

 function palindromo(frase='') {
     frase2 = frase.split().reverse() /* Guarda la frase dentro de un array y hacemos que la frase comience al revés*/
     
     if(frase== frase2) { /* Comparar la frase */
         return true;
     }
     return false;
 }

 console.log(palindromo('Ali tomo tila'))
 console.log(palindromo('Hola'))
 console.log('.........................')

 function palindromo2(frase='') {
    for (let i = frase.length -1; i < 0; i--) {
        const element = frase[i];
        element+=element /* Creamos la frase al revés, y la guardamos en element */
        if (elemet==frase) { /* Queremos comparar la frase creada con la dada para compararlas */
            return true
        }
    }
    return false;
}

console.log(palindromo2('Alí tomó tila'))
console.log(palindromo2('Ali tomo tila'))