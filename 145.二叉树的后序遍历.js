/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (75.89%)
 * Likes:    880
 * Dislikes: 0
 * Total Accepted:    469.5K
 * Total Submissions: 617.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
// 递归版本
var postorderTraversal = function (root) {
	const ans = []

	const traverse = (root) => {
		if (!root) return null
		traverse(root.left)
		traverse(root.right)
		ans.push(root.val)
	}
	traverse(root)
	return ans
}

// 迭代版本
var postorderTraversal = function (root) {
	if (!root) return []
	const ans = [],
		stack = [root]
	let cur

	while (stack.length) {
		cur = stack.pop()
		ans.unshift(cur.val)
		cur.left && stack.push(cur.left)
		cur.right && stack.push(cur.right)
	}

	return ans
}
// @lc code=end
