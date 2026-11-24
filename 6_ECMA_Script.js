//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================

//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================

//? let Keyword:  The let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.

// var myFavWorldBestName = "vinod Bahadur Thapa";
// myFavWorldBestName = "thapa technical";
// console.log(myFavWorldBestName);

// let myFavWorldBestName = "vinod Bahadur Thapa";
// myFavWorldBestName = "thapa technical";
// console.log(myFavWorldBestName);

//? const Keyword: The const keyword is used to declare variables with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variables are immutable.

// pi=3.142 * r * r

// const myFavWorldBestName = "vinod Bahadur Thapa";
// // myFavWorldBestName = "thapa technical";
// console.log(myFavWorldBestName);

// //? 1st show what var can do
// var name = "thapa";

// if (true) {
//   var name = "vinod";
//   console.log(name);
// }

// name = "technical";
// console.log(name);

//? ex2: with the help of let keyword
// let name = "thapa";

// if (true) {
//   name = "vinod";
//   console.log(name);
// }

// name = "technical";
// console.log(name);

//? ex2: with the help of let keyword
// const name = "thapa";

// if (true) {
//   const name = "vinod";
//   console.log(name);
// }

// name = "technical";
// console.log(name);

// var
// if (true) {
//   var name = "vinod";
//   console.log(name);
// }
// name = "technical";
// console.log(name);

// let
// if (true) {
//   let name = "vinod";
//   console.log(name);
// }
// // name = "technical";
// console.log(name);

//* ==========================================
//* TEMPLATE STRINGS - EcmaScript 2015
//* =========================================

//? In ECMAScript 6 (ES6), template strings, also known as template literals, 
//? provide a convenient and flexible way to create strings in JavaScript. 
//? Template strings are enclosed in backticks (``) rather than single or double quotes.

// let firstName = "vinod";
// let lastName = "thapa";

// //Using template string for string interpolation
// let fullName = firstName + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//? String Interpolation:  Template strings support string interpolation,
//?allowing you to embed expressions directly within the string.Interpolated expressions are enclosed in ${}

// let age = 30;

// // String interpolation with variable
// let message = `I am ${age} years old.`;
// console.log(message);

// Multi-line Strings: Template strings make it easy to create multi-line strings without the need for concatenation or escape characters.
// let multiLineString = `
//   This is a multi-line
//   string using template literals.
//   It's much cleaner and easier to read.
// `;

// console.log(multiLineString);

//? Expression Evaluation: Template expressions can include any valid JavaScript expression.

//! Practice Time
// console.log("5 * " + num + " = " + 5 * num);
// let num = 5;
// console.log(`5 * ${num} = ${5 * num}`);

//? Advantages:
//? Readability: Template strings make the code more readable, especially for complex string constructions.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any JavaScript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straightforward.

//* ==========================================
//* DEFAULT Parameters
//* =========================================

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.

//? Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//! Write a function to find sum of two numbers? What if during function call user only passed one argument?

// function sum(a = 20, myCurClass = 10) {
//   return a + b;
// }
// console.log(sum());

//* ==========================================
//*  FAT ARROW FUNCTION
//* =========================================

//? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.

// const sum = function (a, b) {
//   let result = `The sum of ${a} and ${b} is ${a + b}.`;
//   console.log(result);
// };

// sum(5, 5);

// const sum = (a, b) => console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// sum(5, 5);

//! How to convert the same in fat arrow function
// Syntax
// const functionName = (param1, param2, ...) => {
//     // Function body
//     return result; // Optional
//   };

// todo NOTES

// //?🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));

// //? 🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = (a) => `The square of ${a} is  ${a * a}`;
// console.log(square(5));

// //? 🚀 3: If there are no parameters, use an empty set of parentheses ().
// const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
// greet();

//! ==========================================
//!  Part 2 of Modern JavaScript
//! =========================================

//* =========================================
//*  Object Properties - Modern JavaScript
//* =========================================
// const name = "vinod";
// const age = 30;

//? traditional way
// const person = { name: name, age: age };
//? Using shorthand notation for object property
// const person = { name, age };
// console.log(person);
// Instead of specifying name: name and age: age, you can simply use name and age directly within the object literal, thanks to ES6 shorthand property notation.

