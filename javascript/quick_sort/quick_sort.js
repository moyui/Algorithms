function quickSort (arr, lo, hi) {
  if (lo >= hi) return;
  var i = lo;//左右指针
  var j = hi;
  var key = arr[lo];//第一个为切分
  while (true) {
    while (j > i) {//先动右指针
      if (arr[j] < key) {
        arr[i] = arr[j];
        arr[j] = key;
        break;
      }
      j--;
    }
    while (i < j) {//再动左指针
      if (arr[i] > key) {
        arr[j] = arr[i];
        arr[i] = key;
        break;
      }
      i++;
    }
    if (i >= j) break;//两指针交叉,排序完毕
  }
  quickSort(arr, lo, i - 1);//中间一位不用管
  quickSort(arr, i + 1, hi);
  return arr;
}