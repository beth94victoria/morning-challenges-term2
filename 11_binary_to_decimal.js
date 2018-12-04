/*
Write a method to convert a binary number to a decimal.

Examples:
    binaryToDecimal(1000) => 8
    binaryToDecimal(1011) => 11
    binaryToDecimal(1100) => 12

Your solution should not use parseInt

Test: mocha 11_binary_to_decimal

*/

function binaryToDecimal(binaryNumber) {
    return binaryNumber.toString().split('').reduce(function (x, y, i) {
        if (y > 1)
            return null
        console.log(x, y, i)
        return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);

}
module.exports = binaryToDecimal