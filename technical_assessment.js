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

// Test cases
// Test case 1
const numArray1 = [5, 0, 1, 3, 2]
console.log('Test case 1:', findFirstMissing(numArray1)); // Output: 4

// Test case 2
const numArray2 = [7, 9, 10, 11, 12]
console.log('Test case 2:', findFirstMissing(numArray2)); // Output: 8

// Test case 3
const numArray3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
console.log('Test case 3:', findFirstMissing(numArray3)); // Output: 10

// Test case 4 (Empty array)
const numArray4 = []
console.log('Test case 4:', findFirstMissing(numArray4)); // Output: -1

// Test case 5 (Array with a single element)
const numArray5 = [0]
console.log('Test case 5:', findFirstMissing(numArray5)); // Output: -1

// Test case 6 (Array with a single element)
const numArray6 = [0]
console.log('Test case 6:', findFirstMissing(numArray6)); // Output: -1

// Test case 7 (Array with two elements)
const numArray7 = [0, 1]
console.log('Test case 7:', findFirstMissing(numArray7)); // Output: -1

// Test case 8 (Array with all elements not missing)
const numArray8 = [10, 11, 12, 13]
console.log('Test case 8:', findFirstMissing(numArray8)); // Output: -1

// Test case 9 (Array with negative numbers)
// function must only find missing numbers between 0 and max number in an input array
const numArray9 = [-3, 0, 1, 2, 4]
console.log('Test case 9:', findFirstMissing(numArray9)); // Output: 3


// Test case 10 (Array with duplicates)
const numArray10 = [0, 1, 2, 2, 5]
console.log('Test case 10:', findFirstMissing(numArray10)); // Output: 3


// Test case 11 (large arrays)
const numArray11 = []
for (let i = 0; i < 99997; i++)
    numArray11.push(i)
numArray11.push(100000)
console.log('Test case 11:', findFirstMissing(numArray11)); // Output: 99997