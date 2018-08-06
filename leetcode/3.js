function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

function lengthOfLongestSubstring(s) {
    const map = {};
    var longest = 0, m = 0;
    for (var i = 0; i < s.length; i++) {
        m = Math.max(m, map[s[i]]);
        map[s[i]] = i;
        longest = Math.max(longest, i - m + 1);
    }
    return longest;
}


var lengthOfLongestSubstring = function(s) {
    var ans = 0,
    left = 0;
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] >= left) 
            left = map[s[i]] + 1;
        map[s[i]] = i;
        ans = Math.max(ans, i - left + 1);
    }
    return ans;
};