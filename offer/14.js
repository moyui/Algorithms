function maxSol(len) {
    if (len < 2) {
        return 0;
    } else if (len === 2) {
        return 1;
    } else if (len === 3) {
        return 2;
    }

    var pro = [];
    pro[0] = 0;
    pro[1] = 1;
    pro[2] = 2;
    pro[3] = 3;

    var max = 0;
    for(i = 4; i < len; i++) {
        max = 0;
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