/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 *
 * https://leetcode.cn/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (60.09%)
 * Likes:    413
 * Dislikes: 0
 * Total Accepted:    76.7K
 * Total Submissions: 127.7K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
 *
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,2,3,1]
 * 输出：2
 * 解释：
 * 输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
 * 连续子数组里面拥有相同度的有如下所示：
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,2,3,1,4,2]
 * 输出：6
 * 解释：
 * 数组的度是 3 ，因为元素 2 重复出现 3 次。
 * 所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums.length 在 1 到 50,000 范围内。
 * nums[i] 是一个在 0 到 49,999 范围内的整数。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
	const mp = {};

	for (const [i, num] of nums.entries()) {
		if (num in mp) {
			mp[num][0]++;
			mp[num][2] = i;
		} else {
			// 值：[次数，第一次出现的位置，最后一次出现的位置]
			mp[num] = [1, i, i];
		}
	}

	// let degree = Object.values(mp).reduce((a, b) => a[0] > b[0] ? a : b, [0, 0, 0])[0];
	let arr = Object.values(mp).sort((a, b) => b[0] - a[0]);
	// 最大次数（度）
	let degree = arr[0][0];
	// 最短数组的长度，默认取第一组的是最短，下标为0
	let minLen = arr[0][2] - arr[0][1] + 1;
	// 从 1 开始遍历
	for (let i = 1; i < arr.length; i++) {
		if (arr[i][0] === degree) {
			minLen = Math.min(minLen, arr[i][2] - arr[i][1] + 1);
		}
	}
	return minLen;
};
// @lc code=end
