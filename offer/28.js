function isSymmetrical(pRoot)
{
    return isSymmetricalBoth(pRoot, pRoot);
}

function isSymmetricalBoth(root1, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;
    if (root1.val != root2.val) return false;
    return isSymmetricalBoth(root1.left, root2.right) &&
        isSymmetricalBoth(root1.right, root2.left);
}