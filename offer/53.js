function GetNumberOfK(data, k)
{
    if (data == null || data <= 0) return 0;
    var first = firstK(data, k ,0 ,data.length - 1);
    var last = lastK(data, k ,0 ,data.length - 1);
    if (first > -1 && last > -1) {
        return last - first + 1;
    } else {
        return 0;
    }
}

function firstK(data, k, start, end) {
    if (start > end) return -1;
    var mid = Math.floor((start + end)/2);
    if (data[mid] == k) {
        if (mid > 0 && data[mid - 1]!=k || mid == 0) {
            return mid;
        } else {
            end = mid - 1;
        }
    } else if (data[mid] > k) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
    return firstK(data, k ,start ,end);
}

function lastK(data, k, start, end) {
    if (start > end) return -1;
    var mid = Math.floor((start + end)/2);
    if (data[mid] == k) {
        if (mid < data.length - 1 && data[mid + 1]!=k || mid == data.length - 1) {
            return mid;
        } else {
            start = mid + 1;
        }
    } else if (data[mid] > k) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
    return lastK(data, k ,start ,end);
}