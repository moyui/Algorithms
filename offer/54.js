function KthNode(pRoot, k)
{
    if (pRoot == null || k == 0) return null;
    return KthNodeCore(pRoot, k);
}

function KthNodeCore(pRoot, k) {
    var node = pRoot;
    var stack = [];
    while(node != null || stack.length > 0) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
        if (stack.length > 0) {
            node = stack.pop();
            k--;
            if (k == 0) return node;
            node = node.right;
        }
    }
}