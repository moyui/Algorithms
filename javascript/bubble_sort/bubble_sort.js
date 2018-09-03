function bubble(arr) {
  var index = arr.length - 1;
  while (index > 0) {
    var mark = 0;
    for (var j = 0; j < index; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        mark = j;
      }
    }
    index = mark;
  }
  return arr;
}

function doubleBubble(arr) {
  var length = arr.length;
  var left = 0;
  var right = length;
  while (left < right) {
    preSort(array, left, right);
    right--;
    if (left >= right) break;
    backSort(array, left, right);
    left++;
  }
}

function preSort(arr, left, right) {
  for (var i = left; i < right; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
}

function backSort(arr, left, right) {
  for (var j = right; j >= left; j--) {
    if (arr[j - 1] > arr[j]) {
      swap(arr, j ,j - 1);
    }
  }
}