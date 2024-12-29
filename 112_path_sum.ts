/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root == null) return false;
    if(root.right == null && root.left == null && root.val == targetSum) return true;
    const nextTargetSum = (targetSum > 0)? targetSum - root.val : targetSum + (-1*root.val)
    return hasPathSum(root.right, nextTargetSum) || hasPathSum(root.left, nextTargetSum)
};