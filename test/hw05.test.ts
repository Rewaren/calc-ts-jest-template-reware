import {MathFunctions} from '../src/HW05'

describe('HW05 Functions Class testing', () => {
    let func: MathFunctions

    test('should add two numbers correctly', () => {
        func = new MathFunctions()
        expect(func.multiply(2, 3)).toBe(6)
    })

    test('should add two numbers correctly', () => {
        func = new MathFunctions()
        expect(func.calculatePercentage(2, 10)).toBe("20.00%")
    })

})