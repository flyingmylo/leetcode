/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 *
 * https://leetcode.cn/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (52.35%)
 * Likes:    379
 * Dislikes: 0
 * Total Accepted:    95.4K
 * Total Submissions: 182.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4]
 * 输出：24
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [-1,-2,-3]
 * 输出：-6
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3
 * -1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
	const _nums = nums.sort((a, b) => a - b);

	return Math.max(
		// 有正有负
		_nums[0] * _nums[1] * _nums.at(-1),
		// 全都为负数，或者全是正数
		_nums.at(-1) * _nums.at(-2) * _nums.at(-3)
	);
};
// @lc code=end
