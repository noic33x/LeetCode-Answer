
//string method 10 ms
var isPalindrome = function(x) {
    const y = x.toString().split("");
    let count = 0
    for (let i = y.length - 1; i >= 0 ; i--) {
        if (y[i] != y[count]) {
            return false;
        }
        count ++
    }
    return true
};

//number method 4 ms
var isPalindrome = function (x) {
    if (x < 0) return false
    let val = x;
    let rever = 0;
    
    while (val) {
        rever = (rever * 10) + (val % 10);
        val = Math.floor(val / 10);
    }
    return x == rever;
}
