function FindNumbersWithSum(array, sum)
{
    if (array.length <= 1) return [];
    var i = 0;
    var j = i + 1;
    var small = array[i];
    var big = array[j];
    var list = [];
    while(i < array.length - 1) {
        var s = small + big;
        if (s === sum) {
            list.push(small);
            list.push(big);
            i++;
            j = i + 1;
            small = array[i];
            big = array[j];
        } else if (s < sum) {
            j++;
            big = array[j];
        } else {
            i++;
            j = i + 1;
            small = array[i];
            big = array[j];
            continue;
        }
    }
    if (list.length > 2) {
        var min = Infinity;
        var k = 0;
        for (var l = 0; l < list.length-1; l = l + 2) {
            if ((list[l] * list[l+1]) < min) {
                k = l;
                min = list[l] * list[l+1];
            }
        }
        return [list[k],list[k+1]];
    } else {
        return list;
    }
}