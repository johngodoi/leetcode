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

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

// The shift() method in JavaScript is used to remove the first element from an array and return that removed element. This method changes the length of the array.

// We need to traverse the tree level by level (Breadth-First Search - BFS) and, for each level, calculate the average of the node values.
// Algorithm
// 1. Initialization:
// - Create an empty array result to store the averages.
// - If the root is null, return the empty result array.
// - Create a queue q and add the root to it.
// 2. Breadth-First Search (BFS):
// - While the queue q is not empty:
// -- Get the current level's size (levelSize).
// -- Initialize a sum to 0.
// -- Iterate levelSize times:
// --- Dequeue a node from q.
// --- Add the node's value to sum.
// --- If the node has a left child, enqueue it.
// --- If the node has a right child, enqueue it.
// -- Calculate the average (sum / levelSize).
// -- Push the average to the result array.
// 3. Return: Return the result array.

function averageOfLevels(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (!root) {
        return result;
    }

    const q: TreeNode[] = [root];
    while (q.length > 0) {
        const levelSize = q.length;
        let sum = 0;
        for (let i = 0; i < levelSize; i++) {
            const node = q.shift()!; // Non-null assertion since q.length > 0
            sum += node.val;
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        result.push(sum / levelSize);
    }
    return result;
};