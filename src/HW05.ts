export function multiply(a: number, b: number): number {
    return (a*b);
}

export function calculatePercentage(part: number, total: number): string {
    const percentage = (part / total) * 100;
    const formatted = `${percentage.toFixed(2)}%`;
    return formatted;
}

export function isEven(num: number): boolean {
    return num % 2 === 0;
}

export function compareStrings(text1: string, text2: string): boolean{
    return text1 === text2;
}

export function isPositive(num: number): boolean{
    return num > 0;
}

console.log(calculatePercentage(2, 10)) // 20.00%
console.log(isEven(5)) // false
console.log(compareStrings("apple", "apple")); // true
console.log(compareStrings("apple", "banana")); // false
console.log(isPositive(-1)) // false
console.log(isPositive(5)) // true