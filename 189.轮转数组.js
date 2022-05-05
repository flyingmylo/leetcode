/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 * 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 * 
 * 示例 2:
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释: 
 * 向右轮转 1 步: [99,-1,-100,3]
 * 向右轮转 2 步: [3,99,-1,-100]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	// if (nums.length > k) {
	// 	nums.unshift(...nums.splice(-k));
	// 	return nums;
	// } else if (nums.length === k) {
	// 	return nums;
	// } else {
	// 	nums.unshift(...nums.splice());
	// 	return nums;
	// }

	nums.unshift(...nums.splice(nums.length > k ? -k : -(k % nums.length)));
	return nums;
};

// @lc code=end
