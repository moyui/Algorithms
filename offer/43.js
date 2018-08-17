function NumberOf1Between1AndN_Solution(n)
{
    var count = 0;
    var k;
    for (var i = 1, k = parseInt(n / i); k >= 1; i *= 10) {
        count += parseInt(k / 10) * i;
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

// 总结一下以上的算法，可以看到，当计算右数第 i 位包含的 X 的个数时：

// 取第 i 位左边（高位）的数字，乘以 10i−1，得到基础值 a。
// 取第 i 位数字，计算修正值：
// 如果大于 X，则结果为 a+10i−1。
// 如果小于 X，则结果为 a。
// 如果等 X，则取第 i 位右边（低位）数字，设为 b，最后结果为 a+b+1。
