const f = require('../30_Factorial.js')

describe('Is Number', () => {
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
    it('should be true...', () => {
        expect(f.isNumber(3)).toBeTruthy() 
    });
    it('should be true...', () => {
        expect(f.isNumber(-5)).toBeTruthy()  
    });
    it('should be true...', () => {
        expect(f.isNumber(3.5)).toBeTruthy()  
    });
});

describe('Factorial ', () => {
    it('should be 120...', () => {
        expect(f.factorial(5)).toEqual(120)
    });
});




