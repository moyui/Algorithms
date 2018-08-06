function GetUglyNumber_Solution(index)
{
    if (index <= 0) return 0;
    var arr = [1],
    //2,3,5在数组中的位置
        two = 0,
        three = 0,
        five = 0;

    for (var i = 1; i < index; i++) {
        arr[i] = Math.min(arr[two] * 2, arr[three] * 3, arr[five] * 5);
        if(arr[i]==arr[two]*2){
            two++;
        }
        if(arr[i]==arr[three]*3){
            three++;
        }
        if(arr[i]==arr[five]*5){
            five++;
        }
    }
    return arr[index - 1];
}
