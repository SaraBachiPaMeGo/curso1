let aDatos = [5, 'pepe', 25]

aDatos[aDatos.length] = 87 /* Le añadimos 87 */

aDatos[0] = 9 /* Sustituye el 5 por el 9 */

aDatos[100] = 9 /* El array tiene 101 posiciones, los numeros que no están definidos se quedan vacíos (undefined) */

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if (!item) {
        aDatos[i] = parseInt(Math.random() * 100)
    }
}

console.log(aDatos)

/*  */

/**
 * 
 * @description Función que me devuelva un array de n de números enteros aleatorios y positivos menores de iguales a 100 (entre 0 y 100)
 * @param {number} n
 * @returns {Array}
 */


function arrayNum(n = 0) {
    let r = []
    for (let i = 0; i < n; i++) {
        r[i] = parseInt(Math.random() * 100)

    }
    return r;

}

console.log(String(arrayNum(5)))

/**
 * @description calcular la letra del DNI
 * @param {number} dni
 * @returns {}
 */

/* function calcularLetra(dni) {
    let r;
    arrayLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    resto = dni%23
    for (let i = 0; i < arrayLetra.length; i++) {
        const element = arrayLetra[i];
        if(arrayLetra[i] = resto) {
           return r =element;
        }
    }
    return r;
} */
/* 
console.log(calcularLetra(51133045))
 */
function letraDNI(dni) {
    const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let r = '';
    r = aLetras[formatoDNI(dni) % 23]
    return r;
}

console.log(letraDNI(51133045))

/**
 * @description Convertir el número entrante del dni a número válido
 * @param {number} dni 
 * @returns {number}
 */

function formatoDNI(dni) {
    if (typeof dni === 'number') {
        return dni
    }
    let r = 0
    let cadena = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i];
        if (!isNaN(caracter)) {
            cadena += caracter
        }
    }
    return Number(cadena);
}













