function maxProfit(prices) {
    if (prices == null || prices.length <= 0) return 0;
    var min = Number.MAX_SAFE_INTEGER;
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]); 
        max = Math.max(max, prices[i]- min);
    }
    return max;
}