function twoSum(nums: number[], target: number): number[] {
    const Numbers = new Map<number, number>();
    
    for (let idx in nums) {
        let item: number = nums[+idx];
        
        if (Numbers.has(target - item)) {
            return [Numbers.get(target - item)!, +idx];
        }
        
        Numbers.set(item, +idx);
    }
    return [];
};

// function twoSum(nums: number[], target: number): number[] {
//     const numberIdx: Record<number, number> = {};

//     for (let idx in nums) {
//         const number = nums[+idx];
//         const complement = target - number;

//         if (complement in numberIdx) {
//             return [numberIdx[complement], +idx];
//         } else {
//             numberIdx[number] = +idx;
//         }
//     }
// }