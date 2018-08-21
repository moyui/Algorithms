var reverse = function(x) {
    var res, temp;
    res = 0;
    while (x !== 0) {
        temp = res * 10 + x % 10;
        x = parseInt(x / 10);
        // if (parseInt(temp / 10) != res) {
        //     res = 0;
        //     break;
        // }
        res = temp;
    }
    if (res < -2147483648 || res > 2147483647) return 0;
    return res;
};