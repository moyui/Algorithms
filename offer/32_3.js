function Print(pRoot)
{
    if (pRoot == null) return [];
    var stack = [[], []];
    var next = 1;
    var current = 0;
    var ret = [];
    stack[current].push(pRoot);
    while (stack[current].length || stack[current].length) {
        var node = stack[current].pop();
        ret.push(node);
        if (current == 0) {
            if (node.left != null) {
                stack[next].push(node.left);
            }
            if (node.right != null) {
                stack[next].push(node.right);
            }
        } else {
            if (node.right != null) {
                stack[next].push(node.right);
            }
            if (node.left != null) {
                stack[next].push(node.left);
            }
        }
        if (node[current].length == 0) {
            current = 1 - current;
            next = 1 - next;
        }
    }
    return ret;
}