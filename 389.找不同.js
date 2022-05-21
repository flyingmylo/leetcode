/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode.cn/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (68.42%)
 * Likes:    326
 * Dislikes: 0
 * Total Accepted:    127K
 * Total Submissions: 185.7K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t ，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "", t = "y"
 * 输出："y"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s 和 t 只包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function (s, t) {
  let s_sum = 0, t_sum = 0;

  for (let i = 0; i < s.length; i++) {
    s_sum += s[i].charCodeAt()
  }

  for (let j = 0; j < t.length; j++) {
    t_sum += t[j].charCodeAt()
  }

  // fromCharCode 静态方法返回使用指定的代码点序列创建的字符串
  return String.fromCharCode(t_sum - s_sum)

};
// @lc code=end

