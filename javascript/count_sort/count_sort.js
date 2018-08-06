function countSort(arr) {
  var max = Math.max(arr);
  var buckets = [];
  for (var i = 0 ; i < arr.length; i++) {
    var el = arr[i];
    if (buckets.includes(el)) {
      buckets[el]++
    } else {
      buckets[el] = 0;
    }
  }
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    var m = buckets[i].length;
    while (m) {
      arr[index] = i;
      index++;
      m--;
    }
  }
  return arr; 
}