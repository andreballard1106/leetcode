// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val);
//         this.next = (next===undefined ? null : next);
//     }
// }

// MinHeap implementation
class MinHeap {
    private heap: ListNode[];

    constructor() {
        this.heap = [];
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private left(i: number): number {
        return 2 * i + 1;
    }

    private right(i: number): number {
        return 2 * i + 2;
    }

    public push(node: ListNode): void {
        this.heap.push(node);
        this.heapifyUp();
    }

    public pop(): ListNode | undefined {
        if (this.heap.length === 0) return undefined;
        const root = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return root;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index].val < this.heap[this.parent(index)].val) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    private heapifyDown(): void {
        let index = 0;
        const length = this.heap.length;
        while (this.left(index) < length) {
            let smallerChild = this.left(index);
            if (this.right(index) < length && this.heap[this.right(index)].val < this.heap[this.left(index)].val) {
                smallerChild = this.right(index);
            }

            if (this.heap[index].val <= this.heap[smallerChild].val) break;

            this.swap(index, smallerChild);
            index = smallerChild;
        }
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const minHeap = new MinHeap();

    // Add initial nodes to the heap
    for (let node of lists) {
        if (node !== null) {
            minHeap.push(node);
        }
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (!minHeap.isEmpty()) {
        const smallest = minHeap.pop()!;
        current.next = smallest;
        current = current.next;

        if (smallest.next !== null) {
            minHeap.push(smallest.next);
        }
    }

    return dummy.next;
}
