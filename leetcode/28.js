//暴力求解
var strStr = function(haystack, needle) {
    if (haystack == null || needle == null) return -1;
    for (var i = 0; i < haystack.length - needle.length + 1; i++) {
        for (var j = 0; j < needle.length; j++) {
            if (haystack.charAt(i + j) != needle.charAt(j)) {
                break;
            }
        }
        if (j == needle.length) {
            return i;
        }
    }
    return -1;
};

//KMP算法
var strStr = function(haystack, needle) { 
    var i = 0, j = 0;
    var hlen = haystack.length;
    var nlen = needle.length;
    var s = haystack.split('');
    var p = needle.split('');
    var next = makeNext(needle.split(''));
    while (i < hlen && j < nlen) {
        if (j == -1 || s[i] == p[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if (j = nlen) return i - j;
    else return -1;
}

function makeNext(arr) {
    var len = arr.length;
    var next = [];
    next[0] = -1;
    var k = -1;
    var j = 0;
    while (j < len - 1) {
        if (k == -1 || arr[j] == arr[k]) {
            k++;
            j++;    
            // if (arr[j] != arr[k]) next[j] = k;
            // else next[j] = next[k];
            next[j] = k;
        } else {
            k = next[j];
        }
    }
    return next;
}