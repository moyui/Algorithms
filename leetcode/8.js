var myAtoi = function(str) {
    if (str == null) return 0;
    str = str.trim();
    if (str.length <= 0) return 0;
    var sign = 1;
    var index = 0;
    if (str.charAt(index) == '+') {
        index++;
    } else if (str.charAt(index) == '-') {
        sign = -1;
        index++;
    }
    var num = 0;
    for(;index < str.length; index++) {
        if (str.charAt(index) < '0' || str.charAt(index) > '9') {
            break;
        } 
        num = num * 10 + parseInt(str.charAt(index));
        if (num > 2147483647) {
            break;
        }
    }
    if (num * sign >= 2147483647) return 2147483647;
    if (num * sign <= -2147483648) return -2147483648;
    return num * sign;
};