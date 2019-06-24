const f = require('../03_calculos.js');

describe('Función suma', () => {

    const error =['pepe','3',true,NaN, undefined, null, [],{}];

    for (let i = 0; i < error.length; i++) {
        const element = error[i];
        it(`should be ERROR ${element}`, () => {
            expect(()=> f.suma(2,element)).toThrow()
        });
    }

    it('should be number', () => {
        expect(f.suma(2,7)).toEqual(9);
    });
    
    it('should be ERROR (0) if a number = String', () => {
        expect(() =>f.suma('pepe',7)).toThrow();
    });

    it('should be 5', () => {
        expect(f.suma(-2,7)).toEqual(5);
    });

    it('should be 7', () => {
        expect(f.suma(7)).toEqual(7);
    });

    it('should be 0', () => {
        expect(f.suma()).toEqual(0);
    });

    it('should be -5', () => {
        expect(f.suma(2,-7)).toEqual(-5);
    });

    it('should be 10', () => {
        expect(f.suma(2.5,7.5)).toEqual(10);
    });

    it('should be =5', () => {
        expect(f.suma(2,"3")).toEqual(5);
    });

    it('should be concat', () => {
        expect(f.suma('pepe','come')).toEqual('pepecome'); 
    });

    

});