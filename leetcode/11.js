var maxArea = function(height) {
    if (height == null || height.length < 2) return 0;
    var max = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}