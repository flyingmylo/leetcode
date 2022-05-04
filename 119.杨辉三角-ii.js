/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	const ans = [[1]];

  // rowIndex 索引从零开始，第 rowIndex 行意味着有 rowIndex + 1 行数据
	for (let i = 1; i <= rowIndex; i++) {
		// 总共有 i+1 个数组
		ans[i] = [];
		// 每个数组中的第 0 个值和且最后一个值都是 1
		ans[i][0] = ans[i][i] = 1;

		for (let k = 1; k < i; k++) {
			// 下一行的值等于 上一行的值错一位再与之相加的和
			ans[i][k] = ans[i - 1][k - 1] + ans[i - 1][k];
		}
	}

	return ans[rowIndex];
};

// @lc code=end
