const f = require('../30_Factorial.js')

describe('Factorial number', () => {
    it('should be false...', () => {
        expect(f.isNumber('')).toBeFalsy() 
    });
    it('should be false...', () => {
        expect(f.isNumber(undefined)).toBeFalsy() 
    });
    it('should be false...', () => {
        expect(f.isNumber(null)).toBeFalsy() 
    });
    it('should be false...', () => {
        expect(f.isNumber(NaN)).toBeFalsy() 
    });
    it('should be false...', () => {
        expect(f.isNumber(Array.isArray)).toBeFalsy() 
    });
});






