var isHappy = function(n) {
    var slow = n;
    var fast = n;
    while (true) {
        slow = calc(slow);
        fast = calc(fast);
        fast = calc(fast);
        fast = calc(fast);
        if (slow === 1) return true;
        if (slow === fast) return false;
    }
};

function calc(number) {
    var sum = 0;
    while (number) {
        var num = number % 10;
        sum = sum + Math.pow(num, 2);
        number = Math.floor(number / 10);
    }
    return sum;
}