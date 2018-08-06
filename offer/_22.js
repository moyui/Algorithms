function PrintFromTopToBottom(root) {
    var arr = [];
    var data = [];
    if (root != null) {
        arr.push(root);
    }
    while (arr.length !== 0) {
        var node = arr.shift();
        if (node.left != null) {
            arr.push(node.left);
        }
        if (node.right != null) {
            arr.push(node.right);
        }
        data.push(node.val);
    }
    return data;
}