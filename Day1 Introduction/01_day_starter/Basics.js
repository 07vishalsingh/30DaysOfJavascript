// ** << Basics of js Starts here >>  **

//* Declare a variable named 'baby' and assign a string value

let baby = "Hello, sweety!";
// Display the value of the variable in the "console"

console.log(baby);

//* update the variable with a new value */

baby = " You ruined my life!";
// Display the update value
console.log(baby);

// ** Numbers **
const a = 5;
let b = 3.14;
let sum = a + b;
console.log("Sum:", sum);

// ** Booleans **
let isTrue = true;
let isFalse = false;
console.log("Boolean values:", isTrue, isFalse);

// ** Objects **
let human = {
  name: "Ayushi",
  age: 22,
  isLover: true,
};
console.log("Human's age:", human.age);
console.log("Human's isLover:", human.isLover);

// ** strings **
let firstName = "Vishal";
let lastName = "Singh";
let fullName = firstName + "" + lastName;
console.log("Full Name:", fullName);

// ** Arrays **
let numbers = [1, 2, 3, 4, 5];
let fruits = ["mango", "apple", "banana"];
console.log("Array elements:", numbers[2], fruits.length);

// ** undefined and null **
let undefinedVariable;
let nullValue = null;
console.log("Undefined variable:", undefinedVariable);
console.log("Null value", nullValue);

// ** constants **
const gravity = 9.81;
// we cant reassign a constant
console.log("Gravity:", gravity);

// ** Template Litrals **
let product = "Pizaa";
let price = 99.99;
console.log(`The ${product}`);
console.log(`costs ${price}`);

// ** << Basics of js Ends here >>  **
