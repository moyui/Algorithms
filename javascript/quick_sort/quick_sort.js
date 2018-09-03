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

//第二种版本
function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var mid = Math.floor((left + right) / 2),
      i = left,
      j = right;
  
  while (i <= j) {
      while (items[i] < item[mid]) i++;
      while (items[j] > item[mid]) j--;
      if (i <= j) {
          swap(item, i ,j);
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index) {
          quickSort(items, left, index - 1);
      }
      if (index < right) {
          quickSort(items, index + 1, right);
      }
  }
  return items;
}

function partition(item, lo, hi) {
  var mid = Math.floor((lo + hi) / 2),
      i = lo,
      j = hi;
  
  while (i <= j) {
      while (item[i] < item[mid]) i++;
      while (item[j] > item[mid]) j--;
      if (i <= j) {
          swap(item, i, j);
          i++;
          j--;
      }
  }
  return i;
}