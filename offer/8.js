function GetNext(pNode)
{
    if (pNode == null) return null;
    var p = null;
    if (pNode.right != null) {
        p = pNode.right;
        while (p.left != null) {
            p = p.left;
        }
    } else if (pNode.next != null) {
        var currnet = pNode;
        var parent = pNode.next;
        while (parent != null && currnet == parent.right) {
            currnet = parent;
            parent = parent.next;
        }
        p = parent;
    }
    return p;
}