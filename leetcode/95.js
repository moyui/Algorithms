var m = {};

var generateTrees = function(n) {
    if (n < 1) return [];
    return cores(1, n);
}

function cores(start, end) {
    let res = [];
    let key = start + ' ' + end;
    if (m[key]) return m[key];
    if (start > end) {
        res.push(null);
        m[key] = res;
        return res;
    }
    if (start == end) {
        res.push(new TreeNode(start));
        m[key] = res;
        return res;
    }

    for (let i = start; i <= end; i++) {
        let leftArr = cores(start, i - 1),
            rightArr = cores(i + 1, end);
        for (let left of leftArr) {
            for (let right of rightArr) {
                let root = new TreeNode(i);
                root.left = left;
                root.right = right;
                res.push(root);
            }
        }
    }
    m[key] = res;
    return res;
}