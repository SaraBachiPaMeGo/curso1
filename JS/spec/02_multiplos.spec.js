const f = require('../02_multiplo.js')

describe('Pruebas de la función isMultiplo', () => {
   
    it('should be true is Multiplo(2,20)', () => {
        expect(f.isMultiplo(20,2)).toBeTruthy();
    });

    it('should be false is Multiplo(2,21)', () => {
        expect(f.isMultiplo(21,2)).toBeFalsy();
    });

    it('should be true is Multiplo(2,-20)', () => {
        expect(f.isMultiplo(-20,2)).toBeTruthy();
    });

    it('should be false is Multiplo(2,-21)', () => {
        expect(f.isMultiplo(-21,2)).toBeFalsy();
    });

    it('should be false is Multiplo(3,20)', () => {
        expect(f.isMultiplo(20,3)).toBeFalsy();
    });

    it('should be false is Multiplo(3,21)', () => {
        expect(f.isMultiplo(21,3)).toBeTruthy();
    });

    it('should be false is Multiplo(3,20.5)', () => {
        expect(f.isMultiplo(20.5,3)).toBeFalsy();
    });

    it('should be true is Multiplo(7.5,2.5)', () => {
        expect(f.isMultiplo(7.5,2.5)).toBeTruthy();
    });

    it('should be ERROR is Multiplo(21,"pepe")', () => {
        expect(f.isMultiplo(21,"pepe")).toThrow()
        
    });

});

describe('Función extraerMultiploss', () => {

    it('should return an array', () => {
        expect(Array.isArray(f.extraerMultiplos())).toBeTruthy(); /* Comprobamos que es un array  */
    });

    it('should return an array', () => {
        const aDatos = [1,2,3,4,5,6,7,8,9]
        const n=2;
        expect(f.extraerMultiplos(n,aDatos)).toEqual([2,4,6,8])
    });

    it('should return an array', () => {
        const aDatos = [1,2,3,4,5,6,7,8,9]
        const n=3;
        expect(f.extraerMultiplos(n,aDatos)).toEqual([3,6,9])
    });
});

