var fourSum = function(nums, target) {
    var res = [];
    if (nums.length <= 3) return res;
    nums.sort(function(a ,b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 3; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        var first = nums[i];
        for (var j = i + 1; j < nums.length - 2; j++) {
            if (j != i + 1 && nums[j] == nums[j - 1]) continue;
            var second = nums[j];
            var k = j + 1;
            var l = nums.length - 1;
            while (k < l) {
                var third = nums[k];
                var forth = nums[l];
                if (target === first + second + third + forth) {
                    res.push([first, second, third, forth]);
                    k++;
                    l--;
                    while (k < l && nums[k] == nums[k - 1]) k++;
                    while (k < l && nums[l] == nums[l + 1]) l++;
                } else if (first + second + third + forth > target) {
                    l--;
                } else {
                    k++;
                }
            }
        }
    }
    return res;
};