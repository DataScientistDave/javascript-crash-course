// creating object
/* const circle = {
    radius:1,
    location: {
        x:1,
        y:1
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw(); */

// object like above literal syntax -> is not good -> not good when duplicating objects

// JavaScript doesn't have any classes but ES6 does
// use either factory or constructor functions

//Factory Function
function createCircle(radius){
    // return creates the object
    return{
        // don't need to assign value if name is the same
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Functions
// Naming conventions first letter has to be capital
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);
another.draw();

//Circle function is actually an object
//Type these into console Circle.name and Circle.length
//Circle.call({},1); // sanme const another = new Circle(1);
// Also can do this but takes array - same as above
//Circle.apply({}, [1,2,3]);

//Arrays are also objects

let x = 10;
let y = x;

x = 20;

// x is 20 and y is 10

let a = {
    value:10
};

let b = a;

a.value = 20;
// a and b become 20, objects change values together
// Primitives are copied by value, Objects are copide by reference
// if you pass an object to function it also changes value

// Objects are dynamic. You can add new property

const circle2 = new Circle(10);
circle2.location = {x:1};
// Can also do it like this
// circle2['center-location'] = {x:1};

//can also dynamically delete properties
function User(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printName = function () {
        console.log('firstName' + ''+'lastName');
    }
}

const usr1 = new User('Nisarg','Dave',21);
// then can add properties like this
usr1.password = 'Niswag';
//But password is senstive so may want to delete before passing it on
delete usr1.password;

//Enumerating object properties. Note for-in loops don't have semi-colon at the end
for (let key in usr1){
    // seems like u just tab for if statements
    if (typeof usr1[key] !== 'function')
        console.log(key,usr1[key]);
}


//Abstraction - hiding complexity
function Newcircle(radius) {
    this.radius = radius;
    // using 'this' means that the property is accessible on the outside. for abstraction use let instead
    // Because scope dies outside of function
    //this.defaultLocation = { x:10, y= 5};
    let defaultLocation = {x:10, y: 5};
    let computeOptimumLocation = function (factor) {
        console.log(factor);
    }
    this.draw = function () {
        computeOptimumLocation(0.1);
        console.log('draw!');
    }
    // Getters and Setters
    Object.defineProperty(this,'defaultLocation',
    {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            defaultLocation = value;
        }
    });
}

const circl3  = new Newcircle(1);


//Other stuff

// strings
const message = 'This is my message';
console.log(message.split(' '));//gives a array like python

//if else. Multiple statements need curly braces otherwise just one tab
let hour = 10;
if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');

// Loops
// For loop
for (let i = 0; i <5; i++){
    console.log('Hello World');
}
// for in loop
const arr = [1,2,3];
for (let i in arr){
    console.log(i);
}
// for of loop
for (let o of arr){
    console.log(o);
}
//while
let j = 1;
while (j < 10){
    console.log(j);
    j++;
}

//Let vs Var
function start() {
    for (var i = 0; i< 5; i++){
        console.log('Hello',i);
    }
    console.log(i); // var will still print. Messes with scope. Therefore, use let and const
}
// Var also attaches itself to window object

start();

const specialName = 'Nisarg';


//Template literals
//better than using concatenations
const anotherMsg = `Hi ${specialName} ${2+3}`;
console.log(anotherMsg);

//Callback functions
// function that takes another function
// Arrow functions
function sum(a,b) {
    return a + b;
}
// need to assign to variable and then the arrow indicates its a function

let sum2 = (a,b) => {
    return a + b;
}
// can do it like this let sum2 = (a,b) => a + b
// And if you have single parameter
let isPostive2 = number => number => 0
// 0 arguments
let randomNumber2 = () => Math.random


//Getters and Setters Again
const person = {
    firstName: "Nisarg",
    lastName: "Dave",
    // If you want to call full name instead of calling the name above. Use getter and setters.
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//get name. No need to put () after fullName
console.log(person.fullName);

//set name
person.fullName = "John Smith";


// Cloning an object
const sqaure = {
    edgeLength: 1,
    // new way of creating function in an object if creating an object
    draw() {
        console.log('draw');
    }
}
//Many ways
//const anotherSqaure = Object.assign({},sqaure)
//const anotherSqaure = Object.assign({color:yellow},sqaure) //can add new properties
// Spread operator
const anotherSqaure = { ...sqaure };

// This Keyword
//method -> obj (using this inside an object references the obj)
// function -> global (window,global) referecnes either global in node or window in browers

// Template literals
const newLine = `This is how to create a 
new line with template literals`;
console.log(newLine);

const anotherNewLine = `Hello 'FirstName'`; //can add quotations without using backslashes

const tempName = 'John';

const thirsMsg = `Hello ${tempName}`; //place holder and can do mathematical operations in them

//Filtering an array
const numbersArr = [1,-1,2,3];
//filter positive
const filtered = numbersArr.filter((value) => value >= 0);
console.log(filtered);

//Mapping an array. Adds the values in the filtered into the variable
const items = filtered.map(function(value) {
    return '<li>' + value + '</li>';
})

//If using objects in arrow function use bracket before like this => ({}) otherwise thinks it is a code blocks

console.log(items);
// can also chain methods
//.filter(arrow function).map() etc

//Reducing an arrays
let sum3 = 0;
for (let i of numbersArr){
    sum3 += i;
}
console.log(sum3);

//better way, second argument is initiallise accumulator to zero
numbersArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0);