var mergeTwoLists = function(list1, list2) {
    const s = [ ...list1, ...list2]
    let n = s.length
    let swapped
    do{
        swapped = false
        for (let i = 0; i < n - 1; i++) {
            if (s[i] > s[i + 1]) {
                [s[i], s[i + 1]] = [s[i + 1], s[i]]
                swapped = true
            }
        }
        n--
    } while (swapped)
    return(s)
};
console.log(mergeTwoLists([], [0]))