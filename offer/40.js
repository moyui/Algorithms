function GetLeastNumbers_Solution(input, k)
{
    if (input.length <= 0 || k > input.length || k <= 0) return[];
    var start = 0;
    var end = input.length - 1;
    var index = Partition(input, 0, input.length-1);
    while(index != k-1) {
        if (index > k-1) {
            end = index - 1;
            index = Partition(input,start,end);
        } 
        else {
            start = index + 1;
            index = Partition(input,start,end);
        }
    }
    var res = [];
    for (var j = 0; j < k; j++) {
        res.push(input[j]);
    }
    return res.sort();
}

function Partition(arr, low, high) {
    var temp = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= temp) high--;
        arr[low] = arr[high];
        while (low < high && arr[low] <= temp) low++;
        arr[high] = arr[low];
    }
    arr[low] = temp;
    return low;
}

function GetLeastNumbers_Solution(input, k) {
    if (k > input.length) return [];
    heapSort(input, k);
    return input.slice(0,k);
}

function heapSort(arr, k) {
    var last = parseInt(arr.length - 1);
    makeMaxHeap(arr, k);
    //交换最后子节点与根节点调整堆
    for (let i = last; i >= 0 ; i--) {
        if (a[i] < a[0]) {
            swap(i, 0 ,a)
            adj(a,0,i);
        }
    }
}

function makeMaxHeap(arr, k) {
    var len = k;
    //最后一个叶子节点的父节点
    for (var i = (len - 1)/2; i >=0; i--) {
        adj(arr, i ,len);
    }
}

function adj(a, i, len) {
    while (i < len) {
        var child = i * 2 + 1;
        //左右两个节点,选取两者间较大的子元素
        if (child + 1 < len && a[child] < a[child + 1]) {
            child++;
        }
        if (child < len && a[child] > a[i]) {
            //子节点大于父节点
            swap(child, i , a);
        }
        i = child;//这一层交换完成，进入下一层
    }
}

function swap(s,e,a){
    let t = a[s];
    a[s] = a[e];
    a[e] = t;
}