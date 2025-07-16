function intToRoman(num: number): string {
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = "";
    let idx = 0;

    while (num > 0) {
        if (num >= values[idx]) {
            roman += symbols[idx];
            num -= values[idx];
        } else {
            idx++;
        }
    }

    return roman;
}