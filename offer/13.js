function movingCount(threshold, rows, cols) {
    var visited = [];
    for (var i = 0; i < rows; i++) {
      visited.push([]);
      for (var j = 0; j < cols; j++) {
        visited[i][j] = false;
      }
    }
    return moveCount(threshold, rows, cols, 0, 0, visited);
  }

  function moveCount(threshold, rows, cols, row, col, visited) {
    if (row < 0 || row == rows || col < 0 || col == cols || visited[row][col]) {
      return 0;
    }
    var sum = 0;
    var temp = row + "" + col;
    for (var i = 0; i < temp.length; i++) {
      sum += temp.charAt(i) / 1;
    }
    if (sum > threshold) {
      return 0
    }
    visited[row][col] = true;
    return 1 + moveCount(threshold, rows, cols, row, col - 1, visited) +
      moveCount(threshold, rows, cols, row, col + 1, visited) +
      moveCount(threshold, rows, cols, row - 1, col, visited) +
      moveCount(threshold, rows, cols, row + 1, col, visited);
  }