// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

function doubleArray(array, callback) {
    const doubleArray = array.map((num) => {
        return callback(num);
    });
    return doubleArray;
}

const originalArray = [1, 2, 3, 4, 5];
function callback(num) {
    return num = 2;
}

const doubleArray = doubleArray(originalArray, callback);

console.log(doubleArray); // output: [2, 4, 6, 8, 10]
