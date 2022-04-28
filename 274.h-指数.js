/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	citations.sort((a, b) => a - b);
	const n = citations.length;
  
	for (let i = 0; i < n; i++) {
		let h = n - i;
		if (h <= citations[i]) {
			return h;
		}
	}
	return 0;
};
console.log(hIndex([3, 0, 6, 1, 5]));
// @lc code=end
