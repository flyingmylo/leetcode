/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 *
 * https://leetcode.cn/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (39.68%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    73.5K
 * Total Submissions: 185.4K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 *
 * 请注意，你可以假定字符串里不包括任何不可打印的字符。
 *
 * 示例:
 *
 * 输入: "Hello, my name is John"
 * 输出: 5
 * 解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
	if (!s) return 0;

	return s
		.replace(/\s/g, " ")
		.split(" ")
		.filter((v) => v).length;
	//   let count = 0;

	//   for (let i = 0; i < s.length; i++) {
	//     // 前一个为空格，当前不为空格
	//     if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
	//       count++;
	//     }
	//   }

	//   return count;
};
// @lc code=end
