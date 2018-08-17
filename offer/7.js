function rebuild(perOrder, inOrder, length) {
    if (perOrder == null || inOrder == null || length <= 0) return null;
    return rebuildCore(perOrder, inOrder, 0, perOrder.length - 1, 0 ,inOrder.length-1)
}

function rebuildCore(perOrder, inOrder, sp,ep, si,ei) {
    var root = perOrder[0];
    var node = new Node(root.val);
    if (sp === ep) {
        if (si === ei && perOrder[sp] === inOrder[si]) return root;
    }
}