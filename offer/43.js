function NumberOf1Between1AndN_Solution(n)
{
    var count = 0;
    var k;
    for (var i = 1; k = n / i; i *= 10) {
        count += (k / 10) * i;
        //判断当前位
        var cur = k % 10;
        if (cur > 1) {
            count += i;
        } else if (cur == 1) {
            count += n - k * i + 1;
        }
    }
    return count;
}

http://www.cnblogs.com/cyjb/p/digitOccurrenceInRegion.html

function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    if(n<0) return 0;
    var high=n,low,temp,cur,num=0,i=1;
    while(high!=0){
        high = parseInt(n/Math.pow(10,i));
        temp = n%Math.pow(10,i);
        cur = parseInt(temp/Math.pow(10,i-1));
        low = temp%Math.pow(10,i-1);
        if(cur ===1){
            num += high*Math.pow(10,i-1) + low + 1;
        }else if(cur < 1){
            num += high*Math.pow(10,i-1);
        }else{
            num += (high+1)*Math.pow(10,i-1);
        }
        i++;
    }
    return num;
}