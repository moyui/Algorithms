function FindContinuousSequence(sum)
{
    if (sum <= 0) return [];
    var list = [];

    var small = 1;
    var big = small + 1;
    while (small < Math.ceil(sum / 2)) {
        var length = big - small + 1;
        var isOdd = (length % 2 === 0) ? false : true;
        var s;
        var array = [];
        if (isOdd) {
            s = (big + small) * Math.floor(length / 2) + (big + small) / 2;
        } else {
            s = (big + small) * (length / 2);
        }
        if (sum === s) {
            for (var i = small; i <= big; i++) {
                array.push(i);
            }
            list.push(array);
            small++;
            big=small+1;
        } else if (sum < s) {
            small++;
            big=small+1;
        } else {
            big++;
            if (big > Math.ceil(sum / 2)) {
                small++;
                big=small+1;
                continue;
            }
        }
    }
    return list;
}