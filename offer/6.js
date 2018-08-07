function reversePrint(pHead) {
    if (pHead !== null) {
        var node = pHead;
        var stack = [];
        while (node !== null ) {
            stack.push(node);
            node = node.next;
        }
        console.log(stack);
    } else {
        console.log(null);
    }
}