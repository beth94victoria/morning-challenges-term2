var assert = require('assert');
var oddOrEven = require('../09_odd_or_even');


describe('oddOrEven', function () {
    context('Should "odd" or "even" depending on the number', function () {
        it('0 should be even', function () {
            assert.equal(oddOrEven([0]), 'even')
        })
        it('1 should be odd', function () {
            assert.equal(oddOrEven([1]), 'odd')
        })
        it('empty should be even', function () {
            assert.equal(oddOrEven([]), 'even')
        })

    });
    context('Even tests', function () {
        it('0,1,5 should equal even', function () {
            assert.equal(oddOrEven([0, 1, 5]), 'even')
        })
        it('0,1,3, should equal even', function () {
            assert.equal(oddOrEven([0, 1, 3]), 'even')
        })
        it('1023,1,2 should equal even', function () {
            assert.equal(oddOrEven([1023, 1, 2]), 'even')
        })

    });
    context('Negative Even tests', function () {
        it('0,-1,-5 should equal even', function () {
            assert.equal(oddOrEven([0, -1, -5]), 'even')
        })
        it('0,-1,-3 should equal even', function () {
            assert.equal(oddOrEven([0, -1, -3]), 'even')
        })
        it('-1023,1,-2 should equal even', function () {
            assert.equal(oddOrEven([-1023, 1, -2]), 'even')
        })
    });
    context('Odd tests', function () {
        it('0,1,2 should equal odd', function () {
            assert.equal(oddOrEven([0, 1, 2]), 'odd')
        })
        it('0,1,4 should equal odd', function () {
            assert.equal(oddOrEven([0, 1, 4]), 'odd')
        })
        it('1023,1,3 should equal', function () {
            assert.equal(oddOrEven([1023, 1, 3]), 'odd')
        })
    });
    context('Negative Odd tests', function () {
        it('0,-1,2 should equal odd', function () {
            assert.equal(oddOrEven([0, -1, 2]), 'odd')
        })
        it('0, 1, -4 should equal odd', function () {
            assert.equal(oddOrEven([0, 1, -4]), 'odd')
        })
        it('-1023,-1,3 should equal odd', function () {
            assert.equal(oddOrEven([-1023, -1, 3]), 'odd')
        })
    });
});