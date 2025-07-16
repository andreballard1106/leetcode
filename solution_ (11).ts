function maxArea(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = minHeight * width;
        
        maxArea = Math.max(maxArea, area);
        

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}