function HasSubtree(pRoot1, pRoot2)
{
    if (pRoot1 == null || pRoot2 == null) return false;
        return isSubtree(pRoot1, pRoot2)
            || HasSubtree(pRoot1.left, pRoot2)
            || HasSubtree(pRoot1.right, pRoot2); 
}

function isSubtree(pRoot1, pRoot2) {
    if (pRoot2 == null) return true;
    if (pRoot1 == null) return false;
    if (pRoot1.val == pRoot2.val) {
        return isSubtree(pRoot1.left, pRoot2.left)
            && isSubtree(pRoot1.right, pRoot2.right); 
    } else {
        return false;
    }
}
