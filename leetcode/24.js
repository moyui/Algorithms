var swapPairs = function(head) {
    var dummy = new ListNode();
    dummy.next = head;
    head = dummy;
    while (head.next != null && head.next.next != null) {
        var n1 = head.next;
        var n2 = head.next.next;
        head.next = n2;
        n1.next = n2.next;
        n2.next = n1;

        head = n1;
    }
    return dummy.next;
};