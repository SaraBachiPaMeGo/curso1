const f = require('../04_caso.js')

describe('Ccomprobar cadena', () => {
    it('should be 0 ("Mayúsculas")', () => {
      expect(f.comprobarCadena('HOLA')).toEqual(0) 
    });
    it('should be 1 ("Minúsculas")', () => {
       expect(f.comprobarCadena('hola')).toEqual(1) 
    });
    it('should be 2 ("Mayus y minus")', () => {
        expect(f.comprobarCadena('Hola')).toEqual(2)
    });
    it('should be 0 ("Mayúsculas")', () => {
        expect(f.comprobarCadena('HOLA BUENAS TARDES')).toEqual(0)
    });
    it('should be 1 ("Minúsculas")', () => {
        expect(f.comprobarCadena('hola buenas tardes')).toEqual(1)
    });
    it('should be 2 ("Mayus y minus")', () => {
        expect(f.comprobarCadena('Hola buenas Tardes')).toEqual(2)
    });
});

describe('Comprobar mensaje', () => {
    it('should be "Solo mayúsculas" ', () => {
        const cadena = 'HOLA' 
        console.log =jasmine.createSpy("log")/*Permite hacer un spia sobre una función original. Te devuelve un espía. Son funciones que se quedan a la espera de un evento. se disparan cuando la función que tu quieres se utiliza */
        f.mostrarComprobacionCadena(cadena)        
        /* Queremos que el espía sea invocado a través de toHavebeencall... cuando ejecute el msg */
        expect(console.log).toHaveBeenCalledWith('solo mayúsculas') 
    });
    it('should be "Solo minúsculas" ', () => {
        const cadena = 'hola' 
        console.log =jasmine.createSpy("log")
        f.mostrarComprobacionCadena(cadena)
        expect(console.log).toHaveBeenCalledWith('solo minúsculas') 
    });
    it('should be "mayus y minus" ', () => {
        const cadena = 'Hola' 
        console.log =jasmine.createSpy("log")
        f.mostrarComprobacionCadena(cadena)
        expect(console.log).toHaveBeenCalledWith('mayus y minus') 
    });
});