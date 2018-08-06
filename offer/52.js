function FindFirstCommonNode(pHead1, pHead2)
{
    var pl1 = getLength(pHead1);
    var pl2 = getLength(pHead2);
    var lengthdiff = pl1-pl2;
    var phLong = pHead1;
    var phShort = pHead2;
    if (pl2 > pl1) {
        phLong = pHead2;
        phShort = pHead1;
        lengthdiff = pl2 - pl1;
    }
    for (var i = 0; i < lengthdiff; i++) {
        phLong = phLong.next;
    }
    while (phLong != null && phShort != null && phLong !== phShort) {
        phLong = phLong.next;
        phShort = phShort.next;
    }
    return phLong;
}

function getLength(p) {
    var length = 0;
    var point = p;
    while(point != null) {
        length++;
        point = point.next;
    }
    return length;
}