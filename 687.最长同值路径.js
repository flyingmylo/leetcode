/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 *
 * https://leetcode.cn/problems/longest-univalue-path/description/
 *
 * algorithms
 * Medium (45.07%)
 * Likes:    573
 * Dislikes: 0
 * Total Accepted:    47K
 * Total Submissions: 104.2K
 * Testcase Example:  '[5,4,5,1,1,5]'
 *
 * 给定一个二叉树的 root ，返回 最长的路径的长度 ，这个路径中的 每个节点具有相同值 。 这条路径可以经过也可以不经过根节点。
 *
 * 两个节点之间的路径长度 由它们之间的边数表示。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入：root = [5,4,5,1,1,5]
 * 输出：2
 *
 *
 * 示例 2:
 *
 *
 *
 *
 * 输入：root = [1,4,5,4,4,5]
 * 输出：2
 *
 *
 *
 *
 * 提示:
 *
 *
 * 树的节点数的范围是 [0, 10^4]
 * -1000 <= Node.val <= 1000
 * 树的深度将不超过 1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
	if (root === null) return 0

	let ans = 0
	const maxLen = (root, parentVal) => {
		if (root === null) return 0

		// 左子树的最长同值路径
		const left = maxLen(root.left, root.val)
		// 右子树的最长同值路径
		const right = maxLen(root.right, root.val)

		ans = Math.max(ans, left + right)

		// 如果 root 本身和父值不同，那整棵树就咩有同值
		if (root.val !== parentVal) return 0

		// 加上根节点
		return Math.max(left, right) + 1
	}

	maxLen(root, root.val)

	return ans
}
// @lc code=end
