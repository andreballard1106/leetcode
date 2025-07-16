function romanToInt(s: string): number {

    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let idx:number = 1;
    let sum: number = 0;

    while(idx < symbols.length) {
        if(s.indexOf(symbols[idx]) !== -1) {
            s = s.replace(symbols[idx], "");
            sum += values[idx];
        } else idx+=2;
    }

    idx = 0;

    while(idx < symbols.length) {
        if(s.indexOf(symbols[idx]) !== -1) {
            s = s.replace(symbols[idx], "");
            sum += values[idx];
        } else idx+=2;
    }

    return sum;

};