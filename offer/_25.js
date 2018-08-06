function Clone(pHead)
{
    var front = pHead;
    while(front != null) {
        var clone = new RandomListNode(front.label);
        clone.next = front.next;
        front.next = clone;
        front = clone.next;
    }

    connectRandomNode(pHead);
    return reconnect(pHead);
}

function connectRandomNode(pHead) {
    var front = pHead;
    while(front != null) {
        var clone = pHead.next;
        if (front.random != null) {
            clone.random = front.random.next;
        }
        front = clone.next;
    }
}

function reconnect(pHead) {
    var front = pHead;
    var clonedHead = null;
    var clonedFront = null;
    if (front != null) {
        clonedFront = clonedHead = front.next;
        front.next = clonedHead.next;
        front = front.next;
    }

    while(front != null) {
        clonedFront.next = front.next;
        clonedFront = clonedFront.next;
        front.next = clonedFront.next;
        front = front.next;
    }

    return clonedHead;
}


function Clone(pHead) {
    if (!pHead) {
        return null;
    }
    var newHead = new RandomListNode(pHead.label);
    newHead.random = pHead.random;
    newHead.next = Clone(pHead.next);
    return newHead;
}