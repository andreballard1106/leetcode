// class ListNode {
//     val: number;
//     next: ListNode | null;

//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val);
//         this.next = (next===undefined ? null : next);
//     }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;

    for (let i = 0; i < n + 1; i++) {
        if (first) first = first.next;
    }

    while (first !== null) {
        first = first.next;
        if (second) second = second.next;
    }

    if (second && second.next) {
        second.next = second.next.next;
    }

    return dummy.next;
}
