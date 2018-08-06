function maxInWindows(num, size)
{
    if (num.length < size || size < 1) return [];
    var queue = [];
    var res = [];
    for (var i = 0; i < num.length; i++) {
        while (queue.length && num[queue[queue.length - 1]] <= num[i]) {
            queue.pop();
        }
        while (queue.length && (i - [queue[0]] + 1) > size) {
            queue.shift();
        }
        queue.push(i);
        if (size && (i + 1 >= size)) 
            res.push(num[queue[0]]);
    }
    return res;
}

