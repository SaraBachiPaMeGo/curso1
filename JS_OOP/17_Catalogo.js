{/**
 * @description Crear un objeto usado para representar un artículo de una tienda. El artículo va a tener:
 *  -Descripción
 *  -Código
 *  -Precio
 * y debe permitir el cálculo de su correspondiente IVA y ser capaz de mostrar los datos por pantalla (2 Métodos).
 * DETALLES: en lugar de incorporar las funciones directamente en el objeto se incorporarán en la función constructora.
 * OBJETIVO: Conocer la técnica para declarar objetos e inicializar una serie de propiedades y métodos
 * @param
 * @return
 */
}

let articulos = [
    {
        descripcion: '',
        codigo: '',
        precio: ''
    }, 
    {
        descripcion: '',
        codigo: '',
        precio: ''
    }

]

/**
 * Function (Class) Articulo
 * @property {String} descripcion 
 * @property {String} codigo 
 * @property {number} precio 
 * @property {number} iva
 * @method {Object} calcularIva
 * @method {void} mostrar
 */

function Articulo(descripcion='',codigo='',precio='') {
    this.description = descripcion
    this.codigo = codigo
    this.precio = precio    
}

Articulo.prototype.iva = 0.21
Articulo.prototype.calcularIVA = function(descuento=0) {
    const precio = this.precio - this.precio - descuento
    return {
        iva:precio*this.iva,
        total: this.precio + (this.precio*this.iva) 
    }
}

Articulo.prototype.mostrar = function(descuento){
    const {total,iva} = this.calcularIVA(descuento)
    const cadena =`
    Descripcion: ${this.description}
    Código: ${this.codigo},
    Precio: ${this.precio.toFixed(2)} €,
    IVA: ${iva.toFixed(2)} €,
    Precio Total: ${total.toFixed(2)} € `
    console.log(cadena)
}

const arti1 = new Articulo('Yogures naturales sabor fresa','2547894D', 2)
arti1.mostrar();
console.log(arti1)

const arti2 = new Articulo('Manzanas rojas','25647894D', 1.75)
arti2.mostrar();
console.log(arti2)

const arti3 = new Articulo('Pañales para bebés','25787894D', 3.25)
arti3.iva = 0.4
arti3.mostrar();
console.log(arti3)