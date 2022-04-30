/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			if (i === 1 || nums[i] >= nums[i - 2]) {
				nums[i - 1] = nums[i];
			} else {
				nums[i] = nums[i - 1];
			}
			count++;
		}
	}
	return count <= 1;
};

// @lc code=end
