function foo (arr) {
  var len = arr.length;
  var h = 1;
  while (h < len / 3) {
    h = 3 * h + 1;
  } 
  while (h >= 1) {
    for (var i = h; i < len; i += h) {
      for (var j = i; j > 0; j -= h) {
        if (arr[j] < arr[j - h]) {
          var temp = arr[j];
          arr[j] = arr[j - h];
          arr[j - h] = temp;
        } else {
          break;
        }
      }
    }
  }
}