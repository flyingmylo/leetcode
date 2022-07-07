/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 *
 * https://leetcode.cn/problems/n-ary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (78.00%)
 * Likes:    257
 * Dislikes: 0
 * Total Accepted:    110.1K
 * Total Submissions: 141.1K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。
 *
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[5,6,3,2,4,1]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root =
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * 输出：[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 节点总数在范围 [0, 10^4] 内
 * 0 <= Node.val <= 10^4
 * n 叉树的高度小于或等于 1000
 *
 *
 *
 *
 * 进阶：递归法很简单，你可以使用迭代法完成此题吗?
 *
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
	if (root === null) return []
  
	const ans = [],
		stack = [root]

	// 迭代版 先进后出
	while (stack.length) {
		// 取出栈顶元素
		const cur = stack.pop()
		// 如果当前元素不为空，则将其子节点入栈
		stack.push(...cur.children)

		// 将当前元素放入 ans
		ans.unshift(cur.val)
	}
	return ans
	// 递归版
	// const traverse = (root) => {
	// 	if (!root) return

	// 	for (const children of root.children) {
	// 		traverse(children)
	// 	}

	// 	ans.push(root.val)
	// }

	// traverse(root)

	// return ans
}
// @lc code=end
