function hasPath(matrix, rows, cols, path)
{
    if (path.length == 0 ) return true;
    if (rows * cols < path.length) return false;
    let status = [];
    for (let i = 0; i < rows; i++) {
        status.push([]);
        for (let j = 0; j < cols; j++) {
            status[i][j] = false;
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (judge(matrix, i ,j, rows, cols, path, 0, status)) {
                return true;
            }
        }
    }
    return false;
}

function judge(matrix, i, j, rows, cols, path, k, status) {
    let index = i*cols + j;
    if(i<0||j<0||i>=rows||j>=cols||matrix[index]!==path[k]||status[index]==true){
        return false;
    }else if (k == path.length - 1) {
        return true;
    }
    status[index] = true;
    if(judge(matrix,i,j+1,rows,cols,path,k+1,status)
    ||judge(matrix,i,j-1,rows,cols,path,k+1,status)
    ||judge(matrix,i+1,j,rows,cols,path,k+1,status)
    ||judge(matrix,i-1,j,rows,cols,path,k+1,status)){
      return true;
    }
    status[index]=false;
    return false;
}