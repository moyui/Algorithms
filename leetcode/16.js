//我的思路
var threeSumClosest = function(nums, target) {
    var sortNumber = function(a, b) {
        return a - b;
    }
    var res = nums[0] + nums[1] + nums[2];
    var i, start, end;
    nums.sort(sortNumber);
    for (i = 0; i < nums.length; i++) {
        start = i + 1;
        end = nums.length - 1;
        while (start < end) {
            if (Math.abs(res - target) > Math.abs(nums[i] + nums[start] + nums[end] - target)) {
                res = nums[i] + nums[start] + nums[end];
            }
            if (nums[i] + nums[start] + nums[end] < target) {
                start++;
            } else {
                end--;
            }
        }
    }
    return res;
};
