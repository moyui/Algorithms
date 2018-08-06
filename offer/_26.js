function Convert(pRootOfTree)
{
    if (pRootOfTree == null) {
        return null;
    }
    var lastNode = null;
    lastNode = ConvertHelper(pRootOfTree, lastNode);
    var res = pRootOfTree;
    while (res.left) {
        res = res.left
    }
    return res;
}

function ConvertHelper(pRootOfTree, lastNode) {
    if (!pRootOfTree) {
        return;
    }
    if (pRootOfTree.left) {
        lastNode = ConvertHelper(pRootOfTree.left, lastNode);
    }
    pRootOfTree.left = lastNode;
    if (lastNode) {
        lastNode.right = pRootOfTree;
    }
    lastNode = pRootOfTree;
    if (pRootOfTree.right) {
        lastNode = ConvertHelper(pRootOfTree.right, lastNode);
    }
    return lastNode;
}


function Convert(pRootOfTree)
{
    var stack = [];
    var p = pRootOfTree;
    var pre = null;
    if (pRootOfTree == null) {
        return null;
    }
    while (p!=null || stack.length != 0) {
        while (p!=null) {
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        pre.right = p;
        p.left = pre;
        pre = p;
        p = p.right;
    }
    return root;
}