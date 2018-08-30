var longestValidParentheses = function(s) {
    var max = 0;
    var dp = new Array(s.length).fill(0);//这边注意数组初始化！！！
    for (var i = 1; i < s.length; i++) {
        if (s.charAt(i) == ')') {
            if (s.charAt(i - 1) == '(') {
                dp[i] = (i >= 2 ? dp[i - 2]: 0) + 2;
            } else if (i - dp[i-1] > 0 && s.charAt(i-dp[i-1]-1) == '(') {
                dp[i] = dp[i-1] + ((i-dp[i-1]) >= 2 ? dp[i-dp[i-1]-2] : 0) + 2;
            }
            max = Math.max(max, dp[i]);
        }
    }  
    return max;
};
//还有用栈和先正序遍历再后序遍历求最大值
//栈比较简单