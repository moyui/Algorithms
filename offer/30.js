var stack = [];
var assist = [];
function push(node)
{
    var m = min();
    if (assist.length !== 0 || node < m) {
        assist.push(node);
    } else {
        assist.push(m);
    }
    stack.push(node);
}
function pop()
{
    if (stack.length > 0) {
        assist.pop();
        return stack.pop();
    }
}
function top()
{
    if (stack.length > 0) {
        return stack[stack.length - 1];
    } else {
        return false;
    }
}
function min()
{
    if (assist.length > 0) {
        return assist[assist.length - 1];
    } else {
        return Infinity;
    }
}