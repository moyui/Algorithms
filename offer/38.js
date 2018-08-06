function Permutation(str)
{
    if (str.length == 0) return [];
    var arr = str.split('');
    var res = [];
    help(arr, '', res);
    return res;    
}

function help(arr, str, res) {
    if (arr.length == 0) res.push(str);
    else {
        var isRepeat = {};
        for (var i = 0; i < arr.length; i++) {
            //保证aa...和aa...只会出现一次
            if (!isRepeat[arr[i]]) {
                var head = arr.splice(i,1)[0];//将第i号位的元素取出
                str += head;

                help(arr, str, res);//将更改过的数组传入进行递归

                arr.splice(i, 0, head);//将元素补全

                str = str.slice(0,str.length - 1);//把填充进去的字符删除,准备下一次遍历

                isRepeat[head] = true;
            }
        }
    }
    return res;
}