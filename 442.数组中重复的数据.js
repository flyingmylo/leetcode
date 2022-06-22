/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 不满足时间复杂度为 O(n) 的要求
// var findDuplicates = function (nums) {
//   const n = nums.length,
//     twins = new Map(),
// 		ans =[]

//   for (const value of nums) {
//     if (!twins.has(value)) {
//       twins.set(value, 1);
//     } else {
//       twins.set(value, twins.get(value) + 1);
//     }
// 		if(twins.get(value) > 1) {
// 			ans.push(value)

// 		}
//   }

// 	return ans
// };

/**
 * @param {number[]} nums
 * 由于 1 <= nums[i] <= n，所以 nums[i]-1 可以被视为一个索引
 * （索引从 0 开始，最小值为 1， 所以减去 1）
 * 如果值为正数，就原地修改该索引对应的值为负数
 * 如果值为负数，说明已经出现过，即重复的数字
 *  */
//  哈希表
var findDuplicates = function (nums) {
	const ans = [];

	for (let i = 0; i < nums.length; i++) {
		let absKey = Math.abs(nums[i]);
		// 所有整数都在 [1, n] 的范围内，所以可以将元素当成数组的下标
		// length 从 0 开始，所以减 1
		if (nums[absKey - 1] > 0) {
			// 把数组中的元素变成负数，标记为负代表已经出现过
			nums[absKey - 1] *= -1;
		} else {
			// 重复的元素
			ans.push(absKey);
		}
	}

	return ans;
};

// @lc code=end
