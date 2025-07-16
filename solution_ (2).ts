function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let addPos: number = 0;
    let result: ListNode;
    while(true) {
        if(l1 == null && l2 == null) {
            if(addPos == 1) result = new ListNode(addPos, result);
            let newRes : ListNode;
            while(result != null) {
                newRes = new ListNode(result.val, newRes);
                result = result.next;
            }
            return newRes;
            break;
        }
        let temp: number = (l1?.val == undefined ? 0 : l1.val) + (l2?.val == undefined ? 0 : l2.val) + addPos;
    
        addPos = Math.floor(temp / 10) ;
        result = new ListNode(temp % 10, result);
        l1 = l1?.next;
        l2 = l2?.next;
    }
};

