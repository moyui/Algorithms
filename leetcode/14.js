//基本算法
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0 || strs == null) return '';
    var prefix = '';
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] != strs[0][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i];
    }
    return prefix;
};


//字典树
function TrieNode(ch) {
    this.ch = ch;
    this.next = {};
}

function Triebuilder(strs) {
    var root = new TrieNode();
    for (index in strs) {
        var str = strs[index];
        if (str.length == 0) return null;
        var cur = root;
        for (var i = 0; i < str.length; i++) {
            if (cur.next[str[i]] == null) {
                cur.next[str[i]] == new TrieNode(str[i]);
            }
            cur = cur.next[str[i]];
        }
    }
    return root;
}

//Trie树
var longestCommonPrefix = function(strs) {
    var result = '';
    if (strs == null || strs.length == 0) return '';
    var root = Triebuilder(strs);
} 