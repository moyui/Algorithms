function StrToInt(str)
{
    var len = str.length,
        flag = 1;
        res = 0;
    if (len === 0) return 0;
    if (len === 1 && 
        (str[0] === '+' 
        || str[0] === '-' 
        || str[0] === '*' 
        || str[0] === '/' 
        || str[0] === '%')
    ) return 0;
    if (str[0] === '-') flag = -1;
    for (var i = (str[0] === '-' || str[0] === '+') ? 1 : 0; i < len; i++) {
        if (!(str[i] >= '0' && str[i] <= '9')) {
            return 0;
        }
        res = res * 10 + (str[i] - '0');
    }
    return res * flag;
}