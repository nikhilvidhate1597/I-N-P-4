// //----1----- What is a Temporal Dead Zone?

// // the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value
// // Temporal Dead Zone and Hoisting are two essential terms in JavaScript. But understanding how they work can easily confuse you if you don't approach them properly
// // A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

// // let babyAge = 1;
// // let isBirthday = true;

// // if (isBirthday) {
// //     let babyAge = 2;
// // }

// // console.log(babyAge);

// // console.log(aVar); // undefined
// // console.log(aLet); // Causes ReferenceError: Cannot access 'aLet' before initialization

// // var aVar = 1;
// // let aLet = 2;

// //----2----What is the for-in loop in JavaScript? Give its syntax
// // The for loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times. Its syntax is: for(initialization; condition; increment) { // Code to be executed.
// // The syntax of the for...in loop is: for (key in object) { // body of for...in } In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties. Note: Once you get keys, you can easily find their corresponding values.

// const student = {
//     name: 'Monica',
//     class: 7,
//     age: 12
// }

// // using for...in
// for (let key in student) {

//     // display the properties
//     console.log(`${key} => ${student[key]}`);
// }

// //----3----Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript?
// // 1.Local Scope occurs when you create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function. Any variable created inside the yellow box is a local variable, just like any variable inside blue box is a global one

// let a = "Hello world";

// function greet() {
//     let b = "Welcome"
//     console.log(a + b);
// }
// greet();
// console.log(a + b);
// 2.Block Level Scope: This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped. In order to access the variables of that specific block, we need to create an object for it.

// program showing block-scoped concept
// // global variable
// let a = 'Hello';

// function greet() {

//     // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable c cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }

// greet();
//3.Function scope: Variables that are declared inside a function are called local variables and in the function scope. Local variables are accessible anywhere inside the function. Block scope: Variable that is declared inside a specific block & can't be accessed outside of that block.
const add = function(a, b) {
    return a + b;
}

// Named function expression
const subtractResult = function subtract(a, b) {
    return a - b;
}

console.log(add(3, 2)); // 5
console.log(subtractResult(3, 2));

//4.The scope and scope chain are fundamental concepts in JavaScript and other programming languages. Also, one of the most confusing concepts at the beginning.the scope and scope chain is crucial for writing efficient, clean code and essential to building a solid foundation and mastering JavaScript.

// const userName = "Raju";
// console.log(userName);

// function greetingcard() {
//     const userName = "Raju";
//     console.log(`Hello ${userName}!`);
// }
// greetingcard();


// //-----4----- What is difference between null and undefined and where to use what?
// // In JavaScript, undefined is a type, whereas null an object. It means a variable declared, but no value has been assigned a value. Whereas, null in JavaScript is an assignment value. You can assign it to a variable.

// // undefined --  It means a variable declared, but no value has been assigned a value.

// var demo;
// alert(demo);
// alert(typeof demo);

// // null

// // Whereas, null in JavaScript is an assignment value. You can assign it to a variable.

// var demo = null;
// alert(demo);
// alert(typeof demo);


//-----5---- what is Symbol?

// Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined. It was introduced in ECMAScript 2015, so just a few years ago. It's a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.

//-----6----- Write code to explain map and filter in arrays? 
// map creates a new array by transforming every element in an array individually.
// filter creates a new array by removing elements that don't belong.
// reduce , on the other hand, takes all of the elements in an array and reduces them into a single value. Just like map and filter , reduce is defined on Array.

// Map
// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]


// Filter
// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

// const number = [1, 2, 3, 4];
// const evens = number.filter(item => item % 2 === 0);
// console.log(evens);

//-----7------ Please explain Self Invoking Function and its code
// In JavaScript, a “Self-Invoking” function is a type of function that is invoked or called automatically after its definition. The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another set of parenthesis.
//  Function expressions will execute automatically if the expression is followed by (). You cannot self-invoke a function declaration.
(function() {
    document.getElementById("demo").innerHTML = "Hi! I am calling myself";
})();