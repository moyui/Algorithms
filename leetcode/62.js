var uniquePaths = function(m, n) {
    var dp = new Array(m).fill(new Array(n));

    for (var i = 0; i < m; i++) dp[i][0] = 1;
    for (var j = 0; j < n; j++) dp[0][j] = 1;
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m-1][n-1];
};