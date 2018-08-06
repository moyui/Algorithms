function knapsack(w, v, c) {
    let length = w.length;
    if (length == 0) return 0;
    let array = new Array(length).fill(new Array(c + 1).fill(null));
    for(let i = 0; i <= c; i++) {
        array[0][i] = i > w[0] ? v[0] : 0;
    }
    for(let i = 1; i < length; i++) {
        for(let j = 0; j <= c; j++) {
            array[i][j] = array[i - 1][j];
            if (j >= w[i]) {
                array[i][j] = Math.max(array[i][j], v[i] + array[i -1][j - w[i]]);
            }
        }
    } 
    return array[length - 1][c];
} 