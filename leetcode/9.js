var isPalindrome = function(x) {
    x = x + '';
    var len = x.length;
    var res;
    if (len % 2 == 0) {
        res = core(x, parseInt(len/2)-1, parseInt(len/2));
    } else {
        res = core(x, parseInt(len/2), parseInt(len/2));
    }
    return res;
};

function core(s, left, right) {
    while(left >= 0 && right < s.length) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left--;
        right++;
    }
    return true;
}
