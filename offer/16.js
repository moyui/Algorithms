var bool = false;

function power(base, exp) {
    bool = false;
    if (base == 0.0 && exp < 0) {
        bool = true;
        return 0.0
    }
    var absExp = Math.abs(exp);
    var result = powerExp(base, absExp);
    if (exp < 0) result = 1.0 / result;
    return result;
}

function powerExp(base, exp) {
    var result = 1.0;
    for (var i = 1; i <= exp; i++) {
        result *= base;
    }
    return result
}

//乘方快速幂