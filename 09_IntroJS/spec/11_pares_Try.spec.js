

describe('Pruebas de números pares', ()=>{ /* Función anónima que se guarda todo lo demás:  */

    let f = require('../11_pares_Try.js')

    it("should be impar if n=1",() => {
        let x = 1;
        expect(f.isPar(x)).toEqual(false)        
    })

    it("should be par if n=2",() => {
        let x = 2
        expect(f.isPar(x)).toEqual(true)
    })

    it("should be false if n='pepe'",() => {
        let x = 'pepe'
        expect(f.isPar.bind(null,x)).toThrowError(/no es un número/) /* Para los errores con bind tenemos que pasarle ull y el parámetro*/
    })
    it("should be false if n='4.5'",() => {
        let x = '4.5'
        expect(f.isPar.bind(null,x)).toThrowError(/no es un número entero/) /* Expresión regular. Se tiene que poner bind cunado le pasas un parámetro de error */
    })

    it("should be par if n=0",() => {
        let x = 0
        expect(f.isPar(x)).toEqual(true)
    })

    it("should be impar if n=-5",() => {
        let x = -5
        expect(f.isPar(x)).toEqual(false)
    })
   
})