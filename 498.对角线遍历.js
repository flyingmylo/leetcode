/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 *
 * https://leetcode-cn.com/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (49.66%)
 * Likes:    293
 * Dislikes: 0
 * Total Accepted:    59.1K
 * Total Submissions: 118.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,4,7,5,3,6,8,9]
 *
 *
 * 示例 2：
 *
 *
 * 输入：mat = [[1,2],[3,4]]
 * 输出：[1,2,3,4]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 10^4
 * 1 <= m * n <= 10^4
 * -10^5 <= mat[i][j] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
	const row = mat.length,
		col = mat[0].length;
	const map = new Map();

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (!map.has(i + j)) {
				// 每个方向的 行+列 坐标的和相同，把所有同一方向的值存为一个空数组用来占位
				map.set(i + j, []);
			}
			// 为同一方向的坐标填充值
			map.get(i + j).push(mat[i][j]);
		}
	}

	const ans = [];
	for (let [key, value] of map.entries()) {
		// 偶数行表示右上到左下方向
		if (key % 2 === 0) {
			ans.push(...value.reverse());
		} else {
			// 奇数行表示左上到右下方向
			ans.push(...value);
		}
	}
};

// @lc code=end
