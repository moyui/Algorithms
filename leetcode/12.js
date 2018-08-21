var intToRoman = function(num) {
    var ans = '';
    var Roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (var i = 0; i < 13; i++) {
        while(num >= value[i]) {
            num -= value[i];
            ans += Roman[i];
        }
    }
    return ans;
};