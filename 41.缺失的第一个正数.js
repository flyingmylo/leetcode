/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * 示例 1：输入：nums = [1,2,0] 输出：3
 * 示例 2：输入：nums = [3,4,-1,1] 输出：2
 * 示例 3：输入：nums = [7,8,9,11,12] 输出：1
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 原地哈希法
 * 1. 假设数组长度为 n ，那么没有出现的最小正整数一定在 [1, n+1] 之间
 * 2. 假设数组中的每个数字都是正整数，并且 nums[i] 是小于 n，并且满足条件时
 * 3. 交换位置
 *  */

var firstMissingPositive = function (nums) {
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
			let temp = nums[nums[i] - 1];
			nums[nums[i] - 1] = nums[i];
			nums[i] = temp;
		}
	}
	for (let i = 0; i < n; i++) {
		if (nums[i] !== i + 1) {
			return i + 1;
		}
	}

	// 如果没有找到，那么最小正整数就是 n+1
	return n + 1;
};
// @lc code=end

// console.log(firstMissingPositive([1,2,0]))
