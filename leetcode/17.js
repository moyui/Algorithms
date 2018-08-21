var letterCombinations = function(digits) {
    var char = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var res = [];
    for (var i = 0; i < digits.length; i++) {
        var num = parseInt(digits[i]);
        var temp = [];
        for (var j = 0; j < char[num].length; j++) {
            if (temp.length > 0) {
                for (var k = 0; k < res.length; k++) {
                    temp.push(res[k] + '' + char[num][j]);
                }
            } else {
                temp.push(char[num][j] + '');
            }
        }
        res = res.concat(temp);
    }
    return res;
};