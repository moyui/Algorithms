var arr =[];

function Serialize(pRoot)
{
    if (pRoot == null) {
        arr.push('$');
        return;
    }
    arr.push(pRoot.val);
    Serialize(pRoot.left);
    Serialize(pRoot.right);
    
}
function Deserialize(s)
{
    if (arr == null) {
        return null;
    }
    if (arr.length == 0) {
        return null;
    }
    var root = null;
    var temp = arr.shift();
    if (typeof temp === 'number') {
        root = new TreeNode(temp);
        root.left = Deserialize(arr);
        root.right = Deserialize(arr);
    }
    return root;
}