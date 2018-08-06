var maxSubArray = function(nums) {
    if (nums.length <= 0) return null;
    var array = [];
    var max = nums[0];
    array[0] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        array[i] = Math.max(nums[i], nums[i] + array[i - 1]);
        max = Math.max(max, array[i]);
    }
    return max;
};