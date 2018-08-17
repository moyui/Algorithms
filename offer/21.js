function reorderOddEvent(arr) {
    if (arr.length <= 0) return;
    var lo = 0;
    var hi = arr.length - 1;
    while(lo <= hi) {
        while (lo % 2 != 0) {
            lo++;
        }
        while (hi % 2 == 0) {
            hi--;
        }
        if (lo <= hi) {
            swap(arr, lo, hi);
            lo++;
            hi--;
        }
    }
}