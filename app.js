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
    if (arr1.length !== arr2.length) return false

    let freqCounter1 = {}
    let freqCounter2 = {}

    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    console.log(freqCounter1)
    console.log(freqCounter2)
    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) return false
        if (freqCounter2[key ** 2] !== freqCounter1[key]) return false
    }   
    return true
}

let arr1 = [1, 2, 3], arr2 = [1, 4, 9]
// let arr1 = [1, 1, 4], arr2 = [1, 16, 16]
// let arr1 = [1, 2, 4], arr2 = [1, 6]

console.log(sameSquares(arr1, arr2))
