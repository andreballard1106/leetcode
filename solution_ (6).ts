function convert(s: string, numRows: number): string {
    if (numRows == 1) {
        return s
    }
    let ret = ""
    let n = s.length
    for (let i = 0; i < numRows; ++i) {
        let startNum = i
        let tempRows = numRows - i
        while (startNum < n) {
            ret += s[startNum]
            if (i != 0 && i != numRows - 1) {
                if (startNum + 2 * (tempRows - 1) < n) {
                    ret += s[startNum + 2 * (tempRows - 1)]
                }
            }
            startNum = startNum + 2 * (numRows - 1)
        }
    }
    return ret;
};