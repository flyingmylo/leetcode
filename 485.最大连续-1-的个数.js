/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let count,temp = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count++;
		} else {
      temp = Math.max(temp,count)
      count = 0;
    }
	}
  return Math.max(temp,count)
	// return nums.join('').split('0').reduce((max,i)=> Math.max(max, i.length),0)
};
// @lc code=end
