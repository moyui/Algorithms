function MoreThanHalfNum_Solution(numbers)
{
    if (!numbers || numbers.length <= 0) return;
    var len = numbers.length;
    var mid = len >> 1;
    var start = 0;
    var end = len - 1;
    var index = partition(numbers, start, end);
    while(index!=mid){
        if(index>mid){
            end=index-1;
            index=partition(numbers,start,end);
        }else{
            start=index+1;
            index=partition(numbers,start,end);
        }
    }
    var result=numbers[mid];
    var times=0;
    for(var i=0;i<len;i++)
        if(numbers[i]==result) times++;
    var isMoreThanHalf=true;
    if(times*2<=len){
        isMoreThanHalf=false;
    }
    if(!isMoreThanHalf)  result=0;
    return result;  
}

function swap(numbers, i, j) {
    var temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

function partition(data, start, end) {
    if (data == null || start < 0) {
        return ;
    }
    var index = Math.floor(Math.random()*(end + 1 - start) + start);
    swap(data, index, end);
    var small = start - 1;
    for (index = start; index < end; index++) {
        if (data[index] < data[end]) {
            small++;
            if (small != index) {
                swap(data, small, index);
            }
        }
    }
    small++;
    swap(data, small, end);
    return small;
}