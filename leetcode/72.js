var minDistance = function (word1, word2) {
    word1 = word1.split(''),word2=word2.split('');
    var m = word1.length, n = word2.length;
    var dp = [];
    for (var i = 0; i <= m; i++) {
        dp[i] = new Array(n);
    }   
    for (var i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (var j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }
   
    return dp[m][n];
};