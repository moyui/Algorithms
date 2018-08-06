function meetingNode(pHead)
{
    if (pHead == null) return null;
    var slow = pHead;
    slow = slow.next;
    if (slow == null) return null;
    var fast = slow.next;
    while(fast != null && slow != null) {
        if (fast == slow) 
            return fast;
        slow = slow.next;
        fast = fast.next;
        if (fast != null)
            fast = fast.next;
    }
    return null;
}

function EntryNodeOfLoop(pHead)
{
    var node = meetingNode(pHead);
    if (node == null) return null;
    var loop = 1;
    var node1 = node;
    while (node1.next != node) {
        node1 = node1.next;
        loop++;
    }
    node1 = pHead;
    for (var i = 0; i < loop; i++) {
        node1 = node1.next;
    }
    var node2 = pHead;
    while(node1 != node2) {
        node1 = node1.next;
        node2 = node2.next;
    }
    return node1;
}