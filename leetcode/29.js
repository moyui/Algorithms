var divide = function(dividend, divisor) {
    if (divisor == 0) 
        return dividend >= 0? Number.MAX_VALUE : Number.MIN_VALUE;
    if (dividend == 0) 
        return 0;
    if (dividend === Number.MIN_VALUE && divisor == -1) 
        return Number.MAX_VALUE;
    var isNegative = (dividend < 0 && divisor > 0) ||
                    (dividend > 0 && divisor < 0);
    var a = Math.abs(dividend);
    var b = Math.abs(divisor);
    var result = 0;
    while (a >= b) {
        var shift = 0;
        while (a >= (b << shift)) {
            shift++;
        }
        a -= b << (shift - 1);
        result += 1 << (shift - 1);
    }
    return isNegative ? -result : result;
};

var divide = function(dividend, divisor) {
    if (divisor === 0 || dividend > 2147483647 || dividend < -2147483648 || dividend < -2147483647 && divisor === -1) return 2147483647;
    let isNegative = dividend < 0 && divisor >= 0 || dividend >= 0 && divisor < 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend === 0 || dividend < divisor) return 0;
    
    let doubling = divisor;
    let count = 1;
    while (doubling < dividend && !(doubling & (1 << 30))) {
        doubling <<= 1;
        count <<= 1;
    }
    if (doubling > dividend) {
        doubling >>>= 1;
        count >>>= 1;
    }
    
    let res = count + divide(dividend - doubling, divisor);
    return isNegative ? 0 - res : res;
};