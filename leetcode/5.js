//马拉车算法
var longestPalindrome = function(s) {
    if (s == null || s.length <= 0) return '';
    s = process(s);
    var p = [];
    var mi = 0, right = 0;//mi为最大回文串对应的中心点，right为该回文串能达到的最右端的值
    var maxLen = 0, maxPoint = 0;//mi为最大回文串对应的中心点，right为该回文串能达到的最右端的值
    for (var i = 1; i < s.length; i++) {
        p[i] = right > i ? Math.min(p[2*mi-1], right-i) : 1;
        while (s[i+p[i]] == s[i-p[i]]) {
            p[i]++;
        }
        if (right < i + p[i]) {//超过最右端
            right = i + p[i];
            mi = i;
        }
        if (maxLen < p[i]) {
            maxLen = p[i];
            maxPoint = i;
        }
    }
    return s.substr((maxPoint - maxLen) / 2, maxLen - 1);
}

function process(s) {
    var newstr = '#';
    for (var i = 0; i < s.length; i++) {
        var temp = s.substring(i,i+1);
        newstr+=temp;
        newstr+='#';
    }
    return newstr;
}


//基于中心点的算法
var longestPalindrome = function(s) {
    if (s.length <= 0) return '';
    var start = 0, len = 0, longest = 0;
    for (var i = 0; i < s.length; i++) {
        //可能是中心对称的
        len = findLogestCore(s, i ,i);
        if (len > longest) {
            longest = len;
            start = i - Math.floor(len / 2);
        }
        //可能不是中心对称的
        len = findLogestCore(s, i, i + 1);
        if (len > longest) {
            longest = len;
            start = i - Math.floor(len / 2) + 1;
        }
    }
    return s.substring(start, start + longest);
};

function findLogestCore(s, left, right) {
    var len = 0;
    while(left >= 0 && right < s.length) {
        if (s.charAt(left) != s.charAt(right)) break;
        len += left == right ? 1 : 2;
        left--;
        right++;
    }
    return len;
}

//动态规划不是很好
var longestPalindrome = function(s) {
    if (s == null || s.length == 0) return '';
    var n = s.length;
    var dp = new Array(n).fill(new Array(n));
    var longest = 1, start = 0;
    for (var i = 0; i < n - 1; i++) {
        //对角线设置为true
        dp[i][i] = true;
    }
    for (var i = 0; i < n - 1; i++) {
        dp[i][i+1] = s.charAt(i) == s.charAt(i+1);
        if (dp[i][i+1]) {
            start = i;
            longest = 2;
        }
    }
    for (var i = n - 1; i >= 0; i--) {

    }
}