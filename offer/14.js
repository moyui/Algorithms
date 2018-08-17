function maxSol(len) {
    if (len < 2) {
        return 0;
    } else if (len === 2) {
        return 1;
    } else if (len === 3) {
        return 2;
    }
    //放入最优值
    var pro = [];
    pro[0] = 0;
    pro[1] = 1;
    pro[2] = 2;
    pro[3] = 3;

    var max = 0;
    //从长度为4的绳子开始
    for(i = 4; i < len; i++) {
        max = 0;
        //i长度的绳子切一半左右两边是一样的
        for (var j = 1; j <= i / 2; j++) {
            var product = pro[j] * pro[i - j];
            if (max < product) 
                max = product
            
            pro[i] = max;
        }
    } 
    max = product[len - 1];
    return max;
}

function sol(len) {
    if (len < 2) return 0;
    if (len == 2) return 1;
    if (len == 3) return 2;
    var timesOf3 = Math.floor(length / 3);
    //如果是最后剩余4的话2*2比3*1好
    if (len - timesOf3 * 3 === 1) timesOf3 -= 1;
    var timesOf2 = (length - timesOf3 * 3) / 2;
    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2);
}