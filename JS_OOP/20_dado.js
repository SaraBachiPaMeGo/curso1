 
 /* Cómo se harís SI existieran ambitos privados/públicos */
 const dado = {
    _valor:null,
    set: function () {
        this._valor = parseInt(Math.random()*6) +1 /* De esta forma limitamos el número para que sea del 1 al 6 */
    },
    get: function () {
        return  this._valor
    }
}

for (let i = 0; i < 20; i++) {
   /* dado.tirarDado() */ dado.set()
   /* console.log(dado._valor) */ console.log(dado.get())
}


 function Dado() {
     let __valor = null /* La hacemos no visible para los demás métodos. Es forma de simular la privacidad de las variables */
     _valor = parseInt(Math.random()*6) +1
     console.log(_valor)
 }

 Dado.prototype.lanzar = function () {
    this._valor = parseInt(Math.random()*5) +1
 }


const dado1 = new Dado()

for (let i = 0; i < 20; i++) {
    dado1.lanzar()
    // dado.__valor = 6 NO DEBO
    console.log(dado._valor)
 }

 /* Getters ans setters ES5 JavaScript Accessors */

 const persona= {
     nombre:'Sara',
     apellido: 'Bachiller',
     edad:21,
     _curso: '',
     get curso(){
        return this._curso
     },
     set curso(curso) {
        this._curso = curso
     },
     /* verNombreCompleto: function () {
         return `${this.nombre} ${this.apellido}`
     } */
     get verNombreCompleto () {
        return `${this.nombre} ${this.apellido}`
    }
    }

 persona.curso =  'Angular' /* A partir del método curso, metemos _curso el parámetro  */   
console.log(persona.curso)
console.log(persona.verNombreCompleto)

