var removeElement = function(nums, val) {
    var i = 0;
    var pointer = nums.length - 1;
    while (i <= pointer) {
        if (nums[i] == val) {
            nums[i] = nums[pointer];
            pointer--;
        } else {
            i++;
        }
    }
    return pointer + 1;
};