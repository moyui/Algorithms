function FindPath(root, expectNumber)
{
    var result = [];
    var currentSum = 0;
    if (root == null) {
        return result;
    }
    dfs(root, expectNumber, [], currentSum, result);
    return result;
}

function dfs(root, expectNumber, path, currentSum, result) {
    currentSum = currentSum + root.val;
    path.push(root.val);
    if (currentSum == expectNumber && root.left == null && root.right == null) {
        result.push(path.slice(0));
    }
    if (root.left != null) {
        dfs(root.left, expectNumber, path, currentSum, result);
    }
    if (root.right != null) {
        dfs(root.right, expectNumber, path, currentSum, result);
    }
    path.pop();
}