function VerifySquenceOfBST(sequence)
{
    if (sequence.length === 0) {
        return false;
    }
    var i = 0;
    var root = sequence[sequence.length - 1];
    for (; i < sequence.length - 1; i++) {
        if (sequence[i] > root) {
            break;
        }
    }
    var j = i;
    for (; j < sequence.length - 1; ++j) {
        if (sequence[j] < root) {
            return false;
        }
    }
    var left = true;
    var right = true;
    if (i > 0) {
        left = VerifySquenceOfBST(sequence.slice(0, i));
    }
    if (j < sequence.length - 1) {
        right = VerifySquenceOfBST(sequence.slice(i, sequence.length));
    }

    return (left && right);
}