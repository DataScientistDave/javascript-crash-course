// Don't use var anymore coz of global scope
// let, const use these instead

// Variables
// const age = 30;
// console.log(age);
// Always use const unless you are going to reassign the value
let score;
score = 10;
console.log(score);
score++;
console.log(score);

// Data Types
// Strings, Numbers, Boolean, null, undefined, Symbol
const name = 'John';
const age = 30;
const rating = 4.5; // still a number
const isCool = true;
const x = null;
const y = undefined;
console.log(name, age, rating, isCool, x, y);
console.log(typeof rating);

// More on strings
// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Better way
console.log(`My name is ${name} and I am ${age}`);
// String properties and methods
const s = 'Hello World';
const t = 'technology, computers, it, code'
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5)); // Creates a substring from 0th index and stops before the 5th index
console.log(s.split(''));
console.log(t.split(', ')); // splits at every comma and space

// Arrays - variables that hold multiple values
const numbers = new Arrays(1,2,3,4,5);
console.log(numbers);
// better way to create arrays
