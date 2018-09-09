var isScramble = function(s1, s2) {
    var m = s1.length;
    var n = s2.length;
    if (m != n) return false;
    var f = new Array(n).fill(new Array(n).fill(new Array(n + 1).fill(false)));
    var i, j, w, len;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            f[i][j][1] = (s1.charAt(i) === s2.charAt(j));
        }
    }
    for (len = 2; len <= n; len++) {
        for(i = 0; i <= n - len; i++) { //[i..i+len-1]
            for (j = 0; j <= n - len; j++) { //[j..j+len-1]
                f[i][j][len] = false;

                for(w = 1; w < len; w++) {
                    if (f[i][j][w] && f[i + w][j + w][len - w]) {
                        f[i][j][len] = true;
                        break;
                    }
                    
                    // swap
                    // S1 --> T2,     S2 --> T1
                    if (f[i][j + len - w][w] && f[i + w][j][len - w]) {
                        f[i][j][len] = true;
                        break;
                    }
                }
            }
        }
    }
    return f[0][0][n];
};