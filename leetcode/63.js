var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var dp = new Array(n).fill(0);
    dp[0] = 1;
    for (var i = 0; i < m; i++) {
        if (obstacleGrid[i][0] == 1) {
            dp[0] = 0;
        }
        for (var j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[j] = 0;
            } else {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[n - 1];
};