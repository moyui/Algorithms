function deleteDuplication(pHead) {
    if(pHead === null || pHead.next === null) {
        return pHead;
    }
    var p = pHead;
    if(pHead.val === p.next.val) {
        p = p.next.next;
        while(p !== null && p.val === pHead.val) {
            p = p.next;
        }
        return deleteDuplication(p)
    }else {
        p = pHead.next;
        pHead.next = deleteDuplication(p);
        return pHead;
    }
}