// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 

function maxDepth(root: TreeNode | null): number {
    if(root == null) return 0;
    if(root.right == null && root.left == null) return 1;
    const rightDepth = maxDepth(root.right)
    const leftDepth = maxDepth(root.left)
    return (rightDepth <= leftDepth? leftDepth: rightDepth)+1;
};