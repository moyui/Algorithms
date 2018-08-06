function FirstNotRepeatingChar(str) {
    for(let i=0; i < str.length; i++){
        if(str.indexOf(str[i]) == str.lastIndexOf(str[i])){
            return i;
        }
    }
    return -1;
}