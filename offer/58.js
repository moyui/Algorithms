function LeftRotateString(str, n)
{
    if (!str || n < 0) return '';
    var strArr = str.split(''),
        length = strArr.length;

    if (n > length) return '';

    var front = strArr.slice(0,n).reverse(),
        behind = strArr.slice(n,length).reverse(),
        newArr = front.concat(behind);
        return newArr.reverse().join('');
}