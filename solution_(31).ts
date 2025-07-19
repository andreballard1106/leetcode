function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;

    // Step 1: Find first decreasing index from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find first number greater than nums[i] from the end
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Step 3: Swap nums[i] and nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the subarray from i + 1 to end
    reverse(nums, i + 1, nums.length - 1);

    function reverse(arr: number[], left: number, right: number): void {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
}
