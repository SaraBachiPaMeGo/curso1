const b = {
    id:123,
    nombre:'pepe',    
    conocidos: ['Juan','Raúl','Loli'],
    mostrarId: function () { /* Método. Funciones que están dentro de los objtos. No se pueden hacer funciones con arrows */
        /* El "yo" de los objetos es THIS */
        console.log(this.id)
    },
    edad:21 ,
    /* saludar:  () => {
        console.log(`Holi soy ${b.nombre}`) Nombre da undefined porque la función está en arrow. El this se define de una forma diferente: se define a la hora de ejecutar.No está en el interior del objeto, en cambio si ponemos 'b.' pero no se usan refenrecias internas al obj por tema herencias o funciones literales MALA PRÁCTICA
    }*/
    saludar: function (otro='amigo'){
        if (this._isConocido(otro)) {
            console.log(`Holi ${otro}, ¿Cómo estás?`)
        }
        console.log(`Holi ${otro}, soy ${this.nombre}`)
    },
    _isConocido: function (otro) { /* _ antes del nombre para decirla que es privada y que no se va a ejecutar desde fuera, pero aún así se podría ejecutar */
       return this.conocidos.some(item => item.toLowerCase()===otro.toLowerCase()) 
    }
}


/* ORIENTACIÓN A OBJETOS */

b.mostrarId() /* El objeto llama a su propio método */
b.saludar('Lola')
b.saludar()
/* console.log(b.isConocido('raúl')) se llama internamente */
console.log('..........................................')
console.log(b.saludar('pepi'))

