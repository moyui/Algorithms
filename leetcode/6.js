var convert = function(s, numRows) {
    if (numRows == 1) return s;
    var result = [];
    var root = 2 * numRows - 2;
    var index = 0;
    for (var i = 0; i < numRows && i < s.length; i++) {
        for (var j = 0; j < s.length; j++) {
            if ((j + i) % root == 0 || (j - i) % root == 0) {
                result[index] = s[j];
                index++;
            }
        }
    }
    return result.join('');
};