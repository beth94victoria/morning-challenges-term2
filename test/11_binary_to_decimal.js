let assert = require('assert')
let binaryToDecimal = require('../11_binary_to_decimal')

describe('Binary to decimal', function () {
    context('should convert a valid binary number to decimal', function () {
        it('should convert 1001 to 9', function () {
            assert.equal((9), binaryToDecimal(1001))
        })
    })
    it('Should convert a binary to its decimal value', function () {
        assert.equal((9), binaryToDecimal(1001))
        assert.equal((15), binaryToDecimal(1111))
        assert.equal((31), binaryToDecimal(11111))
    })
    it('Should return a null if the binary has a number other than 0 or 1', function () {
        assert.equal((null), binaryToDecimal(1002))
        assert.equal((null), binaryToDecimal(1220))
    })
})