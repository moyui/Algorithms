function duplicate(numbers, duplication)
{
    var len = numbers.length;
    if (len <= 0 || !numbers) return false;
    for (var i = 0; i < len; i++) {
        if (numbers[i] < 0 || numbers[i] > len - 1) return false;
    }
    for (var i = 0; i < len; i++) {
        while(numbers[i] !== i) {
            if (numbers[i] === numbers[numbers[i]]) {
                duplication[0] = numbers[i];
                return true;
            }
            var temp = numbers[i];
            numbers[i] = numbers[temp];
            numbers[temp] = temp;
        }
    }
    return false;
}

function duplicate(numbers, duplication)
{
    var len = numbers.length;
    if (len <= 0 || !numbers) return false;
    for (var i = 0; i < len; i++) {
        if (numbers[i] < 0 || numbers[i] > len - 1) return false;
    }
    var start = 1;
    var end = len - 1;
    while(end >= start) {
        var mid = Math.floor((start + end) / 2);
        var count = countRange(start, mid, len, numbers);
        if (start == end) {
            if (count > 1)
                return start;
            else 
                break;
        }
        if (count > (middle-start + 1)) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}


function countRange(start, end, length, numbers) {
    if (!numbers) return 0;
    var count = 0;
    for (var i = 0; i < length; i++) {
        if (numbers[i] >= start && numbers[i] <= end) {
            count++;
        }
    }
    return count;
}