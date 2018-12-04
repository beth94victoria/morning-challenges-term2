let assert = require('assert')
let binaryToDecimal = require('../11_binary_to_decimal')

describe('Binary to decimal', function () {
    context('should convert a valid binary number to decimal', function () {
        it('should convert 1001 to 9', function () {
            assert.equal((9), binaryToDecimal(1001))
        })
    })
    context('Should convert a binary to its decimal value', function () {
        it('should equal 15 if binary number is 1111', function () {
            assert.equal((15), binaryToDecimal(1111))
        })
        it('should equal 31 if binar number is 11111', function () {
            assert.equal((31), binaryToDecimal(11111))
        })
    })
    context('Should return a null if the binary has a number other than 0 or 1', function () {
        it('should return null if binary number is 1002', function () {
            assert.equal((null), binaryToDecimal(1002))
        })
        it('should return null if binary number is 1220', function () {
            assert.equal((null), binaryToDecimal(1220))
        })
    })
})