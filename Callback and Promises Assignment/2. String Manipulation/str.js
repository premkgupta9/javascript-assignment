/*2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
with the manipulated string or the new string to the console.
*/

function manipulateString(inputstring, callback) {
    const manipulateString = inputstring.toUpperCase();

    callback(manipulateString);
}

function logString(manipulateString) {
    console.log(`The manipulated string is: ${manipulateString}`);
}

//  expected output:
manipulateString("hello, world!", logString); // The manipulated string is: HELLO, WORLD!