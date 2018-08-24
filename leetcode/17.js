//普通递归法 dfs
var letterCombinations = function(digits) {
    const numbers = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    if (digits.length <= 0 && digits == null) return '';
    var res = [];
    letterCore(digits, '', res, numbers);
    return res;
}

var letterCore = function(digits, current, res, map) {
    if (digits.length == 0  && current == '') return res;
    if (digits.length < 1) return res.push(current);
    var currentNumber = map[digits[0]], currentLetter;
    for (var i = 0; i < currentNumber.length; i++) {
        currentLetter = map[digits[0]][i];
        letterCore(digits.slice(1), current + currentLetter, res , map);
    }
    return res;
}
//还有另外一种利用队列