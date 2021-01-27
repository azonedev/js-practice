// string operations

//Escape Sequences in Strings
let lengthOfName = 0;
var name = "Abdullah Al Mamun";
lengthOfName = name.length;
console.log(lengthOfName);

// get a char from a string
var str ="Abdullah";
console.log(str[0]);

// Understand String Immutability
str[0] = 'B';
console.log(str);
// Use Bracket Notation to Find the Last Character in a String
var lastChar = str[str.length-1];
