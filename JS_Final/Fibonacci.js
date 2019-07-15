/**
 *@description Serie de Fibonacci: Utilizando la estructura while o do while, crear un script que, después de solicitar su límite superior, calcula y muestre por pantalla la serie de Fibonacci
 * 
 * - Ampliación: Utilizamos un patrón callback para pasar la función de la serie que realice el cáculo. En lugar de prompt('..."), introduciremos el límite de la serie con un campo input, y pasaremos el script a una función. * 
 * - Objetivo: Utilizar bucles de control mediante iteraciones incondicionales (while/do while)
 * - Nota: la serie de Fibonnacci comienza por 0 y 1 y continúa obteniendo cada término como la suma de los 2 anteriores
 * 
 * @param {number} n, será el límite de la serie
 * @return {array} r
 */

function isNumber(n) {
    let r = true;
    if (isNaN(n) || typeof n == 'boolean' || Array.isArray(n) || n === '' || n === null) { //== COMPARACIÓN
        r = false
    }
    return r;
}

let calcular = (n) => {
    let r = [0, 1]
    for (let i = 2; i < n; i++) {
        r.push(r[i - 1] + r[i - 2])/* 
        r =n[i] + n[i-1]; */

    }
    return r;
}
//i[n]+ i[n-1]
// n[i] + n[i-1]
let mostrar = (n) => {
    console.log(calcular(n))
}

function doWhile(n) {
    do {
        let r = [0, 1]
        for (let i = 2; i < n; i++) {
            r.push(r[i - 1] + r[i - 2])
        }
        return r;
    } while (isNumber(n) == true);
    /* throw new Error(`El valor ${n} no es válido, no es un número`) */

}
/*No puedes poner dentro de un do while un throw, siempre se ponen en condiciones booleanas */

let n = ''

try {
    console.log(doWhile(n))
} catch (error) {
    console.log(error.message(`El valor ${n} no es válido, no es un número`))
}



console.log(mostrar(7))
console.log(doWhile(7))
console.log(mostrar(''))
console.log(doWhile(''))



