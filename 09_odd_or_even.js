/*
Given an array of numbers, determine whether the sum
of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array) {
    //enter code here
    let sum = 0
    for (let number of array) {
        sum += number
    }
    if (sum % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

module.exports = oddOrEven