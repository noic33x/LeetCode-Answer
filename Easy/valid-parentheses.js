var isValid = function(s) {
    const string = s.split('')
    const stack = [];
    const pair = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    if(string.length === 1){
        return false
    }
    for (let i = 0; i < string.length; i++) {
        if(string[i] === '(' || string[i] === '{' || string[i] === '['){
            stack.push(string[i])
        } else {
            if (stack.length === 0 || stack.pop() !== pair[string[i]]) {
                return false
            }
        }
    }
    if (stack.length !== 0) {
        return false
    }
    return true
};

console.log(isValid('[['))