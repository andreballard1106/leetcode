function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];

    if (words.length === 0 || s.length === 0) return result;

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    if (s.length < totalLen) return result;

    const wordMap: Record<string, number> = {};

    // Count each word's frequency
    for (const word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    // Check for each possible start offset (0 to wordLen - 1)
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let currentMap: Record<string, number> = {};
        let count = 0;

        while (right + wordLen <= s.length) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (word in wordMap) {
                currentMap[word] = (currentMap[word] || 0) + 1;
                count++;

                // If a word appears too many times, shrink the window
                while (currentMap[word] > wordMap[word]) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentMap[leftWord]--;
                    count--;
                    left += wordLen;
                }

                // Found a valid window
                if (count === wordCount) {
                    result.push(left);
                }
            } else {
                // Reset window if word not in list
                currentMap = {};
                count = 0;
                left = right;
            }
        }
    }

    return result;
}
