const aDatos= ['Luis','Juan','Pepi','Lola']
//aDATOS = NEW aRRAY()

console.log(aDatos.__proto__)
console.log(Array.prototype)

Array.prototype.saludar = function () {
    console.log('Hola, soy un array')
}

Array.prototype.push = function (nombre) {
    console.log('Hola ' + nombre)
}

aDatos.push('Sara')
aDatos.saludar()