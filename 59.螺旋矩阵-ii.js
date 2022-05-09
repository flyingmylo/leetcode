/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (76.47%)
 * Likes:    703
 * Dislikes: 0
 * Total Accepted:    194.1K
 * Total Submissions: 254.1K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let left = 0,
		right = n - 1,
		top = 0,
		bottom = n - 1,
		index = 1;
	const ans = new Array(n).fill(0).map(() => new Array(n).fill(0));

	while (index <= n * n) {
		// 从左往右
		for (let i = left; i <= right; i++) {
			ans[top][i] = index++;
		}
		top++;
		// 从上往下
		for (let i = top; i <= bottom; i++) {
			ans[i][right] = index++;
		}
		right--;
		// 从右往左
		for (let i = right; i >= left; i--) {
			ans[bottom][i] = index++;
		}
		bottom--;
		// 从下往上
		for (let i = bottom; i >= top; i--) {
			ans[i][left] = index++;
		}
		left++;
	}

	return ans;
};

// @lc code=end
