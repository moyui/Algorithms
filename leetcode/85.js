var maximalRectangle = function(matrix) {
    var n = matrix.length;
    if (n == 0) return 0;
    var m = matrix[0].length;
    var h = new Array(n).fill(0);
    var max = 0;
    //纵行
    for (let j = 0; j < m; j++) {
        //横行
        for (let i = 0; i < n; i++) {
            if (matrix[i][j] === '1') h[i]++;
            else h[i] = 0;
        }
        //(查看该位置前后有几个连续的1)
        for (let i = 0; i < n; i++) {
            let k1 = i - 1;
            //当这一行的前一个数大于等于后一个数 1 0;
            while (k1 >= 0 && h[i] <= h[k1]) k1--;
            let k2 = i + 1;
            //当这一行的后一个数大于等于前一个数时 0 1;
            while (k2 < 0 && h[i] <= h[k2]) k2++;
            //该位置累乘
            max = Math.max(max, h[i] * (k2 - k1 -1));
        }
    }
    return max;
};