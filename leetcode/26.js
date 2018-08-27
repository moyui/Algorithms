var removeDuplicates = function(nums) {
    if (nums.length == 0 || nums.length == 1)
        return nums.length;
    var i = 1, j = 1;
    while (j < nums.length) {
        if (nums[j] != nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};