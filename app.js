/**
 *  Q) Write a funtion called same, which accepts two arrays. 
 *  The function should return true if every value in the array has it's
 *  corresponding value squared in the second array.
 *  The frequency of values should be the same.
 * 
 *  Examples) 
 *  [1, 2, 3], [9, 1, 4] //true
 *  [1, 5], [1, 7, 2] //false
 *  [1, 2, 1], [4, 4, 1] //false (must be the same frequency)
 */


function sameSquares(arr1, arr2) {
    //if arrs are not same length return false
    if (arr1.length !== arr2.length) return false

    //caches 
    let freqCounter1 = {}
    let freqCounter2 = {}

    /**
     * setting the keys of freqCounter1 to be which ever val is
     * being looped over >> and also setting the values to either 1 or
     * incrementing 
     * 
     * same as: 
     * if (freqCounter1[val]) {
     *      freqCounter1[val]++
     * } else {
     *      freqCounter1[val] = 1
     * }
     */
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
        // console.log(freqCounter1)
    }

    // same as above but for freqCounter2 cache
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    /**
     * getting the keys from freqCounter1 and checking they have their
     * squares in freqCounter2
     */
    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) return false
        console.log(freqCounter1)
        console.log(key)
        // if the key from freqCounter1 squared is not in the freqCounter2 return false also
        if (freqCounter2[key ** 2] !== freqCounter1[key]) return false
    }   
    return true
}

let arr1 = [1, 2, 3, 3], arr2 = [1, 4, 9, 9]
// let arr1 = [1, 1, 4], arr2 = [1, 16, 16]
// let arr1 = [1, 2, 4], arr2 = [1, 6]

console.log(sameSquares(arr1, arr2))
