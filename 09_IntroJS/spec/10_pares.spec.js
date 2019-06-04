/* Jasmine es un programa especializado para haces testing */

describe('Función isPar', () => {

    let f =require('../10_pares.js');

    it('should be true if n=0', () => {
        let n=0;
        expect(f.isPar(n)).toBeTruthy();  /* También se puede poner toEqual(true) */
    });
    
    it('should be false if n=1', () => {
        let n=1;
        expect(f.isPar(n)).not.toBeTruthy();
    });

    it('should be true if n=2', () => {
        let n=2;
        expect(f.isPar(n)).toBeTruthy();
    });

    it('should be false if n="11"', () => {
        let n=11;
        expect(f.isPar(n)).not.toBeTruthy();
    });

    it('should be true if n="22"', () => {
        let n=22;
        expect(f.isPar(n)).toBeTruthy();
    });

    it('should be true if n=-4', () => {
        let n=-4;
        expect(f.isPar(n)).toBeTruthy(); /* bind(n) le pasa valores a una función EJ: expect(f.isPar.bind(n)).toEqual(true) hace de paréntesis. Sólo tiene sentido en el ámbito de pruebas */
    });

    it('should be -1 if n="pepe"', () => {
        let n='pepe';
        expect(f.isPar(n)).toEqual(-1);
    });

    it('should be -2 if n=4.4', () => {
        let n=-4.4;
        expect(f.isPar(n)).toEqual(-2);
    });

});


describe('Función isEntero', () => {
    let f =require('../10_pares.js'); /* Llamas a las funciones. F guarda los objetos que hemos importado desde la carpeta 10_pares */
    
    it('should be true if n is 2', () => {
        let n=2;
         expect(f.isEntero(n)).toBeTruthy() /* TobeTruthy sirve para decirle que va a ser un booleano y para que sea verdad. Expect espera algo */
    });

    it('should be false if n is 2.2', () => {
        let n=2.2;
        expect(f.isEntero(n)).not.toBeTruthy(); /* toBeFalsy también sirve para decir que es false */
    });

    it('should be true if n is -2', () => {
        let n=-2;
        expect(f.isEntero(n)).toBeTruthy(); 
    });

    it('should be false if n is -2.2', () => {
        let n=-2.2;
        expect(f.isEntero(n)).not.toBeTruthy(); 
    });

    it('should be true if n is 0', () => {
        let n=0;
        expect(f.isEntero(n)).toBeTruthy(); 
    });

    it('should be true if n is "2"', () => {
        let n="2"; /* Da igual comillas dobles o simples, por convenio se utilizan las simples */
        expect(f.isEntero(n)).toBeTruthy(); 
    });
});



















