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
class Person3 {
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
const person2 = new Person3('John','Doe','4-3-1980')
console.log(person2.getFullName())
console.log(person2)

// DOM
// Selection
// Single element selectors
console.log(document.getElementById('my-form'))
console.log(document.querySelector('.container'))
console.log(document.querySelector('h1')) // coz it's a single element selector it will select the first one. Can do array methods on

//Multi element selectors
console.log(document.querySelectorAll('.item')) //use this, returns a node list
console.log(document.getElementsByClassName('item')) // older version - > returns a html collection which you can't do array methods on
const items = document.querySelectorAll('.item')
items.forEach( item => console.log(item))

// Manipulating the dom
const ul = document.querySelector('.items')
// ul.remove(); // remove the unorder list
// ul.lastElementChild.remove() // remove the last item
ul.firstElementChild.textContent = 'Hello'; //changed first item
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
const btn = document.querySelector('.btn')
btn.style.background = 'red'
//Events
btn.addEventListener('click', e => {
    e.preventDefault()
    console.log('click')
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
})

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.vale === '' || emailInput.value === '') {
        msg.classList.add('error') // class defined in stlye.css
        msg.innerHTML = 'Please enter all fields'

        setTimeout( () => msg.remove(), 3000)
    }
    else {
        const li = document.createElement('li') //can create elements
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        nameInput.value = ''
        emailInput.value = ''
    }
}

// Higher order functions and arrays
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < companies.length; i++) {
    console.log(companies[i].name)
}

//forEach -> doesn't return anything
console.log(companies.forEach(company => console.log(company.name)))

// filter
let canDrink = [];
for(let i = 0; i<ages.length; i++){
    if (ages[i] >= 21) {
        canDrink.push(ages[i])
    }
}
// console.log(canDrink)
const canDrinkFilter = ages.filter( age => age >= 21)
console.log(canDrinkFilter)
const retailCompanies = companies.filter( company => company.category === 'Retail')
console.log(retailCompanies)
const eightiesCompanies = companies.filter( company => (company.start >= 1980 && company.start < 1990))
console.log(eightiesCompanies)

// map -> create a new array of anything
const companyNames = companies.map(company => company.name)
console.log(companyNames)

const agesSquare = ages.map( age => Math.sqrt(age))
console.log(agesSquare)

const ageMap = ages
    .map( age => Math.sqrt(age)) // need to put in on new lines
    .map(age => age *2)

console.log(ageMap)

// sort
// Sort companies by start year
const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies)

// reduce
// add all ages together
let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i]
}
console.log(ageSum)

const ageSumNew = ages.reduce((acc,age) => acc+age, 0)
console.log(ageSumNew)
// Get total years for all companies
const totalYears = companies.reduce((acc,company) => acc + (company.end-company.start), 0)
console.log(totalYears)