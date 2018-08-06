function isNumeric(s)
{
    // write code here
    let str = s
    let hasE = false, hasDot = false, hasSign = false
    for (let i = 0; i < s.length; i++) {
        if (str[i] === "e" || str[i] === "E") {
            // e 不能出在末尾且只能出现一次
            if (i === s.length - 1) {
                return false
            }
            if (hasE) {
                return false
            }
            hasE = true
        } else if (str[i] === "+" || str[i] === "-") {
            // +号或-号
            // 第二次出现 必须在e后面
            if (hasSign && str[i-1] !== "e" && str[i-1] !== "E") {
                return false
            }
            // 第一次出现 且不是在开头 也必须跟在e后面
            if (!hasSign && i > 0 && str[i-1] !== "e" && str[i-1] !== "E") {
                return false
            }
            hasSign = true
        } else if (str[i] === ".") {
            // .号 不能在e后面 不能出现两次
            if (hasE || hasDot) {
                return false
            }
            hasDot = true
        } else if (str[i] < '0' || str[i] > '9') {
            return false
        }
    }
    return true
}
