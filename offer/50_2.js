var hashMap = {};

function Init()
{
    hashMap = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    if(hashMap[ch]) {
        hashMap[ch] += 1;
    } else {
        hashMap[ch] = 1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for (var i in hashMap) {
        if (hashMap.hasOwnProperty(i)) {
            if (hashMap[i] === 1) {
                return i;
            }
        }
    }
    return '#';
}