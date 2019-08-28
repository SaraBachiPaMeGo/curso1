/**
 * @description 5. Calcular la letra de un número de DNI.
 * @param {string} dni
 * @returns {string} letra
 */

function valorLetra(dni) {
    restoDni = dni % 23
    const arrayChar = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    for (let i = 0; i < arrayChar.length; i++) {
        const element = arrayChar[i];
        if (arrayChar[i] = restoDni) {
            return `La letra del dni ${dni} es el element ${element} y el resto ${restoDni} el arrayChar[i] ${arrayChar[i]}`
        }

    }
}

console.log(valorLetra(51133045))


