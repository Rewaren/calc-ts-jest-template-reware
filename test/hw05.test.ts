import {multiply, calculatePercentage, isEven, compareStrings, isPositive} from '../src/HW05'

describe('HW05 Functions testing', () => {

    test('multiply two integer positive numbers', () => {
        expect(multiply(2, 3)).toBe(6)
    })
    test('multiply one integer positive and one negative number', () => {
        expect(multiply(2, -3)).toBe(-6)
    })

    test('calculate percentage when one number is part of another', () => {
        expect(calculatePercentage(2, 10)).toBe("20.00%")
    })
    //test('calculate percentage when one number is negative', () => {
    //    expect(calculatePercentage(-2, 10)).toBe("20.00%") // !!!!
    //})
    //test('calculate percentage when both numbers are negative', () => {
    //    expect(calculatePercentage(-2, 10)).toBe("20.00%") // !!!!
    //})

    test('return true for positive even integer number', () => {
        expect(isEven(2)).toBeTruthy()
    })
    test('return false for positive not even integer number', () => {
        expect(isEven(5)).toBeFalsy()
    })
    test('return false for negative not even integer number', () => {
        expect(isEven(-1)).toBeFalsy()
    })

    test('return true for two same strings', () => {
        expect(compareStrings("apple", "apple")).toBeTruthy()
    })
    test('return false for same strings, but one is shouting', () => {
        expect(compareStrings("apple", "APPLE")).toBeFalsy()
    })

    test('return true for positive integer number', () => {
        expect(isPositive(5)).toBeTruthy()
    })

})