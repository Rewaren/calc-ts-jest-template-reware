import {multiply, calculatePercentage, isEven, compareStrings, isPositive} from '../src/HW05'

describe('HW05 Functions testing', () => {

    // Test multiply
    test('multiply two positive integer numbers', () => {
        expect(multiply(2, 3)).toBe(6)
    })
    test('multiply one positive integer and one negative integer number', () => {
        expect(multiply(2, -3)).toBe(-6)
    })
    test('multiply two negative integer numbers', () => {
        expect(multiply(-2, -3)).toBe(6)
    })

    //Test calculatePercentage
    test('calculate percentage when one number is part of another', () => {
        expect(calculatePercentage(2, 10)).toBe("20.00%")
    })
    test('calculate percentage when one number is negative', () => {
        expect(calculatePercentage(-2, 10)).toBe("Input contains negative number.")
    })
    test('calculate percentage when both numbers are negative', () => {
        expect(calculatePercentage(-2, -10)).toBe("Input contains negative number.")
    })

    // Test isEven
    test('return true for positive even number', () => {
        expect(isEven(2)).toBeTruthy()
    })
    test('return false for positive not even number', () => {
        expect(isEven(5)).toBeFalsy()
    })
    test('return false for negative not even number', () => {
        expect(isEven(-1)).toBeFalsy()
    })

    // Test compareStrings
    test('return true for two same strings', () => {
        expect(compareStrings("apple", "apple")).toBeTruthy()
    })
    test('return false for same strings, but one is shouting', () => {
        expect(compareStrings("apple", "APPLE")).toBeFalsy()
    })
    test('return false for different strings', () => {
        expect(compareStrings("apple", "banana")).toBeFalsy()
    })

    // Test isPositive
    test('return true for positive integer number', () => {
        expect(isPositive(5)).toBeTruthy()
    })
    test('return false for negative integer number', () => {
        expect(isPositive(-1)).toBeTruthy()
    })
    test('return true for zero', () => {
        expect(isPositive(0)).toBeTruthy()
    })

})