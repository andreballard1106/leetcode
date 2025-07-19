function divide(dividend: number, divisor: number): number {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Handle overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Determine the sign of the result
    const isNegative = (dividend < 0) !== (divisor < 0);

    // Convert both numbers to positive using BigInt to handle abs(INT_MIN)
    let a = BigInt(Math.abs(dividend));
    let b = BigInt(Math.abs(divisor));
    let result = BigInt(0);

    // Use bit manipulation to compute quotient
    for (let i = 31; i >= 0; i--) {
        if (a >= (b << BigInt(i))) {
            a -= b << BigInt(i);
            result += BigInt(1) << BigInt(i);
        }
    }

    // Apply sign
    result = isNegative ? -result : result;

    // Clamp result to 32-bit signed integer range
    if (result > BigInt(INT_MAX)) return INT_MAX;
    if (result < BigInt(INT_MIN)) return INT_MIN;

    return Number(result);
}
