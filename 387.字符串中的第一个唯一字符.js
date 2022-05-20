/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode.cn/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (54.83%)
 * Likes:    551
 * Dislikes: 0
 * Total Accepted:    298.7K
 * Total Submissions: 544.2K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "leetcode"
 * 输出: 0
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "loveleetcode"
 * 输出: 2
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "aabb"
 * 输出: -1
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length <= 10^5
 * s 只包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let _s = s.split(""),
		map = new Map();
	
		// 把每个字母出现的次数存入map
	for (const v of _s) {
		if (!map.has(v)) {
			map.set(v, 1);
		} else {
			map.set(v, map.get(v) + 1);
		}
	}

	// 找到第一个出现次数为1的字母
	for (let i = 0; i < _s.length; i++) {
		if (map.get(_s[i]) === 1) {
			return i;
		}
	}

	return -1;
};
firstUniqChar("aabb");
// @lc code=end
