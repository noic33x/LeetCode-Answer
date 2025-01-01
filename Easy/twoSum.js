//complex and slow
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        for (let a = 0; a < nums.length; a++) {
            if (complement == nums [a]) {
                if (i != a) {
                    return [i, a]
                }
            }            
        }
    }
};

//more simple and fast
var twoSum = function(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)){
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
}