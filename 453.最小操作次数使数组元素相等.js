/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 * 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

示例 1：
输入：nums = [1,2,3]
输出：3
解释：
只需要3次操作（注意每次操作会增加两个元素的值）：
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

示例 2：
输入：nums = [1,1,1]
输出：0
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 每次操作都使 N-1 个元素增加 1 ，也就是说每次需要 1 个元素自减 1
 * 那么要想让所有元素相等（都是最小值），就要计算每个元素要变成最小值的次数
 * 对「每个元素变成最小值的次数」进行求和，就是「最小操作次数」
 */
var minMoves = function (nums) {
	const _min = Math.min(...nums);
	let ans = 0;

	for (const v of nums) {
		ans += v - _min;
	}
	return ans;
};

// @lc code=end
