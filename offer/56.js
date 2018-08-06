function FindNumsAppearOnce(array)
{
    if (array == null || array.length <= 0) return;
    var or = 0;
    for(var i = 0; i < array.length; i++) {
        or ^= array[i];
    }
    var index1 = findFirst(or);
    var num1 = num2 = 0;
    for (i = 0; i < array.length; i++) {
        if (is1(array[i], index1)) {
            num1 ^= array[i];
        } else {
            num2 ^= array[i];
        }
    }
    return [num1, num2]
}

function findFirst(num) {
    var index = 0;
    while(((num & 1) === 0)&&(index < 64)) {
        num = num >> 1;
        index++;
    }
    return index;
}
function is1(num ,index) {
    num = num >> index;
    return num & 1;
}