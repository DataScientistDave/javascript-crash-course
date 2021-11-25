//console.log('hello world');
// use let instead of var - apparently better
let name = 'Nisarg';
console.log(name);
// use camel casing and variables are case sensitive
// can declare like this
//let firstName, lastName;
//But better to declare on new line


//Constants
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//Types
// Primitive types = String, Number (don't have floats or ints), Boolean, undefined, null
let firstName = 'Mosg' //String literal
let age = 30; //Number
let isApproved = true; //Boolean
let lastName; //undefined
let a = null; //kinda like None in python, typeof a = Object

//Dynamic types - everything in javascript is - use typeof in console
let b = 'String';
b = 2;
console.log(b);

//Reference Types
// Objects, Arrays and Functions
// Below is object literal
let person = {
    name: 'Mosh',
    age: 30
};
console.log(person);
//changing properties
person.name = 'Sam';
// Can also do this
//person['name'] = 'Mary';
console.log(person.name);

let selectedColours = ['red','blue'];
console.log(selectedColours);
console.log(selectedColours[0]);
// Dynamic lengths and types of array
selectedColours[2] = 3;
console.log(selectedColours);
console.log(selectedColours.length);

function greet(name)
{
    console.log('Hello '+ name);
}

greet('John');

// Types of functions
// Calculates
function square(num){
    return num*num;
}

console.log(square(2));