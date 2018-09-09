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

//另一种划分方法(比较完美，建议用这种方式)
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
  swap(arr, lo , j);
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

//接下来是有关于快排优化的一系列例子
//以下是有关于选择key的
//1.随机选择key，代码如下
function partition(arr, lo, hi) {
  var p = Math.round(Math.random()*(hi - lo) + lo);
  swap(arr, lo, p);
}

//2.三数取中
function selectMedianOfThree(arr, lo, hi) {
  var mid = Math.floor((lo + hi) / 2);
  if (arr[mid] > arr[hi]) {
    swap(arr, mid, hi);
  }
  if (arr[lo] > arr[hi]) {
    swap(arr, lo ,hi);
  }
  if (arr[mid] > arr[lo]) {
    swap(arr, mid, lo);
  }
  return arr[low];
}

//以下是四种编码上的优化
//1. 切换为插入排序
if (hi - lo + 1 < 10) {
  insertSort(arr, low, high);
  return 
} else {
  //正常执行快排
}
//2. 在正常执行分割把key相等的元素聚在一起
function partition(arr, lo, hi) {
  var i = lo + 1;
  var j = hi;
  var left = lo + 1;
  var right = hi;
  var leftLen = 0;
  var rightLen = 0;

  if (hi - lo + 1 < 10) {
    insertSort(arr, low, high);
    return;
  }
  var key = selectMedianOfThree(arr, lo, hi);
  while (i < j) {
    while (arr[j] >= key &&  j > i ) {
      if (arr[j] == key) {
        swap(arr, j, right);
        right--;
        rightLen++;
      }
      j--;
    }
    while (arr[i] <= key && j > i) {
      if (arr[i] == key) {
        swap(arr, i, left);
        left++;
        leftLen++;
      }
      i++;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, lo, j);
  //一次快排结束，将key相同的移到周围
  var end = i - 1;
  var start = lo + 1;
  while (start < left && arr[end] != key) {
    swap(arr, start, end);
    start++;
    end--;
  }
  start = j + 1;
  end = hi;
  while (end > right && arr[start] != key) {
    swap(arr, start, end);
    start++;
    end--;
  }

  return {
    borderRight: j - 1 - leftLen,
    vorderLeft: j + 1 + rightLen
  }
}
//3.优化尾递归(v8不支持))
//4.并行不支持(webWorker?)