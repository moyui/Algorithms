var maxProfit = function(prices) {
    var profit = 0;
    for (var i = 0; i < prices - 1; i++) {
        var diff = prices[i+1] - price[i];
        if (diff>0) {
            profit += diff;
        }
    }
    return profit;
};