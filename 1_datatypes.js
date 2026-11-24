//! datatypes two types 

//? 1 primitive data types
//? 2 object data types

//! 1 primitive data types : Primitive values are immutable, meaning they cannot be modified after creation. They are stored directly on the memory stack

// 1 Number :

console.log("example for Number \n");
var num = 5;
console.log(num);
console.log( typeof num +"\n");

// 2 String :

console.log("example for String \n");
var str = "pranav";
console.log(str);
console.log( typeof str +"\n");

// 3 Boolean :

console.log("example for boolean \n");
var bool = true;
console.log(bool);
console.log( typeof bool +"\n");

//  4 undefined : A variable that is declared but not given a value defaults to undefined.

console.log("example for undefined \n");
var pranav;
console.log(pranav);
console.log( typeof pranav);


// 5 null : An explicit assignment representing the intentional emptiness of a value or object.

console.log("example for null \n");
var badmemories = null;
console.log(badmemories);
console.log( typeof badmemories +"\n"); // data type is object  because of a legacy binary bug from the very first version of JavaScript in 1995

// 6 BigInt  : Handles numbers larger than the safe integer limit of the standard Number type. It is created by appending an n to an integer.

console.log("example for bigInt \n");
var num2 = 12345678900987654321n;
console.log(num2);
console.log( typeof num2 +"\n");

// 7 Symbol : Generates a completely unique token, commonly used to prevent property name collisions in objects.

console.log("example for symbol \n");
const mySymbol = Symbol("description");
console.log(mySymbol);
console.log(typeof mySymbol +"\n");

// convert String to number 
var myNum = "10";
console.log("convert String to number \n");
console.log(typeof myNum );
console.log(typeof +myNum); // + is used to convert String to number 
console.log(typeof Number(myNum) +"\n");

// convert String to number 
var myNum1 = 10;
console.log("convert number to String\n");
console.log(typeof myNum1 );
console.log(typeof String(myNum1)); // + is used to convert number to String  
console.log(typeof(myNum) +"\n");


//! truthy value condition 

// 1 true
// 2 any nonempty String
// 3 any non zero value
// 4 Array and object even if they are not empty

//! falsy value condition

// 1 false
// 2 0
// 3 empty String
// 4 null
// 5 undefined
// 6 not a number 

//! parseInt and parseFloat

//? parseInt :

const mystr ="42.5";
const mynum2 = parseInt(mystr);
console.log(mynum2); // output is 42

//? parseFloat :

const mystr2 ="42.5";
const mynum3 = parseFloat(mystr2);
console.log(mynum3); // output is 42.5



// ! Here are more examples
console.log(" Here are more examples \n")
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
console.log(parseFloat("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
+console.log(parseFloat("1.9"));
// 1 (decimal part is truncated)



let a = 20;
a = "this is javascript";
a = 20;
console.log(a);
//Because JavaScript is dynamically typed, this assignment does not cause an error message.