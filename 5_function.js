
// //* ===============================
// //* Function in JavaScript
// //* ==============================
// //? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

// //  3 students at a same time wants to find the sum of two numbers
// // 1st student
// // var a = 5,
// //   b = 10;
// // var sum1 = a + b;
// // console.log(sum1);

// // // 2nd student
// // var a = 15,
// //   b = 15;
// // var sum2 = a + b;
// // console.log(sum2);

// // // 3rd student
// // var a = 55,
// //   b = 15;
// // var sum3 = a + b;
// // console.log(sum3);

// // lets make a reusable code

// // function sum(a, b) {
// //   return a + b;
// // }

// // console.log(sum(5, 5));
// // console.log(sum(15, 50));
// // console.log(sum(25, 750));

// //* ===============================
// //* Function Declaration:
// //* ==============================

// //? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
// //? This step defines the function and specifies what code should be executed when the function is called.

// // function greet() {
// //   console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// // }

// //* =================================================
// //* Function Invocation (Calling a Function):
// //* =================================================

// //?After declaring a function, you can invoke or call it by using its name followed by parentheses.
// //? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

// //? How to call a function
// // greet();

// //! Practice Time
// //! 1. Write a function to find the sum of two numbers.

// //todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// // Function definition
// // function sum() {
// //   var a = 15,
// //     b = 10;
// //   console.log(a + b);
// // }

// // // Calling the function
// // sum();
// // sum();
// //* ==============================
// //* Function Parameter:
// //* ==============================

// //? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// // Syntax: function functionName(parameter1, parameter2, ...params) {
// //   // Function body
// //   // Code to be executed when the function is called
// // }

// //* ==============================
// //* Function Argument:
// //* ==============================

// //? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

// //? syntax:
// //? functionName(argument1, argument2, ...);

// //! Practice Time
// //? Let's say we want to greet students with one same line
// //! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".
// // function greet(name) {
// //   console.log("Hello " + name + ", Welcome to Thapa Technical JS Course");
// // }

// // greet("ram");
// // greet("sita");

// //! 1. Write a function to find the sum of two numbers with parameters.
// // function sum(a, b) {
// //   console.log(a + b);
// // }
// // // Calling the function
// // sum(5, 10);
// // sum(50, 10);

// //* ==============================
// //* Function expressions
// //* ==============================
// //? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// // var result = function sum(a, b) {
// //   console.log(a + b);
// // };

// // result(10, 15);

// //* ==============================
// //*  Anonymous Function
// //* =============================
// //? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

// // var result = function (a, b) {
// //   console.log(a + b);
// // };

// // result(10, 15);

// //* ==============================
// //*  Return Keyword
// //* =============================
// //? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

// //? Syntax
// // return expression;

// //! Example 1: Returning a Sum of two number

// // function sum(a, b) {
// //   //   console.log(a + b);
// //   return a + b;
// //   console.log("hello I am function");
// // }

// // var result = sum(5, 5);
// // // console.log(result);

// // console.log("the sum of two number is " + result);

// // console.log(sum(5, 5));
// // console.log(sum(15, 50));
// // console.log(sum(25, 750));

// //* ==============================
// //* IIFE - immediately invoked function expression
// //* =============================
// //? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// // Syntax
// // (function () {
// //   // code to be executed
// // })();

// // var result = (function (a, b) {
// //   console.log(a + b);
// //   return a + b;
// // })(5, 10);

// // console.log("the sum of two number is " + result);

// // !Practice Time ( IIFE with Parameters)

// //? Interview Questions

// //! Question 1: Calculator Function
// //! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// // console.log(calculator(5, 2, '+')); // Output: 7
// // console.log(calculator(8, 4, '-')); // Output: 4
// // console.log(calculator(10, 2, '/')); // Output: 5

// // const calculator = (num1, num2, operator) => {
// //   let result;
// //   switch (operator) {
// //     case "+":
// //       return num1 + num2;

// //     case "-":
// //       result = num1 - num2;
// //       return result;

// //     case "*":
// //       result = num1 * num2;
// //       return result;

// //     case "/":
// //       if (num2 === 0) {
// //         return "0 is not allowed";
// //       } else {
// //         result = num1 / num2;
// //         return result;
// //       }

// //     default:
// //       return "no operator found";
// //   }
// // };

// // console.log(calculator(5, 2, "+")); // Output: 7
// // console.log(calculator(8, 4, "-")); // Output: 4
// // console.log(calculator(10, 0, "/")); // Output: 5

// //! Reverse a String:
// //! Write a function to reverse a given string without using built-in reverse methods.

// const isReverse = (str) => {
//   let reverse = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     reverse = reverse + str[char];
//   }
//   return reverse;
// };

// console.log(isReverse("vinod thapa"));

// //! Palindrome Check:
// //! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

// // // isi     isi
// // radar
// // level
// const isPalindrome = (str) => {
//   let reverse = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     reverse = reverse + str[char];
//   }
//   //   if (str === reverse) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   return str === reverse ? true : false;
// };

// console.log(isPalindrome("level"));


// // prectics

// let a = 10,b =20;
// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function sum(a,b){
//     return a+b;
// }
// function divisible(a,b){
//     return a/b;
// }
// function multiple(a,b){
//     return a*b;
// }
// console.log("sum : "+sum(a,b));
// console.log("sub : "+sub(a,b));
// console.log("multiple "+multiple(a,b));
// console.log("divisible "+divisible(a,b));

