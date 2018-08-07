function Find(matrix, rows, cols, number) {
    var found = false;
    if (matrix !== 0 && rows > 0 && cols > 0) {
        var row = 0;
        var col = cols - 1;
        while (row < rows && col >=0) {
            if (matrix[row*cols + col] === number) {
                found = true;
                break;
            } else if (matrix[row*cols + col] > number) {
                col--;
            } else {
                row++;
            }
        }
    }
    return found;
}