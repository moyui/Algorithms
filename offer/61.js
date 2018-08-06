function IsContinuous(numbers)
{
    if (numbers.length <= 0) return null;
    var zeroTimes = 0;
    var gapTimes = 0;
    var arr = numbers.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) zeroTimes++;
    }
    var small = zeroTimes;
    var big = small + 1;
    while(big < numbers.length) {
        if (arr[small] == arr[big]) return false;
        gapTimes += arr[big] - arr[small] - 1;
        small = big;
        big++;
    }
    return gapTimes > zeroTimes ? false : true;
}