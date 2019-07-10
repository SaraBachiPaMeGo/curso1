module.exports = {}
module.exports.Factura = Factura
module.exports. Empresa = Empresa
module.exports.Item = Item
module.exports.Direccion = Direccion

{/* 
Definir la estructura de un objeto que almacena una factura. 
Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de dactura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
o al menos el importe total de la factura. */
}

const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')    

function Factura(empresa= {},cliente={},items=[{}],nFactura='',tipoIva='',pago='',fecha=new Date()) {
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.nFactura = nFactura
    this.tipoIva = tipoIva
    this.pago = pago
    this.fecha = fecha
}

function Empresa(nombre,direccion,telf,nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telf = telf;
    this.nif = nif;
}

function Item(description = '', precio = 0, cantidad=0) {
    this.description=description;
    this.precio = precio
    this.cantidad= cantidad
    
}

function Direccion(calle ='',num, poblacion, pais) { /* Como es un objeto que dentro tiene propiedades, creamos un objeto que tenga esas propiedades. Por eso creamos una fucnión */
    this.calle = calle;
    this.num = num
    this.poblacion = poblacion
    this.pais = pais
}

Direccion.prototype.toString = function() {
    return `${this.calle} ${this.num}
    ${this.poblacion} , ${this.pais}`
}

Factura.prototype.calcularImporte = function(){
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

/* Factura.prototype.mostrarImporte = function(){} */

Factura.prototype.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telf}
                                        ${this.empresa.nif}
    Num. Factura: ${this.nFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telf}
    ${this.cliente.nif}

    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.pago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

Factura.prototype.render = function () {
    console.log(this.prepararFactura())
}

Factura.prototype.resumir = function () {
    console.log(`Factura: ${this.nFactura} : ${this.calcularImporte().total}`)
}