/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
 *
 * https://leetcode.cn/problems/search-in-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (77.48%)
 * Likes:    303
 * Dislikes: 0
 * Total Accepted:    182.6K
 * Total Submissions: 235.6K
 * Testcase Example:  '[4,2,7,1,3]\n2'
 *
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
 * 
 * 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 
 * 
 * 输入：root = [4,2,7,1,3], val = 2
 * 输出：[2,1,3]
 * 
 * 
 * Example 2:
 * 
 * 
 * 输入：root = [4,2,7,1,3], val = 5
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 数中节点数在 [1, 5000] 范围内
 * 1 <= Node.val <= 10^7
 * root 是二叉搜索树
 * 1 <= val <= 10^7
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
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function (root, val) {
//   // 递归版
//   if (!root) return null
//   if (root.val === val) return root

//   return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val)
// };

// 迭代版
var searchBST = function (root, val) {
  if (!root) return null

  while (root) {
    if (root.val === val) return root
    else if (root.val > val) root = root.left
    else root = root.right
  }

  // 搜索不到时返回 null
  return null
}
// @lc code=end

