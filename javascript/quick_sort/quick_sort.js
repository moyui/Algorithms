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

//第二种版本 Nicholas C.Zakas
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
          swap(items, i ,j);
          i++;
          j--;
      }
  }
  return i;
}

//另一种划分方法
function partition(arr, lo, hi) {
  var key = arr[lo];
  var i = lo + 1;
  var j = hi;
  while (i < j) {
    while (arr[j] >= key && i < j) j--;
    while (arr[i] <= key && i < j) i++;
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, i , j);
  return j;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
          quickSort(items, left, index - 1);
      }
      if (index < right) {
          quickSort(items, index + 1, right);
      }
  }
  return items;
}

//第三种版本
function quickSort(arr, left, right) {
  var len = arr.length,
      pivot,
      partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
      partitionIndex = left;
  
  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i , partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
