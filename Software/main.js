/* Refferenties:


*/

console.log("begin");
var fs = require('./functionset');

// Get process.stdin as the standard input object.
var standard_input = process.stdin;
// Set input character encoding.
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log("Please input text to be reversed.");
// When user input data and click enter key.
standard_input.on('data', function (inputString) {
	var reversedString = fs.reverseString(inputString);
	console.log('Reversed string : ' + reversedString + "\n\r");
});

