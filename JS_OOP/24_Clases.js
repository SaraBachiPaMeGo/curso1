/* 
ES5

function Coche(marca,modelo,color,combustible,precio) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.combustible = combustible
    this.precio = precio
}

Coche.prototype.arrancar = function () {
    console.log('Run run')
    return this // Lo ponemos para concatenar el método. Así concatenamos todos los métodos que queramos
}

Coche.prototype.ver = function () {
    console.log(this)
}

const coche1 = new Coche('Audi','A3','Rojo','Hybrid','20000')

coche1.arrancar().ver() */

let cadena =''
cadena.toUpperCase().trim().substr() /* Encadena funciones porque cada método devuelve al mismo objeto que hemos manipulado */

// ES6 -ES2015

//Módulos imports /exports
        // Arrow Function (this consistente)
        // Let y const
        // Template String (comillas francesas)
        // Destructuring spread y rest
        // Bucle for in 
        // Clases
        // Promesas

class Vehiculo {
    constructor(marca,modelo,color,combustible,precio){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.combustible = combustible
        this.precio = precio
    }
    arrancar () {
        console.log('Run run')
        return this // Lo ponemos para concatenar el método. Así concatenamos todos los métodos que queramos
    }    
    ver () {
        console.log(this)
    }
        
}

class Coche extends Vehiculo{
    constructor(marca,modelo,color,combustible,precio,volante, radio){
        super(marca,modelo,color,combustible,precio)
        this.volante = volante
        this.radio = radio
    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,color,combustible,precio,manillar){
        super(marca,modelo,color,combustible,precio)
        this.manillar = manillar
    }
    arrancar(){
        super.arrancar() /* Sale run run y brum brum porque hereda  */
        console.log('Brum Brum')
        return this
    } 
    hacerCaballitos(){
        console.log('He hecho un caballito')
        return (this)
    }
    
}

const coche1 = new Vehiculo('Audi','A3','Rojo','Hybrid','20000','Deportivo','Pionner')

const moto1 = new Moto('Kawasaki','Ninja','Verde','Gasolina','18000','Extra')

coche1.arrancar().ver()

moto1.arrancar().hacerCaballitos().ver()

console.log(moto1 instanceof Moto) //true
console.log(moto1 instanceof Vehiculo) //true
console.log(moto1 instanceof Object)//true
console.log(moto1 instanceof Coche)//False


