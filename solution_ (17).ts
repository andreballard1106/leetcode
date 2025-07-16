function letterCombinations(digits: string): string[] {
    if (!digits) return [];

    const digitToChar: { [key: string]: string[] } = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    const result: string[] = [];

    function backtrack(index: number, current: string): void {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        for (const char of digitToChar[digits[index]]) {
            backtrack(index + 1, current + char);
        }
    }

    backtrack(0, "");
    return result;
}
