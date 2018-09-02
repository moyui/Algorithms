//超内存了
var numDecodings = function(s) {
    if (s.length <= 0) return 0;
    var res = [];
    numDecodingsCore(s, res, '',  s.length-1);
    return res.length;
};

function numDecodingsCore(s, res, temp, i) {
    if (i == 0) {
        res.push(temp + s[i]);
        return;
    }
    if (i < 0) {
        res.push(temp);
        return;
    }
    while(i >= 0) {
        //优先扣一个
        numDecodingsCore(s, res, temp + '*', i - 1);
        //然后是两个的
        if (s[i] >= 0 && s[i] <= 6 && s[i-1] && s[i-1] == 2) {
            numDecodingsCore(s, res, temp + '*', i - 2);
        }
        if (s[i-1] && s[i-1] == 1) {
            numDecodingsCore(s, res, temp + '*', i - 2);
        }
    }
    return res;
}

//