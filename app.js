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

//  O(n^2)
function sameSquares(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (var i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) return false
        // splicing arr2 >> mutating it which is not fuego
        arr2.splice(correctIndex, 1)
    }
    console.log(arr2)
    return true
}

let arr1 = [1, 2, 3]
let arr2 = [9, 1, 4]

console.log(sameSquares(arr1, arr2))
