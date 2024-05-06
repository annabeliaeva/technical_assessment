function findFirstMissing(numArray) {

    // making a set of non-repeating elements
    let numSet = new Set(numArray)

    // setting result's default value
    let result = -1

    // the range of input numbers is between a min and a max number
    // (according to the assignment, negative numbers are not considered)
    let start = Math.max(0, Math.min(...numArray))
    let end = Math.max(...numArray)

    // checking every member of a set in a range between a min and a max number in the natural order
    for (let i = start; i < end; i++) {
        // if a set does not have a current i value, then a missing value is found
        if (!numSet.has(i))
            result = i
        // checking if result's default value has changed
        // it helps to exit the loop as soon as the missing value is found
        if (result != -1)
            return result
    }
    // if all the elements are checked and the missing number is not found,
    // then the default result value will be returned
    return result
}

module.exports = findFirstMissing