//* ==========================================
//*  Destructuring - Modern JavaScript
//* =========================================
//? Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner.
//? Use Case: Makes code cleaner and avoids repetitive copying of values.

//* Destructuring Arrays:
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

//? 1: Extracting specific elements:
const numbers = [10, 20, 30];
// const first = numbers[0]; // Traditional way
// const [first, second, third] = numbers;
// console.log(second);

//? 2: Ignoring elements:
// const [, , third] = numbers;
// console.log(third);

//! Interview Questions
//! Write a program to swap two variables without using 3rd variable?
let a = 10;
let b = 30;
// a=30, b=10
//? Mostly will do using 3rd var
// let c = b; //c=30
// b = a; // b=10
// a = c; //a=30

//? without using 3rd variable
// [a, b] = [b, a];
// console.log(a, b);

//* Destructuring Objects:
const user = { name: "Vinod", age: 30 };
// we will see the real life use of it in our main project of weather app

//? Extracting properties:
// const myName = user.name; // Traditional way
// const { age, name } = user;
// console.log(age, name);

//? Renaming properties:
// const { name: fullName, age } = user; // Rename "name" to "fullName"
// console.log(fullName);

//* ==========================================
//*  Spread Operator - Modern JavaScript
//* =========================================
// JavaScript ES6 (ECMAScript 6) introduced the spread operator. The syntax is three dots(...) followed by the array (or iterable*).

//? 1. Copying an array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

