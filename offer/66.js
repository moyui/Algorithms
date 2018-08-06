function multiply(array)
{
    if (array.length <= 0) return false;
    var b = [];
    b[0] = 1;
    for (var i = 1; i < array.length; i++) {
        b[i] = b[i - 1] * array[i - 1];
    }
    var temp = 1;
    for (var j = array.length - 2; j >= 0; j--) {
        temp *= array[j+1];
        b[j]*= temp;
    }
    return b;
}