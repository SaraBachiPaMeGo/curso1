/* */

/**
 * @description 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir. 
 * @param {number} edad
 * @return {string} r
 */

function pedirEdad(edad) {
    r = ''
    return r ? edad<18 : edad>18

}

console.log(pedirEdad(5))

function permisoConducir(edad) {
    if (edad>=18) {
        return 'Tienes permiso para conducir'
        
    } else {
        return 'Eres menor de edad'
    }
    
}

console.log('******************')

console.log(permisoConducir(5))
console.log(permisoConducir(18))
console.log(permisoConducir(48))