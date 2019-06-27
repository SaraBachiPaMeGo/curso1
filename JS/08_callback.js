function calcular(a,b,operacion,callback) {
    let msg = `El resultado de una ${operacion} con ${a} y ${b} es = `;
    return msg + callback(a,b)
}

/* calcular(4,6,'suma',function(x,y){return x+y}) */

console.log(calcular(4,6,'suma',(x,y) => x+y))
console.log(`...........................................`)
console.log(calcular(4,6,'resta',function(x,y) {return x-y}))
console.log(`...........................................`)
console.log(calcular(4,6,'multiplicar',function(x,y) {return x*y}))
console.log(`...........................................`)
console.log(calcular(4,6,'multiplicar',producto())) /* El resultado de esto dará NaN */
console.log(`...........................................`)

