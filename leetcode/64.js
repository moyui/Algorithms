var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var path = new Array(m+1).fill(new Array(n+1));
    for (var i = 0; i <= m; i++) {
        path[i][0] = Infinity;
    }
    for (var j = 0; j <= n; j++) {
        path[0][j] = Infinity;
    }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (i == 1 && j == 1) path[i][j] = grid[i-1][j-1];
            else path[i][j] = grid[i-1][j-1] + Math.min(path[i-1][j], path[i][j-1]);
        }
    }
    return path[m][n];
};