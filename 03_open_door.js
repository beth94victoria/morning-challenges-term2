/*
Open Door
Return true if name is Simon and hasCoffee is true.
Otherwise return false.
Test your solution:
mocha 03_open_door.js
*/

function openDoor(input) {
    for (let item of input) {
        if (item.name === 'Simon' && item.hasCoffee == true) {
            return true
        }
    }
    return false
}


module.exports = openDoor