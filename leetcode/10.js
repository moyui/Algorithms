var isMatch = function(s, p) {//这样递归超时了
    if (s == null || p == null) return false;
    return matchCore(s, p, 0, 0);
};

function matchCore(s, pattern, strd, patternd) {
    if (s.length == strd && pattern.length == patternd) return true;
    if (s.length != strd && pattern.length == patternd) return false;
    if (pattern[patternd + 1] == '*') {
        if (pattern[patternd]==s[strd] || (pattern[patternd] == '.' && strd != s.length)) {
            //字符串匹配一次,*忽略
            return matchCore(s,pattern,strd+1,patternd+2)
            //*忽略匹配多次
                || matchCore(s,pattern,strd+1,patternd)
            //出现0次，彻底忽略
                || matchCore(s,pattern,strd,patternd+2);
        } else {
            //前面一个字符不同,跳到下一位，和出现0次是一样的
            return matchCore(s, pattern,strd,patternd +2);
        }
    }
    if (s[strd] == pattern[patternd] || (pattern[patternd] == '.' && strd != s.length))
    //匹配一次
        return matchCore(s,pattern,strd+1,patternd+1);
    return false;
}

var memo = [];

var isMatch = function(s, p) {
    if (s == null || p == null) return false;
    memo = new Array(s.length+1).fill(new Array(p.length+1));
    return matchCore(s, p, 0, 0);
};

function matchCore(s, p, i, j) {
    if (memo[i][j] !== void 0) {
        return memo[i][j] == true;
    }
    var ans;
    if (j == p.length - 1) {
        ans = i == s.length - 1;
    } else {
        var firstMatch = (i < s.length - 1 && (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.'));
        if (((j + 1) < (p.length - 1)) && p.charAt(j + 1) == '*') {
            ans = (matchCore(s, p, i, j + 2) || (firstMatch && matchCore(s, p, i + 1, j)));
        } else {
            ans = firstMatch && matchCore(s, p, i + 1, j + 1);
        }
    }
    memo[i][j] = ans ? true : false;
    return ans;
}


const ZERO_OR_MORE_CHARS = '*';
const ANY_CHAR = '.';

/**
 * Dynamic programming approach.
 *
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
function regularExpressionMatching(string, pattern) {
  /*
   * Let's initiate dynamic programming matrix for this string and pattern.
   * We will have pattern characters on top (as columns) and string characters
   * will be placed to the left of the table (as rows).
   *
   * Example:
   *
   *     a * b . b
   *   - - - - - -
   * a - - - - - -
   * a - - - - - -
   * b - - - - - -
   * y - - - - - -
   * b - - - - - -
   */
  const matchMatrix = Array(string.length + 1).fill(null).map(() => {
    return Array(pattern.length + 1).fill(null);
  });

  // Let's fill the top-left cell with true. This would mean that empty
  // string '' matches to empty pattern ''.
  matchMatrix[0][0] = true;

  // Let's fill the first row of the matrix with false. That would mean that
  // empty string can't match any non-empty pattern.
  //
  // Example:
  // string: ''
  // pattern: 'a.z'
  //
  // The one exception here is patterns like a*b* that matches the empty string.
  for (let columnIndex = 1; columnIndex <= pattern.length; columnIndex += 1) {
    const patternIndex = columnIndex - 1;

    if (pattern[patternIndex] === ZERO_OR_MORE_CHARS) {
      matchMatrix[0][columnIndex] = matchMatrix[0][columnIndex - 2];
    } else {
      matchMatrix[0][columnIndex] = false;
    }
  }

  // Let's fill the first column with false. That would mean that empty pattern
  // can't match any non-empty string.
  //
  // Example:
  // string: 'ab'
  // pattern: ''
  for (let rowIndex = 1; rowIndex <= string.length; rowIndex += 1) {
    matchMatrix[rowIndex][0] = false;
  }

  // Not let's go through every letter of the pattern and every letter of
  // the string and compare them one by one.
  for (let rowIndex = 1; rowIndex <= string.length; rowIndex += 1) {
    for (let columnIndex = 1; columnIndex <= pattern.length; columnIndex += 1) {
      // Take into account that fact that matrix contain one extra column and row.
      const stringIndex = rowIndex - 1;
      const patternIndex = columnIndex - 1;

      if (pattern[patternIndex] === ZERO_OR_MORE_CHARS) {
        /*
         * In case if current pattern character is special '*' character we have
         * two options:
         *
         * 1. Since * char allows it previous char to not be presented in a string we
         * need to check if string matches the pattern without '*' char and without the
         * char that goes before '*'. That would mean to go two positions left on the
         * same row.
         *
         * 2. Since * char allows it previous char to be presented in a string many times we
         * need to check if char before * is the same as current string char. If they are the
         * same that would mean that current string matches the current pattern in case if
         * the string WITHOUT current char matches the same pattern. This would mean to go
         * one position up in the same row.
         */
        if (matchMatrix[rowIndex][columnIndex - 2] === true) {
          matchMatrix[rowIndex][columnIndex] = true;
        } else if (
          (
            pattern[patternIndex - 1] === string[stringIndex] ||
            pattern[patternIndex - 1] === ANY_CHAR
          ) &&
          matchMatrix[rowIndex - 1][columnIndex] === true
        ) {
          matchMatrix[rowIndex][columnIndex] = true;
        } else {
          matchMatrix[rowIndex][columnIndex] = false;
        }
      } else if (
        pattern[patternIndex] === string[stringIndex] ||
        pattern[patternIndex] === ANY_CHAR
      ) {
        /*
         * In case if current pattern char is the same as current string char
         * or it may be any character (in case if pattern contains '.' char)
         * we need to check if there was a match for the pattern and for the
         * string by WITHOUT current char. This would mean that we may copy
         * left-top diagonal value.
         *
         * Example:
         *
         *   a b
         * a 1 -
         * b - 1
         */
        matchMatrix[rowIndex][columnIndex] = matchMatrix[rowIndex - 1][columnIndex - 1];
      } else {
        /*
         * In case if pattern char and string char are different we may
         * treat this case as "no-match".
         *
         * Example:
         *
         *   a b
         * a - -
         * c - 0
         */
        matchMatrix[rowIndex][columnIndex] = false;
      }
    }
  }

  return matchMatrix[string.length][pattern.length];
}










var isMatch = function(s, p) {
    var dp = new Array(s.length+1).fill(new Array(pattern.length+1));
    dp[s.length][p.length] = true;
    for (var i = s.length - 1; i >= 0; i--) {
        for(var j = p.length - 1; j >= 0; j--) {
            var firstMatch = (i < s.length && (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.'));
            if (j + 1 < p.length)
        }
    }
}