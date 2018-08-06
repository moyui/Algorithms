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