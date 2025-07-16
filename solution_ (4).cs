class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int len1 = nums1.size(), len2 = nums2.size();
        int totalLen = len1 + len2;
        int mid = totalLen / 2;
        
        int i = 0, j = 0;
        int prev = 0, curr = 0;

        // Merge process: find the median element by iterating through the arrays
        for (int k = 0; k <= mid; ++k) {
            prev = curr;
            if (i < len1 && (j >= len2 || nums1[i] <= nums2[j])) {
                curr = nums1[i];
                i++;
            } else {
                curr = nums2[j];
                j++;
            }
        }

        // If the total length is odd, return the middle element
        if (totalLen % 2 == 1) {
            return curr;
        } else {
            // If even, return the average of the two middle elements
            return (prev + curr) / 2.0;
        }
    }
};