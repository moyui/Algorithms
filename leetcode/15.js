//这个版本好像有点错误
var threeSum = function(nums) {
    nums.sort();
    var result = [];
    for(var i = 0; i < nums.length - 2; i++) {
        if (i && (nums[i] == nums[i - 1])) continue;//保证只算开头的一次
        var target = -nums[i];
        var left = i + 1, right = nums.length - 1;
        while(left < right) {
            if ((nums[left] + nums[right]) == target) {
                result.push([nums[i], nums[left], nums[right]]);
                right--;
                left++;
                while ((left < right) && (nums[left] == nums[left - 1])) { //继续去重
                    left++;
                }
                while ((left < right) && (nums[right] == nums[right + 1])) {
                    right--;
                }
            } else if ((nums[left] + nums[right]) > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};


var threeSum = function(nums) {
    var result = [];
    if (nums.length < 3) return result;
    nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        //如果index=0的元素都大于0,直接返回
        if (nums[i] > 0) return result;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) j++;
                while (j < k && nums[k] == nums[k + 1]) k--;
            } else if (nums[i] + nums[j] + nums[k] > 0) k--;
            else j++;
        }
    }
    return result;
}