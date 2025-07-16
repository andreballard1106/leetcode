function lengthOfLongestSubstring(s: string): number {
    let idx = 0;
    let result = 0;
    let lastLength = 0;
    let visitedChars = new Map<string, number>();

    while (idx < s.length) {
        if (visitedChars.has(s[idx])) {
            lastLength = Math.max(lastLength, visitedChars.get(s[idx])! + 1);
        }
        
        visitedChars.set(s[idx], idx);
        
        result = Math.max(result, idx - lastLength + 1);
        
        idx++;
    }

    return result;
}
