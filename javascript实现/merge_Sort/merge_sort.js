function merge(arr, lo, mid, hi) {//进行合并
  var copy = [];
  var k = mid + 1;
  for (var i = lo; i < hi; i++) {
    copy[i] = arr[i];
  }
  for (i = lo; i < hi; i++) {
    if (lo > mid) arr[i] = copy[k++];//起点超过中位数,即前半部分数据排完了
    else if (k > hi) arr[i] = copy[lo++];//中位数超过终点，即后半部分数据排完了
    else if (copy[lo] < copy[k]) arr[i] = copy[lo++];//右半边元素大于左半边的当前元素
    else arr[i] = copy[k++];
  }
  return arr;
}

/**
 * 自顶向下
 * 递归至最深处,是对二元数组进行排序,即分治思想
 */
function sort (arr, lo, hi) {
  if (lo > hi) return;
  var mid = lo + Math.floor(hi - lo) / 2;
  sort(arr, lo, mid);
  sort(arr, mid + 1, hi);
  return merge(arr, lo, mid, hi);
}

/**
 * 自顶向上
 */
function sort (arr) {
  var len = arr.length;
  var max,mid;
  for (var i = 2; i / 2 < len; i*=2) {
    for (var j = 0; i < len; i += i) {
      if (j + i - 1 >= len) {
        max = len - 1;
      } else {
        max = j + i -1;
      }
      min = j + i / 2 - 1;
    }
  }
}