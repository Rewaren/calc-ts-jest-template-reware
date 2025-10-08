function multiply(a: number, b: number): number {
    return (a*b);
}

function calculatePercentage(part: number, total: number): string {
    const percentage = (part / total) * 100;
    const formatted = `${percentage.toFixed(2)}%`;
    return formatted;
}

console.log(calculatePercentage(2, 10))