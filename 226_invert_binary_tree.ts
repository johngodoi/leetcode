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

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root == null) return null;
    if(root.right == null && root.left == null) return root;
    if(root.right != null && root.left == null){
        root.left = invertTree(root.right);
        root.right = null;
        return root;
    }
    if(root.right == null && root.left != null){
        root.right = invertTree(root.left);
        root.left = null;
        return root;
    }
    const right = invertTree(root.left)
    const left = invertTree(root.right)
    root.right = right;
    root.left = left;
    return root;
};