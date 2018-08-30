//这个版本受限于js运算符问题
//DP
var isMatch = function(s, p) {
    var a = s.split('');
    var b = p.split('');
    var m = a.length,
        n = b.length;
    var f = new Array(m+1).fill(new Array(n+1));
    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (i == 0 && j == 0) {
                f[i][j] = true;
                continue;
            }
            if (j == 0) {
                f[i][j] = false;
                continue;
            }

            f[i][j] = false;
            if (p[j - 1] != '*') {
                if (i > 0 && (p[j-1] == '?' || p[j-1] == s[i-1])) {
                    f[i][j] = f[i-1][j-1];
                }
            } else {
                f[i][j] = f[i][j-1];
                if (i > 0) f[i][j] |= f[i-1][j];
            }
        }
    }
    return f[m][n];
};

//记忆化搜索
var A,B;
var done;
var m,n;
var f;

var calc = function(i, j) {
    if (done[i][j]) return;
    done[i][j] = true;
    if (i == 0 && j == 0) {
        f[i][j] = true;
        return;
    }

    if (j == 0) {
        f[i][j] = false;
        return;
    }

    f[i][j] = false;
    if (B[j-1] != '*') {
        if (i > 0 && (B[j - 1] == '?' || B[j-1] == A[i - 1])) {
            calc(i - 1, j - 1);
            f[i][j] |= f[i-1][j-1];
        }
    } else {
        calc(i , j - 1);
        f[i][j] = f[i][j-1];
        if (i > 0) {
            calc(i-1, j);
            f[i][j] |= f[i-1][j];
        }
    }
}

var isMatch = function(s, p) {
    A = s.split('');
    B = p.split('');
    m = A.length;
    n = B.length;
    f = new Array(m+1).fill(new Array(n+1));
    done = new Array(m+1).fill(new Array(n+1));
    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            done[i][j] = false;
        }
    }
    calc(m, n);
    return f[m][n];
};
