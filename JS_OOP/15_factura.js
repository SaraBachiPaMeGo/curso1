/* 
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

let factura1 = {
    empresa: {
        nombre: 'IBM',
        direccion: 'c/Joaquin,Madrid',
        tlf: '648957489',
        nif: '25547884R'
    },
    cliente: {
        nombre: 'Ferreteria Lola',
        direccion: 'c/Nachete,Valencia',
        tlf: '598745632',
        nif: '59874585J'
    },
    descripcion: 'Compra de herramientas para arreglar los suelos.',
    precioUni: 1.89,
    cantidad: 150,
    nFactuta: 895,
    fecha: '05-07-2019',
    tipoIva: '11%',
    pago: 'Transferencia',
    _importeTotal: function (unidad = 0, precio = 0) {
        return (unidad * precio)
    },
    mostrar: function (unidad = 0, precio = 0) {
        console.log(`El importe total de ${unidad} y ${precio} es de ${this._importeTotal(unidad, precio)}`)
    }
}
/* factura._importeTotal() */
console.log(factura1.mostrar(2, 4))

const tempFactura = {
    empresa: {
        nombre: '',
        direccion: '',
        tlf: '',
        nif: ''
    },
    cliente: {
        nombre: '',
        direccion: '',
        tlf: '',
        nif: ''
    },
    elementos: [
        {
            descripcion: '',
            precioUni: '',
            cantidad: '',
        },
        {
            descripcion: '',
            precioUni: '',
            cantidad: '',
        }
    ],
    infoBasic: {
        nFactuta: 895,
        fecha: new Date(),
        tipoIva: '',
        pago: '',
    },
}

const factura = {
    empresa: {
        nombre: 'IBM',
        direccion: 'c/Joaquin,Madrid',
        tlf: '648957489',
        nif: '25547884R'
    },
    cliente: {
        nombre: 'Ferreteria Lola',
        direccion: 'c/Nachete,Valencia',
        tlf: '598745632',
        nif: '59874585J'
    },
    elementos: [
        {
            descripcion: 'Compra de herramientas para arreglar los suelos.',
            precioUni: 1.89,
            cantidad: 150,
        },
        {
            descripcion: 'Arreglos de electricidad',
            precioUni: 2,
            cantidad: 2500,
        }
    ],
    nFactuta: 895,
    fecha: new Date(),
    tipoIva: 0.04,
    pago: 'Transferencia',

}

factura.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

factura.listarItems = function() {
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

factura.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
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
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

factura.render = function () {
    console.log(this.prepararFactura())
}


factura.render()








