function TreeDepth(pRoot)
{
    if (pRoot == null) return 0;
    var queue = [];
    queue.push(pRoot);
    var count = 0;
    var depth = 0;
    var nextCount = 1;
    while (queue.length > 0) {
        var front = queue.unshift();
        count++;
        if (front.left != null) {
            queue.push(front.left);
        }
        if (front.right != null) {
            queue.push(front.right);
        }
        if (count == nextCount) {
            depth++;
            nextCount = queue.length;
            count = 0;
        }
    }
    return depth;
}

function IsBalanced_Solution(pRoot) {
    return help(pRoot) != -1;
}

function help(root) {
    if (root == null) return 0;
    var left = help(root.left);
    if (left == -1) return -1;
    var right = help(root.right);
    if (right == -1) return -1;
    return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right);
}

function TreeDepth(pRoot)
{
    if (pRoot == null) return 0;
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);

    return left > right ? left + 1 : right + 1;
}