function InversePairs(data)
{
    if (data == null || data.length <= 0) {
        return 0;
    }
    var copy = [];
    for (var i = 0; i < data.length; i++) {
        copy[i] = data[i];
    }
    var count = help(data, copy, 0, data.length - 1);

    return count;
}

function help(data, copy, start, end) {
    if (start == end) {
        copy[start] = data[start];
        return 0;
    }
    var mid = (start + end)>>1;
    var left = help(copy, data, start, mid);
    var right = help(copy, data, mid + 1, end);
    var i = mid;
    var j = end;
    var count = 0;
    var indexCopy = end;
    while(i >= start && j >= mid + 1) {
        if (data[i] > data[j]) {
            copy[indexCopy--] = data[i--];
            count += j - mid;
        } else {
            copy[indexCopy--] = data[j--];
        }
    }
    //如果是自己跳出的,就不会进入循环
    //如果是由对方跳出的，需要-1
    for (; i >= start; --i) {
        copy[indexCopy--] = data[i];
    }
    for (; j >= mid + 1; --j) {
        copy[indexCopy--] = data[j];
    }

    return (left + right + count) % 1000000007;
}