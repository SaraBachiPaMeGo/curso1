const f = require('../08_Pali_Sara.js')

describe('Ejercicio Palíndromo', () => {
    it('should be true', () => {
        expect(f.isPali('Ali tomo tila')).toBeTruthy
    });
    it('should be false', () => {
        expect(f.isPali('Hola')).toBeFalsy
    });
});