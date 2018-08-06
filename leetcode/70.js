var climbStairs = function(n) {
    var array = [];
    array[1] = 1;
    array[2] = 2;
    for(var i = 3; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n];
};