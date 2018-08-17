function NumberOf1(n) {
    var count = 0;
    while(n) {
        count++;
        n = (n - 1)&n;
    }
}