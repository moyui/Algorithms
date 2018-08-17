function MirrorRecursively (node) {
    if (node == null) return;
    if (node.left == null && node.right == null) return;
    var temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) {
        MirrorRecursively(node.left);
    } else {
        MirrorRecursively(node.right);
    }
}