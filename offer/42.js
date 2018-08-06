function FindGreatestSumOfSubArray(array)
{
    if (array.length <= 0) return 0;
    var max = array[0];
    var temp = array[0];
    for (var i = 1; i < array.length; i++) {
        temp = temp > 0 ? temp + array[i] : array[i];
        max = max > temp ? max : temp;
    }
    return max;
}