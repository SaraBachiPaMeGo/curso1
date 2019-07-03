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

function palindromo2(letra='', aNombres=[]) { /* Elimino el nombre que aparece con la x letra primera del item del array */
    const r =aNombres.slice() /* Clono lo que recibo por parámetros */
    for (let i = 0; i <aNombres.length; i++) {
        const element = aNombres[i];
        if (element[0].toLowerCase()=== letra.toLowerCase()) { 
            aNombres.splice(i,1)
            i--
        }
    }
    return r
}

let l ='r'
palindromo2(l,usuarios)
console.log(usuarios)

/* PARÁMETROS */

function algo(h) { /* h recibe el valor de z, 4 */
    h =h*h
}

let z=4
algo(z)
console.log(algo(z))/* Te da undefined porque algo() no devuelve nada */

/* Parámetros y referencias */

function cuadrados(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i]*a[i]
    }
    return a /* [1,25,4,36] */
}

let x =[1,5,2,6]
cuadrados(x)
console.log(x)