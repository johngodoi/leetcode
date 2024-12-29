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

function isSymmetricRec(right: TreeNode | null, left: TreeNode | null): boolean {
    if(right == null && left == null) return true;
    if(right == null && left != null) return false;
    if(left == null && right != null) return false;
    if(right!.val != left!.val) return false;
    return isSymmetricRec(right!.right, left!.left) && isSymmetricRec(right!.left, left!.right);
}

function isSymmetric(root: TreeNode | null): boolean {
    if(root == null) return true;
    if(root.right == null && root.left == null) return true;
    if(root.right != null && root.left == null) return false;
    if(root.right == null && root.left != null) return false;
    if(root!.right!.val != root!.left!.val) return false;
    return isSymmetricRec(root.right, root.left);
};