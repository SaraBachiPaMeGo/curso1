/**
 *@description Hacer factorial de un número
 * @param {number} n
 * @return {number}
 */
function isNumber(n){
    let r=true;
    if(isNaN(n)||  typeof n=='boolean'|| Array.isArray(n) || n===''|| n===null){ //== COMPARACIÓN
        r=false
    }
    return r;
}

 function valorAbs(n) {     
    return Math.abs(Math.trunc(n))       
 }

function factorial(n=0) {
    let r=1;
    if (isNumber(n) && valorAbs(n)) {
        for (let i = 1; i <= n; i++) {
        r *= i
        
        } 
   /*  console.log(r) */
    }else{
        r = new Error('Error! el número introducido no es un número')   
    }    
    return r;
}

console.log(valorAbs(-100))
console.log(isNumber(-100))
console.log(factorial((5)))
factorial(-5)
console.log(factorial((-5)))

module.exports = {}
module.exports.isNumber = isNumber
module.exports.factorial = factorial 
