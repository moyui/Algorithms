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
        if (s[i] >= 0 && s[i] <= 6 && i >= 1 && s[i-1] == 2) {
            numDecodingsCore(s, res, temp + '*', i - 2);
        }
        if (i >= 1 && s[i-1] == 1) {
            numDecodingsCore(s, res, temp + '*', i - 2);
        }
    }
    return res;
}

//正确版本
var numDecodings = function(s) {
    if (s == null || s.length == 0) return 0;
    var nums = new Array(s.length + 1).fill(0);
    nums[0] = 1;
    nums[1] = s.charAt(0) != '0' ? 1 : 0;
    for (var i = 2; i <= s.length; i++) {
        if (s.charAt(i - 1) != '0') {
            nums[i] = nums[i - 1];
        }

        var twoDigits = s.charAt(i - 2) + s.charAt(i - 1);
        if (twoDigits >= 10 && twoDigits <= 26) {
            nums[i] += nums[i - 2];
        }
    }
    return nums[s.length];
}