//归并排序
var mergeTwoLists = function(head1, head2) {
    if (head1 == null && head2 == null) return null;
    if (head1 == null) return head2;
    if (head2 == null) return head1;
    var dummy = new ListNode();
    var curr = dummy;
    var cur1 = head1, cur2 = head2;
    while (cur1 != null && cur2 != null) {
        if (cur1.val < cur2.val) {
            curr.next = cur1;
            cur1 = cur1.next;
        } else {
            curr.next = cur2;
            cur2 = cur2.next;
        }
        curr = curr.next;
    }
    if (cur1 != null) curr.next = cur1;
    if (cur2 != null) curr.next = cur2;
    return dummy.next;
}

var mergeKLists = function(lists) {
    if (lists.length == 0) return null;
    if (lists.length == 1) return lists[0];
    var mid = Math.floor(lists.length / 2);
    var left = mergeKLists(lists.slice(0, mid));
    var right = mergeKLists(list.slice(mid));
    return mergeTwoLists(left, right);
};

//还可以用最小堆