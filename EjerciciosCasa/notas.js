/**
 * @description 2. Pide una nota (número). Muestra la calificación según la nota:
        0-3: Muy deficiente
        3-5: Insuficiente
        5-6: Suficiente
        6-7: Bien
        7-9: Notable
        9-10: Sobresaliente
 * @param {number} nota
 * @returns {string} r
 */

function isValidNumber(n) {
    let r = true
    if (isNaN(n)
        || typeof n == 'boolean'
        || n === ''
        || typeof n == 'object'
        // || Array.isArray(n)   || n === null
    ) {
        r = false
    }
    return r
}

function darNota(nota) {
    do {
        switch (nota) {
            case 0:
            case 1:
            case 2:
            case 3:
                return 'Muy deficiente'
            case 4:
            case 5:
                return 'Insuficiente'
            case 6:
                return 'Suficiente'
            case 7:
                return 'Bien'
            case 8:
            case 9:
                return 'Notable'
            /* default:
                return 'Sobresaliente' */
            case 10:
                return 'Sobresaliente'
        }
    } while (isValidNumber(nota))/* typeof nota!== NaN || typeof nota!== 'string' || typeof nota!== 'boolean' */

}

/* No entiendo por qué me da mal si estoy llamando a la función que hace que me controle si es un número o no. Tampoco si lo pongo directamente. Siempre me saltaba al default pero una vez pues el case 10 debería de salir otra cosa, y en efecto : undefined pero no false como debería de returnar */

console.log(darNota(5))
console.log(darNota(10))
console.log(darNota(0))
console.log(('**************'))
console.log(darNota(NaN))