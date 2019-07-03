/**
 * @description Eliminar de un array los nombres que empiecen por una letra determinada
 * @param {Array}: aNombres 
 * @param {string}: letra
 * @returns {Array}
 */

function limpiarArray(aNombres= [], letra= '') {
    for (let i = 0; i < aNombres.length; i++) {
        const element = aNombres[i];        
        if(element[0].toLowerCase() === letra.toLowerCase()) { /* Podemos poner tolowercase porque element es un String */
            aNombres.splice(i,1) /* Le tenemos que decir la posición le tenemos que quitar, a partir de la que es,1 */
        }
    }

    return aNombres
}

let usuarios = ['Rosa', 'Raquel', 'Elena', 'Sara','Ramon']
limpiarArray(usuarios, 'r')

console.log(usuarios)

/* No pasa por Raquel porque es 1, 1 */

function palindromo2(letra='', aNombres=[]) {
    for (let i = 0; i <aNombres.length; i++) {
        const element = aNombres[i];
        if (item[0].toLowerCase()=== letra.toLowerCase()) { 
            aNombres.splice(i,1)
            i--
        }
    }
}

let l ='r'
palindromo2(l,usuarios)
console.log(usuarios)








