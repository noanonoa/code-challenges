/*
* Rotate Array
* 
* Given an array, rotate the array to the right by `k` steps,
* where `k` is non-negative.
* 
* Constraints:
* 1 <= nums.length <= 10^5
* -2^31 <= nums[i] <= 2^31 - 1
* 0 <= k <= 10^5
* 
* Example:
* Input: nums = [1,2,3,4,5,6,7], k = 3
* Output: [5,6,7,1,2,3,4]
* 
* Explanation:
* rotate 1 steps to the right: [7,1,2,3,4,5,6]
* rotate 2 steps to the right: [6,7,1,2,3,4,5]
* rotate 3 steps to the right: [5,6,7,1,2,3,4]
* 
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead
*/

// O(n) solution, recursively:
const rotate = (nums, k) => {
  const calculateRotationAmount = (nums, k) => { 
    if (k / nums.length <= 1) {
      return k;
    } else {
      k -= nums.length;
      return calculateRotationAmount(nums, k);
    }
  };

  const rotationAmount = calculateRotationAmount(nums, k);
  const rotatedValues = nums.splice(-rotationAmount, rotationAmount);
  nums.splice(0,0,...rotatedValues);
  return nums;
};

console.log(rotate([1,2,3,4,5], 2)); // -> [4,5,1,2,3]
console.log(rotate([1,2,3,4,5], 9)); // -> [2,3,4,5,1]
