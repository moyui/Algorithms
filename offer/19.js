function match(s, pattern)
{
    if (s == null || pattern == null) return false; 
    return matchCore(s, pattern, 0, 0);
}

function matchCore(s, pattern, strd, patternd) {
    if (s.length == strd && pattern.length == patternd) return true;
    if (s.length != strd && pattern.length == patternd) return false;
    if (pattern[patternd + 1] == '*') {
        if (pattern[patternd]==s[strd] || (pattern[patternd] == '.' && strd != s.length)) {
            //匹配一位
            return matchCore(s,pattern,strd+1,patternd+2)
            //继续进行匹配
                || matchCore(s,pattern,strd+1,patternd)
            //忽略
                || matchCore(s,pattern,strd,patternd+2);
        } else {
            //前面一个字符不同,忽略
            return matchCore(s, pattern,strd,patternd +2);
        }
    }
    if (s[strd] == pattern[patternd] || (pattern[patternd] == '.' && strd != s.length))
    //匹配一次
        return matchCore(s,pattern,strd+1,patternd+1);
    return false;
}