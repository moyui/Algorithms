var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
    else if (l2 == null) return l1;

    var head = null;
    if (l1.val < l2.val) {
        head = l1;
        head.next = mergeTwoLists(l1.next, l2);
    } else {
        head = l2;
        head.next = mergeTwoLists(l1, l2.next);
    }
    return head;
};