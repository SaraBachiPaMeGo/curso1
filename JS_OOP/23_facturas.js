
const {Factura,Item} = require('./23_modelos.js') /* El orden no influye. Hemos deconstruído el objeto */
const {empresa,ordenadores,frutas} = require('./23_Empresas.js')
const {productos1,productos} = require('./23_Productos.js')

const factura = new Factura (
    empresa,
    frutas,
    productos1,
    '164782546',
    0.04,
    'Transferencia',
    new Date()
)

const factura1 = new Factura (
    empresa,
    ordenadores,
    productos,
    '164781548',
    0.04,
    'Metálico',
    new Date()
)

factura.render();

const Tempfactura = {
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