//? 2: Concatenating arrays / Combining arrays
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [4, 5, 6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// // fruits.push("guava", "grapes");
// fruits.push(...["guava", "grapes"]);
// console.log(fruits);

//! One more useCases
//? In JavaScript, when you spread a string using the spread syntax (...), it converts the string into an array of its individual characters.

//? Traditional way
// const country = "INDIA";
// console.log(country.split(""));

//? New way of doing it
// const country = "INDIA";
// console.log([...country]);

//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

//? traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

//? with rest parameters
const sum = (a, b, ...numbers) => {
  //   console.log(typeof numbers);
  return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
};

console.log(sum(1, 2, 3, 4));

//TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* ==========================================
//*    ECMAScript Features (2016):
//* =========================================

//* ==============================
//*    Exponentiation Operator
//* ===============================

//? ES7 introduces a new mathematical operator called exponentiation operator. This operator is similar to using Math.pow() method. Exponentiation operator is represented by a double asterisk **. The operator can be used only with numeric values.

//* syntax
// base_value ** exponent_value;

//? Basic usage:
let base = 2;
let exponent = 3;
console.log("using Math.pow()", Math.pow(base, exponent));
console.log("using exponentiation operator", base ** exponent);

//? In expressions:
//! calculates the area of a circle with a radius of 5 units.
// let area = Math.PI * 5 ** 2;
// console.log(area.toFixed(2));

//* ==============================
//*  Array.includes()
//* ===============================
//? we have already cover in our world best JS course part-1 at 7:05:01 timeline

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//* =====================
//*  String padding
//* =====================

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a specific length.

//todo  Use Case: Makes formatting text easier and more predictable, especially for tables, alignments, and UI elements. No more messy, uneven lines disrupting your visual spells!

//? Using padStart() to pad from the beginning:
// const companyName = "Kodyfier";
// const paddedName = companyName.padStart(5);
// const paddedName = companyName.padStart(15);
// console.log(paddedName);
// console.log(paddedName.length);

//? Using padEnd() to pad from the end:
// const paddedName = companyName.padEnd(15);
// const paddedName = companyName.padEnd(15, "$");
// console.log(paddedName);

//todo Key points:
//? Both padStart() and padEnd() create a new padded string without modifying the original one.

//? They take two arguments:
//?   - targetLength: The total length of the padded string.
//?   - padString (optional): The string to use for padding (defaults to spaces).

//? If the original string is already longer than or equal to targetLength, it's returned as-is.

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have trailing commas in function declarations, functions calls, array literal & object literal:

// // Function parameter list
function greet(name, age, boolean) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

// // Function call
greet("John", 30, true);

// // Array literal
const colors = ["red", "green", "blue"];

// // Object literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================
//? We have already covered in our Objects Section. Please watch the section for same

//* ======================================
//*  Async Await - Async Functions
//* ======================================
//? We will cover later in the video and you gonna love that part & our final project is based on async await .


//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//* ==========================================
//*    ECMAScript Features (2018) / ES9
//* =========================================

//? List of new useful features added in ES8  👇
// Rest/Spread Properties
// Promise.prototype.finally()

//* ============================
//*  Rest/Spread Properties
//* =============================

//? ES6 introduced the concept of a rest element when working with array destructuring:
// const numbers = [1, 2, 3, 4, 5];
// [first, second, ...others] = numbers;

// and spread elements:
// const numbers = [1, 2, 3, 4, 5]
// const sum = (a, b, c, d, e) => a + b + c + d + e
// const sumOfNumbers = sum(...numbers)

//* ES2018 introduces the same but for objects.

//? Object and Rest Operator
// const student = {
//   age: 10,
//   name: "vinod",
//   isStudent: true,
// };

// const { age, ...others } = student;
// console.log(others);

//? Object and Spread operator
// const obj1 = { a: 10, b: 20, c: 50 };
// const obj2 = { c: 30, d: 40 };

// const newObj = { ...obj2, ...obj1 };
// console.log(newObj);

//* ============================
//*  Promise.finally()
//* =============================
//? We will cover later in our Promises section part of the video and you gonna love that part.

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//* ==========================================
//*    ECMAScript Features (2019) / ES10
//* =========================================

//? List of new useful features added in ES8  👇
// Array.prototype.{flat,flatMap}
// Object.fromEntries()
// String.prototype.{trimStart,trimEnd}
// Symbol.prototype.description
// Optional catch binding

//* ==================================
//*  Array.flat & Array.flatMap
//* ================================
//? flat() is a new array instance method that can create a one-dimensional array from a multidimensional array. (nested arrays into a single, flat array.)

// const nestedArray = [1, 2, [3, 4], 5];
const nestedArray1 = [1, [2, [3, [4]]], 5];

// const flattenedArray = nestedArray.flat();
// const flattenedArray = nestedArray1.flat(3);
// console.log(flattenedArray);

//? flatMap() is a new Array instance method that combines flat() with map(). It’s useful when calling a function that returns an array in the map() callback, but you want your resulted array to be flat:

// const arr = ["My name", "is vinod", "thapa"];
// const newArr = arr.flatMap((curVal) => curVal.split(" "));
// console.log(newArr);

//* ============================
//*  Object.fromEntries()
//* =============================
//? Objects have an entries() method, since ES2017.
//? It returns an array containing all the object own properties, as an array of [key, value] pairs:

//? ES2019 introduces a new Object.fromEntries() method, which can create a new object from such array of properties:
// const person = { name: "vinod", age: 30 };
// const entries = Object.entries(person);
// // console.log(entries);

// const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

// // // Now Think & let me know Why 🤔,
// console.log(person == newPerson);

//* ========================================
//* String.prototype.{trimStart,trimEnd}
//* =========================================

//? trimStart(): Return a new string with removed white space from the start of the original string
// console.log("Testing".trimStart());
// console.log("           Testing".trimStart());
// console.log("     Testing     ".trimStart());
// console.log("Testing    ".trimStart());

//? trimEnd(): Return a new string with removed white space from the end of the original string
// console.log("Testing".trimEnd());
// console.log("           Testing".trimEnd());
// console.log("     Testing     ".trimEnd());
// console.log("Testing    ".trimEnd());

//* ================================
//* Symbol.prototype.description
//* ===============================

//? In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). It represents a unique identifier that is immutable and guaranteed to be unique. Symbols are often used as property keys in objects to avoid naming conflicts.

//? The Symbol.prototype.description property is a new feature introduced in ECMAScript 2019 (ES10). It allows you to retrieve the description of a symbol. When you create a symbol, you can optionally provide a description as its parameter. The description property lets you access this description.

// const mySymbol = Symbol("This is my symbol");
// console.log(typeof mySymbol);
// console.log(mySymbol.description);

//* ================================
//*  Optional catch binding
//* ===============================
//? In ECMAScript 2019 (ES10), a new feature called "optional catch binding" was introduced for the try...catch statement. This feature allows you to omit the parameter in the catch block, making it optional.

//? We previously had to do: 👇
try {
  //...
} catch (e) {
  //handle error
}

//? Now we can omit that optional parameter 👇
try {
  10 + 5;
} catch {
  console.log("there is an error");
}
//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* ==========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

//* ===================
//*  BigInt
//* ================
//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

//? Creating BigInts:
//? - Using the `n` suffix:

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber);

// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// let num = maxNumber + 10n;
// console.log(num);

//* =======================================
//*  Nullish Coalescing Operator ??
//* ===================================
//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

// let favNum = 0; // falsy
// // userFavNum = favNum || 10;
// userFavNum = favNum ?? 10;
// console.log(userFavNum);

//* =======================================
//*  Optional Chaining Operator (?.)
//* ===================================
//? It provides a concise way to access properties of an object without worrying about the existence of intermediate properties. It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.

// const person = {
//   name: "John",
//   address: {
//     city: 0,
//     zipCode: 12345,
//   },
// };

//? Accessing nested properties without optional chaining
// const city = person.address;
// const city = person.address ? person.address.city : "city is not present";
// console.log(city);

//? with optional chaining
// const city = person.address?.city ?? "city is not present";
// console.log(city);
//? One more example
// The optional chaining operator can be chained multiple times to access deeply nested properties:

// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//     zipCode: 12345,
//     coordinates: {
//       latitude: 40.7128,
//       longitude: -74.006,
//     },
//   },
// };

// // Accessing deeply nested properties with optional chaining
// const latitude = person.address?.coordinates?.latitude ?? "not present";
// console.log(latitude);

//* =======================================
//*  Promise.allSettled()
//* ===================================
//? We will cover later in our Promises section part of the video and you gonna love that part.


//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* ==========================================
//*    ECMAScript Features (2021) / ES12
//* =========================================

//? List of new useful features added in ES8  👇
// String.prototype.replaceAll()
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators
// Promise.any()

//* ==========================================
//*  String.prototype.replaceAll()
//* =========================================
//? replaceAll in JavaScript is a function that replaces all occurrences of a specified value with another value in a given string.

//? Replacing all occurrences of a word:
// const originalString = "Hello, world! Hello again.";
// const newString = originalString.replaceAll("Hello", "Hi");
// console.log(newString);

//? Replacing multiple spaces with a single space:
// const text = "This   has   extra       spaces.";
// const normalizedText = text.replaceAll(/\s+/g, " ");
// console.log(normalizedText);

//* =====================================================
//*  Logical Assignment Operators (||=, &&=, ??=)
//* ====================================================

//? Logical OR-Assignment (||=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise, it leaves the left-hand operand unchanged.
// let x = false;
// x = x || true; // equivalent to: x = x || true;
// console.log(x); // Output: true

// let y = 10;
// y ||= 20; // equivalent to: y = y || 20;
// console.log(y); // Output: 10 (unchanged)

//? Logical AND-Assignment (&&=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value. Otherwise, it leaves the left-hand operand unchanged.
// let x = true;
// x &&= false; // equivalent to: x = x && false;
// console.log(x); // Output: false

let y = 0;
y &&= 20; // equivalent to: y = y && 20;
console.log(y); // Output: 20

//* ======================
//*  Numeric Separators
//* ====================
//? This feature allows underscores (_) to be used as separators within numeric literals to improve readability.
const bigNumber = 1_000_000;
console.log(bigNumber);
// Output: 1000000;

//* ======================
//*  Promise.any()
//* ====================
//? Promise.any(): This method takes an iterable of Promise objects and returns a single Promise that resolves as soon as any of the input Promises fulfill.

const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "Promise 1")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Promise 2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "Promise 3")
);

Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));

//? Difference: while Promise.race() does indeed consider both fulfilled and rejected Promises, Promise.any() only looks for fulfillment among the input Promises. If all input Promises are rejected, Promise.any() will reject with an AggregateError containing all the rejection reasons.

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// .at() function for indexing
// Object.hasOwn(obj, propKey)

