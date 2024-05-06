
findFirstMissing = require('./findFirstMissing.js')

describe('findFirstMissing function', () => {
    test('Simple tests', () => {
        expect(findFirstMissing([5, 0, 1, 3, 2])).toBe(4)
        expect(findFirstMissing([7, 9, 10, 11, 12])).toBe(8)
        expect(findFirstMissing([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15])).toBe(10)
    })

    test('Empty array', () => {
        expect(findFirstMissing([])).toBe(-1)
    })

    test('Array with a single element', () => {
        expect(findFirstMissing([0])).toBe(-1)
    })

    test('Array with two elements (negative)', () => {
        expect(findFirstMissing([0, 1])).toBe(-1)
    })
    
    test('Array with two elements (positive)', () => {
        expect(findFirstMissing([0, 4])).toBe(1)
    })

    test('Array with all elements not missing', () => {
        expect(findFirstMissing([10, 11, 12, 13])).toBe(-1)
    })

    test('Array with negative numbers (function must only find missing numbers between 0 and max number in an input array)', () => {
        expect(findFirstMissing([-3, 0, 1, 2, 4])).toBe(3)
    })

    test('Large array', () => {
        let arr = []
        for (let i = 0; i < 99997; i++)
            arr.push(i)
        arr.push(100000)
        expect(findFirstMissing(arr)).toBe(99997)
    })

})
