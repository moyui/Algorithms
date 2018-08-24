var removeNthFromEnd = function(head, n) {
    var front = head;
    var last = head;
    while (n > 1) {
        front = front.next;
        n--;
    }
    while (front.next != null) {
        front = front.next;
        last = last.next;
    }
    //进行复制
    if (last.next) {
        last.val = last.next.val;
        last.next = last.next.next;
    } else if (head == last) {
        head = null;
    } else {
        var tou = head;
        while (tou.next != last) {
            tou = tou.next;
        }
        tou.next = null;
    }
    return head;
};
//双指针算法