function insertSort(arr) {
  for (var i = 1, len = arr.length; i < len; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j] < arr [j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
 }