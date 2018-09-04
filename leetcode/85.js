var maximalRectangle = function(matrix) {
    var m = matrix.length;
    if (m == 0) return 0;
    var n = matrix[0].length;
    if (n == 0) return 0;

    var up = new Array(m).fill(new Array(n));
    var left = new Array(m).fill(new Array(n));
    var right = new Array(m).fill(new Array(n));

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] == '0') {
                up[i][j] = 0;
            } else {
                up[i][j] = 1;
                if (i > 0) {
                    up[i][j] += up[i-1][j];
                }
            }
        }
    }

    var i = 0; 
    for (var j = 0; j < n; j++) {
        if (matrix[i][j] == '0') {
            i = left[i][j] = 0;
        } else {
            i++;
            left[i][j] = i;
            if (i >0 && matrix[i-1][j] == '1' && left[i-1][j] < left[i][j]) {
                left[i][j] = left[i-1][j];
            }
        }
    }
    
    var j = 0; 
    for (var j = 0; j < n; j++) {
        if (matrix[i][j] == '0') {
            i = left[i][j] = 0;
        } else {
            i++;
            left[i][j] = i;
            if (i >0 && matrix[i-1][j] == '1' && left[i-1][j] < left[i][j]) {
                left[i][j] = left[i-1][j];
            }
        }
    }



    for (var i = 0; i <= m; i++) {
        dp[i][0] = 0;
    }

    for (var j = 0; j <= n; j++) {
        dp[0][j] = 0;
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (matrix[i-1][j-1] == '1') {
                dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[i-1][j-1];
};