// let String = "Pranav";
// console.log(String.codePointAt(2));

// Reverse a String: Write a function to reverse a given string without using built-in reverse methods.
// !function reverseStr(text){
//     let reversed ="";
//     for (let i = text.length-1; i >=0; i--) {
//        reversed += text[i];
//             }
//             return reversed
// }
// console.log(reverseStr("pranav"));

// 2: Palindrome Check: Create a function to determine if a given string is a palindrome (reads the same backward as forward).

// function isPalindrome(text){
//      const cleaned = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let low =0;
//     let high =cleaned.length-1;
//     while(low<high){
//         if(cleaned[low]!==cleaned[high]){
//             return false;
//         }low++;
//         high--;
//     }
//     return true;
// }
// console.log(isPalindrome("Racecar"));                        // true
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("hello"));                          // false

// // Calculator Function: Write a JavaScript function calculator that
// // takes two numbers and an operator as parameters and returns the
// // result of the operation. The function should support addition,
// // subtraction, multiplication, and division.

// function calculator( num1, num2 ,operator){
//     switch(operator){
//         case"+": return num1+num2;
//         case"-": return num1-num2;
//         case"*": return num1*num2;
//         case '/':
//       if (num2 === 0) {
//         return 'Error: Division by zero is not allowed.';
//       }
//       return num1 / num2;
//     default:
//       return 'Error: Invalid operator. Please use +, -, *, or /.';
//     }
// }

// // Example Usage:
// console.log(calculator(10, 5, '+')); // Output: 15
// console.log(calculator(10, 5, '-')); // Output: 5
// console.log(calculator(10, 5, '*')); // Output: 50
// console.log(calculator(10, 5, '/')); // Output: 2
// console.log(calculator(10, 0, '/')); // Output: Error: Division by zero is not allowed.
// console.log(calculator(10, 5, '%')); // Output: Error: Invalid operator. Please use +, -, *, or /.


// // !Find Maximum

// // ? Write a function named findMax that accepts two numbers and returns the greater number.

// function findMax(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   }
//   return num2;
// }

// console.log(findMax(10, 25));

// //? find the second maximum number from a list or array of numbers,

// function secondMax(nums){
//   let firstMax = -Infinity;
//   let secondMax = -Infinity;

//    for (let num of nums) {
//   if(num>firstMax){
//     secondMax=firstMax;
//     firstMax =num;
//   }else if (num > secondMax && num < firstMax) {
//       secondMax = num;
//     }
// }
// return secondMax === -Infinity ? null : secondMax;
// }

// console.log(secondMax([10, 250, 8, 42, 19]));

// //! Q. Function Expression

// // Create a function expression named calculateArea that accepts the length and width of a rectangle and returns its area.

// const calculateArea = function ( num1, num2 ){
//     return num1*num2;
// }
// console.log(calculateArea(3,5));


// // !Q. Return Multiple Values

// // Write a function named getUserDetails that accepts a name, age and city and returns all three values together in an object.

// function getUserDetails(name,age,city){
//     return{
//      name:name,
//      age: age,
//      city: city
//     }
// }

// const user = getUserDetails("Pranav", 22, "Bhopal"); 
// console.log(user);

// //! Q. Find Maximum
// //? Create an arrow function that accepts three numbers and returns the largest number.

// const findMax = (a, b, c) => {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// };

// console.log(max(6,2,9));

//! Q11. Callback Function

//Create a function named processNumber that accepts a number and a callback function.
//Pass the number to the callback and return its result.

// let processNumber = (nums, callback)=> {
//   return callback(nums);
// }
//   function double(num) {
//     return num * 2;
// }

// function square(num) {
//     return num * num;
// }

// function increment(num) {
//     return num + 1;
// }

// console.log(processNumber(5, double));    // 10
// console.log(processNumber(5, square));    // 25
// console.log(processNumber(10, increment)); // 11


//!Callback Function
// Q12. Perform an Operation Using Callback

// const calculate = (num1, num2,callback)=>{
//   return callback(num1,num2);
// }
// function add(num1,num2){
//   return num1+num2;
// }
// function subtract(num1,num2){
//   return num1-num2;
// }
// function multiply(num1,num2){
//   return num1*num2;
// }
// function divide(num1,num2){
//   if(num2==0){
//     console.log("0 is not divide");
//   }
// }

// calculate(10, 5, add);
// calculate(10, 5, subtract);	
// calculate(10, 5, multiply);	
// calculate(10, 5, divide);

// Predict the output of a synchronous callback using forEach().

// function arrayPrint(arr){
// for (let i = 0; i <= arr.length-1; i++) {
// console.log(arr[i]);
// }
// done();
// }
// function done(){
//   console.log("Its done bro!");
// }
// const arr = [10, 20, 30];

// arrayPrint(arr);

// !Q2. Predict the output of an asynchronous callback.
//? Use setTimeout() with a 2-second delay and three console.log() statements.

function arrayPrint(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
  }
  console.log("Before async callback");
  setTimeout(done, 2000);
}

function done() {
  console.log("Its done bro!");
}

const arr = [10, 20, 30];

arrayPrint(arr);