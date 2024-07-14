


// BigInt Literals
// BigInt literals are created by appending n to the end of an integer literal
// BigInt literals are created by calling the BigInt function
// BigInt literals are created by calling the BigInt function with a string

let bigIntLiteral = 1234567890123456789012345678901234567890n;
console.log(bigIntLiteral);

let bigIntFunction = BigInt(1234567890123456789012345678901234567890);
console.log(bigIntFunction);

let bigIntFunctionString = BigInt('1234567890123456789012345678901234567890');
console.log(bigIntFunctionString);

