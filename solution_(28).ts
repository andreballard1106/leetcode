function strStr(haystack: string, needle: string): number {
    const hLen = haystack.length;
    const nLen = needle.length;

    if (nLen === 0) return 0;

    for (let i = 0; i <= hLen - nLen; i++) {
        if (haystack.substring(i, i + nLen) === needle) {
            return i;
        }
    }

    return -1;
}
