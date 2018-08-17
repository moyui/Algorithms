function printMatrix(matrix) {
    var returnArr = [];
    var col = matrix.length;
    var row = matrix[0].length;
    if (col===0 || row===0) {
        return returnArr;
    }

    var circle =Math.floor(((col < row ? col : row)+1) / 2);
    for (var i = 0; i < circle; i++) {
        for (var j=i; j < row-i; j++) {
            returnArr.push(matrix[i][j]);
        }
        for (var j=i+1; j < col-i; j++) {
            returnArr.push(matrix[j][row-i-1]);
        }
        for (var j=row-i-2; (j>=i)&&(col-i-1!==i); j--) {
            returnArr.push(matrix[col-i-1][j]);
        }
        for (var j=col-i-2; (j>i)&&(row-i-1!==i); j--) {
            returnArr.push(matrix[j][i]);
        }
    }
    return returnArr;
}