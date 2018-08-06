function IsPopOrder(pushV, popV)
{
    var stack = [];
    var i = 0;
    var j = 0;
    if (pushV.length > 0 && popV.length > 0) {
        while(i < popV.length) {
           if (popV[i] > pushV[j]) {
               stack.push(pushV[j]);
               j++
           } else if (popV[i] === pushV[j]) {
               stack.push(pushV[j]);
               stack.pop();
               i++;
               j++;     
           } else {
               var temp = stack.pop();
               if (temp === popV[i]) {
                   i++;
                   j++;
               } else {
                   return false;
               }
           }
        }
        return true;
    } else {
        return false;
    }
}