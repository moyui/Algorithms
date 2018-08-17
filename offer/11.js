function findMin(arr) {
    if (arr.length <= 0) return null;
    var lo = 0;
    var hi = arr.length - 1;
    var mid = li;
    while (arr[lo] >= arr[hi]) {
        if ((hi - lo) === 1) {
            mid = lo;
            break;
        }
        mid = (lo + hi) / 2;
        if (arr[mid] >= arr[lo]) lo = mid;
        else if (arr[mid] <= arr[hi]) hi = mid; 
    }
    return arr[mid];
}