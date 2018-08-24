//"([)]"应该返回false,这个版本返回了true
var isValid = function(s) {
    if (s.length <= 0) return true;
    var symbol = ['(', '{', '[', ')', '}', ']'];
    var stack1 = [];
    var stack2 = [];
    for (var i = 0; i < s.length; i++) {
        var lo = symbol.indexOf(s[i]);
        if (lo >= 0 && lo < 3) {
            stack1.push(s[i]);
        } else if (lo >= 0 && lo >= 3) {
            var pop = null;
            while (stack1.length > 0) {
                pop = stack1.pop();
                //如果相对应
                if (symbol.indexOf(pop) === lo - 3) break;
                //不对应就放入2栈中
                stack2.push(pop);
                pop = null;
            }
            //找到了对应值
            if (pop) {
                while (stack2.length > 0) {
                    var temp = stack2.pop();
                    stack1.push(temp);
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    //遍历完应该全部对应的
    if (stack1.length === 0) return true;
    else return false;
};

//也就是说不需要第二个栈
var isValid = function(s) {
    if (s.length <= 0) return true;
    var symbol = ['(', '{', '[', ')', '}', ']'];
    var stack1 = [];
    for (var i = 0; i < s.length; i++) {
        var lo = symbol.indexOf(s[i]);
        if (lo >= 0 && lo < 3) {
            stack1.push(s[i]);
        } else if (lo >= 0 && lo >= 3) {
            var pop = stack1.pop();
            if (symbol.indexOf(pop) === lo - 3) continue;
            else return false;
        } else {
            return false;
        }
    }
    //遍历完应该全部对应的
    if (stack1.length === 0) return true;
    else return false;
};