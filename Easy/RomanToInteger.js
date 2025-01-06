// got 4ms for me
var romanToInt = function(s) {
    const value = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const roman = s.split("")
    let int = 0
    for (let i = 0; i < roman.length; i++) {
        if(value[roman[i]] < value[roman[i+1]]){
            int += value[roman[i+1]] - value[roman[i]]
        } else if ( i!=0 && value[roman[i]] > value[roman[i-1]]) {
        }else {
            int += value[roman[i]]
        }
    }
    return int
};

// cleanest code
var romanToInt = function(s) {
    const value = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const roman = s.split("")
    let int = 0
    for (let i = 0; i < roman.length; i++) {
        if(i!=0 && value[roman[i]] < value[roman[i+1]]){
            int -= value[roman[i]]
        } else {
            int += value[roman[i]]
        }
    }
    return int
};
console.log(romanToInt("MCMXCIV"))