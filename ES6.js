// simpler way of defining method in object
const person = {
    name: 'Mosh',
    walk() {
        return console.log(this);
    },
    talk() {
        return console.log('talk');
    }
};

const walk = person.walk;
walk(); //returns window object

//to fix this need to use binding
const walk2 = person.walk.bind(person);
walk2(); // returns person object - binding person to this

// Arrow functions
const sqaure = function(number)
{
    return number*number;
}

const sqaure2 = number => number*number;
console.log(sqaure2(5));

// Arrows functions and this
const person2 = {
    talk() {
        setTimeout(function() {
            console.log(this); 
        },1000);
    }
};
person2.talk();// gives window object

const person3 = {
    talk () {
        setTimeout(()=>{
            console.log(this);
        }, 1000);
    }
};
person3.talk();// gives the person3 object

//Array Map
const colors = ['red','green','blue'];
const items = colors.map(color =>`<li>${color}</li>`);
console.log(items);

//Object Destructuring
const address = {
    street: '',
    city: '',
    country:''
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

//Better to destructure like this
const { street, city, country } = address;


//Spread operator
const first = [1,2,3];
const second = [4,5,6];

const combined = [ ...first, ...second];

//Classes
//instead of duplicating objects
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('Walk');
    }
}

const person5 = new Person('Chung Pong');
person5.walk();

//Inheritance
//Teacher is a person -> therefore should walk
class Teacher extends Person{
    constructor(name,degree) {
        super(name); // super calls constructor of parents class
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher('Mosh',"MSc");
teacher.walk();
teacher.teach();

// import { Teacher } from './teacher'; //copy classes to other files
// and each class files needs an export in front of it -> coz otherwise it is private by default
// export class Teacher extends Person {}
// Default import -> means main thing being exported
// export default class Teacher
// in index.js
// import Teacher from './teacher';
// import { } from '' -> called named export
// can also do this
//import Teacher, { otherstuff} from './teacher' -> can have both default and namedexports






