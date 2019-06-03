

describe('Pruebas de números pares', ()=>{ /* Función anónima que se guarda todo lo demás:  */

let isPar = require('../10_pares_Try')

    it("should be impar if n=1",() => {
        x = 1;
        expect(isPar(x)).toEqual(false)
        
    })

    it("should be par if n=2",() => {
        x = 2
        expect(isPar(x)).toEqual(true)
    })

    it("should be par if n='pepe'",() => {
        x = 'pepe'
        expect(isPar(x)).toEqual(false)
    })

    it("should be par if n=0",() => {
        x = 0
        expect(isPar(x)).toEqual(true)
    })

    it("should be par if n=-5",() => {
        x = --5
        expect(isPar(x)).toEqual(false)
    })
   
})