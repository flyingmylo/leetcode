/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let s = target - nums[i];
    if (map.has(s)) {
      return [map.get(s), i];
    } else {
      // 如果不存在，则添加到map中, 把下标存为值
      map.set(nums[i], i);
    }
  }
};
// @lc code=end
