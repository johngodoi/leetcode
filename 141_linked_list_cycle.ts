
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycleRec(current: ListNode, previousNodes: ListNode[]): boolean{
    if(previousNodes.includes(current)) return true;
    else if(current.next == null) return false;
    previousNodes.push(current);
    return hasCycleRec(current.next, previousNodes);
}
function hasCycle(head: ListNode | null): boolean {
    if(head == null) return false;
    if(head.next == null) return false;
    return hasCycleRec(head.next, [head]);
};