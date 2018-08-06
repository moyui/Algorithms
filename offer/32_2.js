function Print(pRoot)
{
    if(!pRoot){
        return [];
    }
    var queue = [],
        result = [];
    queue.push(pRoot);
    while(queue.length){
        var len = queue.length;
        var tempArr = [];
        for(var i = 0;i<len;i++){
            var temp = queue.shift();
            tempArr.push(temp.val);
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }
        }
        result.push(tempArr);
    }
    return result;
}