var longestCommonPrefix = function(strs) {
    let string = ""
    const strings = []
    for (let j = 0; j < strs.length; j++) {
        strings.push(strs[j].split(""))   
    }
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings[i].length; j++) {
            // console.log(strings[i][j])
            if (strings[i][j] === strings[i + 1][j] && ) {
                string = string + strings[i][j]
            }
            else{
                return string;
            }
        }
        return string;
    }
};
console.log(longestCommonPrefix(["flower","flow"]))