//* ===============
//*  .at()
//* =============
//? Before ES2022, square bracket notation was used to fetch a particular element in an array. This method is straightforward unless you need to perform a backward iteration, i.e., negative indexing. In the case of negative indexing, the common practice was to use arr[arr.length — N], where array length is referred to and indexed from the end.

//? The .at() method introduced in ES2022 has simplified this process. In a case of positive indexing, .at() will work the same as the square brackets. But for negative indexing, the .at() method allows starting the iteration from the end.

// const array = [1, 2, 4, 5, 6, 7];
// // console.log(array[array.length - 1]);
// console.log(array.at(-1));

//todo Note Datatypes supporting this function. 👇
// String
// Array
// All Typed Array classes: Uint8Array etc.

//* =====================================
//*  Object.hasOwn(obj, propKey)
//* =====================================
//? Object.hasOwn() is a static method that you can use to check if a property exists in an object or not. It returns true if the specified object contains the indicated property as its own, and if the property is inherited or doesn’t exist, it returns false. This method takes the object as the first argument and the property you want to check as the second.

//? Object.hasOwn is the intended alternative for the Object.prototype.hasOwnProperty method. Although Object.prototype.hasOwnProperty has been in JavaScript specification for quite a time, it has some drawbacks.

const book = {
  name: "World Best JS Course",
  author: "Thapa Technical",
};

// // Using Object.prototype.hasOwnProperty() method
// console.log(book.hasOwnProperty("name")); //Output: true
// console.log(book.hasOwnProperty("price")); //Output: false

// // Using Object.hasOwn method
// console.log(Object.hasOwn(book, "name"));

//! Issues with hasOwnProperty
//? Issue 01: Doesn't work for objects created using Object.create(null)

const student = Object.create(null);
console.log(typeof student);
student.name = "vinod";
// console.log(student.hasOwnProperty("name"));
console.log(Object.hasOwn(student, "name"));

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)

//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element from the last to first of the array based on a condition.
// const array = [1, 2, 3, 4, 5, 6, 4];
// console.log(array.findLast((elem) => elem > 4));
// console.log(array.findLastIndex((elem) => elem));

//* ===============================================
//*  New Array.prototype functions
//* ==============================================

// const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];

// //? Array.prototype.toReversed();
// const reversedNum = myNames.toReversed();
// console.log("original", myNames);
// console.log("reversed", reversedNum);
// //todo if it's not working run in browser

// //? Array.prototype.toSorted(compareFn);
// const sortedArr = myNames.toSorted();
// console.log("original", myNames);
// console.log("sorted", sortedArr);

// //? Array.prototype.toSpliced(start, deleteCount, ...items);
// const splicedArr = myNames.toSpliced(1, 1, "thapaTechnical");
// console.log("original", myNames);
// console.log("spliced", splicedArr);

// //? Array.prototype.with(index, value);
// //* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.

// const replaceWith = myNames.with(2, "thapaTechnical");
// console.log("original", myNames);
// console.log("replaced", replaceWith);

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)

//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element from the last to first of the array based on a condition.
// const array = [1, 2, 3, 4, 5, 6, 4];
// console.log(array.findLast((elem) => elem > 4));
// console.log(array.findLastIndex((elem) => elem));

//* ===============================================
//*  New Array.prototype functions
//* ==============================================

const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];

//? Array.prototype.toReversed();
const reversedNum = myNames.toReversed();
console.log("original", myNames);
console.log("reversed", reversedNum);
//todo if it's not working run in browser

//? Array.prototype.toSorted(compareFn);
const sortedArr = myNames.toSorted();
console.log("original", myNames);
console.log("sorted", sortedArr);

//? Array.prototype.toSpliced(start, deleteCount, ...items);
const splicedArr = myNames.toSpliced(1, 1, "thapaTechnical");
console.log("original", myNames);
console.log("spliced", splicedArr);

//? Array.prototype.with(index, value);
//* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.

const replaceWith = myNames.with(2, "thapaTechnical");
console.log("original", myNames);
console.log("replaced", replaceWith);

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++