var reverseKGroup = function(head, k) {
    if (head == null || k <= 1) return head;
    var node = new ListNode();
    node.next = head;
    head = node;
    while (head.next != null) {
        head = reverseCore(head, k);
    }
    return node.next;
};

function reverseCore(head, k) {
    var next = head;
    for (var i = 0; i < k; i++) {
        if (next.next == null) return next;
        next = next.next;
    }
    var n1 = head.next;
    var prev = head, curt = n1;
    for (var i = 0; i < k; i++) {
        var temp = curt.next;
        curt.next = prev;
        prev = curt;
        curt = temp;
    }
    n1.next = curt;
    head.next = prev;
    return n1;
}