function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
} 

function sink(arr, x, length) {
    var left = 2 * x + 1,
        right = 2 * x + 2,
        largest = x;
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== x) {
        swap(array, x, largest);
        sink(array, largest, length);
    }
}

function heapSort(array) {
    var length = array.length;
    for (var i = Math.floor(length / 2); i >= 0; i--) {
        sink(array, i, length);
    }
    for (var j = length - 1; j >= 1; j--) {
        swap(arr, 0, j);
        sink(arr, 0, j);
    }
    return arr;
}