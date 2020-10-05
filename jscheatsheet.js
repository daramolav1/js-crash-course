console.log("Hello World!");

/* 
// Three ways to declare variables:
// var, let, const 

// Difference between let and const
let age = 30;
age = 31;

console.log(age);

const weight = 100;
weight = 200;

console.log(weight); 
*/

/*
// Data Types:
// Strings, Numbers, Boolean, null, undefined

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);
*/

/*
// Concatenation
const name = "Victor";
const age = 22;
console.log("My name is " + name + " and my age is " + age);
*/

/*
// Template String
console.log(`My name is ${name}`);
const hello = `My age is ${age}`;
console.log(hello);
*/

/*
// String properties and methods
const s = "Hello World!";
console.log(s.length);
console.log(s.toLowerCase);
console.log(s.substring(1, 7).toUpperCase());
console.log(s.split(""));
*/

/*
// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "grapes", "strawberries"];

fruits[4] = "pears";
fruits.push("mangos");
fruits.unshift("blueberries");
fruits.pop();
console.log(fruits);
console.log(fruits[2]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));
*/

/*
// Object literals
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "30",
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main street",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(firstName);
console.log(city);

person.email = "john@gmail.com";

console.log(person);
*/

/*
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false,
  },
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

/*
// For loops
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While loops
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}
*/

/*
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false,
  },
];
*/

/*
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// For of loop
for (let todo of todos) {
  console.log(todo.text);
}
*/

/*
// For each loop
todos.forEach(function (todo) {
  console.log(todo.text);
});
*/

/*
// Map
const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);
*/

/*
// Filter
const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted == true;
});

console.log(todoCompleted);
*/

/*
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted == true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);
*/

/*
// If statements
const x = "10";

if (x == 10) {
  console.log("x is 10");
}

if (x === 10) {
  console.log("x is 10");
}

const y = 20;

if (y === 10) {
  console.log("y is 10");
} else if (y > 10) {
  console.log("y is greater than 10");
} else {
  console.log("y is less than 10");
}

const a = 4;
const b = 10;

if (a > 5 || b > 9) {
  console.log("a is more than 5 or y is greater than 9");
}

if (a > 5 && b > 9) {
  console.log("a is more than 5 and y is greater than 9");
}
*/

/*
// Ternary Operator
const x = 10;

const color = x > 10 ? "red" : "blue";
console.log(color);
*/

/*
// Switches
const color = "green";

switch (color) {
  case "red":
    console.log("color is red");
    break;

  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
}
*/

/*
// Functions
function addNums(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addNums();
addNums(5, 5);

function subNums(num1 = 4, num2 = 3) {
  return num1 - num2;
}
console.log(subNums());

const mulNums = (num1 = 2, num2 = 5) => {
  return num1 * num2;
};
console.log(mulNums());

const divNums = (num1 = 18, num2 = 6) => num1 / num2;
console.log(divNums());
*/

/*
// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Instantiate object
const person1 = new Person("John", "Doe", "4/3/1980");
const person2 = new Person("Mary", "Smith", "3/6/1970");

console.log(person1);
console.log(person2.firstName);
console.log(person1.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/

/*
// Classes
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
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "4/3/1980");
const person2 = new Person("Mary", "Smith", "3/6/1970");

console.log(person1);
console.log(person2.firstName);
console.log(person1.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/
