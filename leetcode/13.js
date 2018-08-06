var romanToInt = function(s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var sum = 0;
    var i = 0;
    while (s[i] != null) {
        [sum, i] = decide(s, sum, i, map);
        console.log(i, sum);
    }
    return sum;
}

function decide(s, sum, i, map) {
    switch(s[i]) {
        case 'I':
            if (s[i+1] == 'V' || s[i+1] == 'X') {
                sum += map[s[i+1]]-map[s[i]];
                i = i + 2;
            } else {
                sum += map[s[i]];
                i++;
            }
            break;
        case 'X':
            if (s[i+1] == 'L' || s[i+1] == 'C') {
                sum += map[s[i+1]]-map[s[i]];
                i = i + 2;
            } else {
                sum += map[s[i]];
                i++;
            }
            break;
        case 'C':
            if (s[i+1] == 'D' || s[i+1] == 'M') {
                sum += map[s[i+1]]-map[s[i]];
                i = i + 2;
            } else {
                sum += map[s[i]];
                i++;
            }
            break;
        default:
            sum += map[s[i]];
            i++;
    }
    return [sum, i];
}