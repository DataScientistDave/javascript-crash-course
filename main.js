// This is from traversy media

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
// const numbers = new Arrays(1,2,3,4,5);
// console.log(numbers);
// better way to create arrays
const random = ['apple','orange','pears',10]; // not strictly typed
console.log(random)
console.log(random[0])
// Adding to an array
random.push('mangos')
console.log(random)
// At the front of the array
random.unshift('strawberries')
console.log(random)
//remove last entry
random.pop()
console.log(random)
// check if something is an array
console.log(Array.isArray(random))
// index of
console.log(random.indexOf('apple'))

//Objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
// How to access properties of an object
console.log(person.firstName)
console.log(person.hobbies[1])
console.log(person.address.state)
// Destructuring
const { firstName, lastName, address: { city } } = person;
console.log(city)
// Add properties
person.email = 'john@gmail'
console.log(person)
// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist apt',
        isCompleted: false
    }
]
console.log(todos[1].text)
// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// Loops
// For
for (let i=0; i<10; i++) {
    console.log(i)
}
//for each, map, filter
todos.forEach( (todo) => console.log(todo.text))
// map returns an array
const todoText = todos.map( (todo) => todo.text) // returns an array of just the text
console.log(todoText)
// 
const todoCompleted = todos.filter( (todo) => todo.isCompleted === true) // filtering 
console.log(todoCompleted)

// Conditionals
const a = 4;
const b = 11;

if(a > 5 || b > 10) { // && = and
    console.log('Hey')
}
// Also have else if and else
// Ternary operators
const color = a > 10 ? 'red': 'blue'
console.log(color)

// Functions
function addNums(num1,num2) {
    return num1 + num2
}
console.log(addNums(5,5))
// Arrow functions
const newAddFunc = (num1,num2) => num1 + num2 // only can do this in one line coz returning one thing. Otherwise, use brackets
console.log(newAddFunc(5,5))
const multFunc = num1 => num1*2
console.log(multFunc(1))

// OOP
// Constructor functions
function Person(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
// Instantiate object
const person1 = new Person('John', 'Doe', '23/12/12');
console.log(person1)
console.log(person1.getFullName)

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}