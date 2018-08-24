//反向
var generateParenthesis = function(n) {
    var res = [];
    if (n <= 0) return res;
    generateCore(n, n, '' , res);
    return res;
};

var generateCore = function(l, r, item ,res) {
    if (l > r) return;
    if (l == 0 && r == 0)
        res.push(item);
    if (l > 0)
        generateCore(l - 1, r, item + '(', res);
    if (r > 0)
        generateCore(l , r - 1, item + ')', res);
}