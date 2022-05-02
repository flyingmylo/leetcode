/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	if (numRows === 0) return [];
	// 第 0 个元素 始终是 [1]
	const ans = [[1]];

	for (let i = 1; i < numRows; i++) {
		// 总共有 i+1 个数组
		ans[i] = [];
		// 每个数组中的第 0 个值和且最后一个值都是 1
		ans[i][0] = ans[i][i] = 1;

		for (let k = 1; k < i; k++) {
			// 下一行的值等于 上一行的值错一位再与之相加的和
			ans[i][k] = ans[i - 1][k - 1] + ans[i - 1][k];
		}
	}
	return ans;
};
// @lc code=end
