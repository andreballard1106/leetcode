/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0, head);
    let prevGroupEnd = dummy;

    while (true) {
        // Find the kth node from prevGroupEnd
        let kth = getKthNode(prevGroupEnd, k);
        if (!kth) break;

        let groupStart = prevGroupEnd.next;
        let nextGroupStart = kth.next;

        // Reverse group
        let prev = kth.next;
        let curr = groupStart;
        while (curr !== nextGroupStart) {
            const temp = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = temp;
        }

        // Connect previous group to new head
        prevGroupEnd.next = kth;
        prevGroupEnd = groupStart!;
    }

    return dummy.next;
}

function getKthNode(start: ListNode, k: number): ListNode | null {
    let curr = start;
    while (k > 0 && curr) {
        curr = curr.next!;
        k--;
    }
    return k === 0 ? curr : null;
}
