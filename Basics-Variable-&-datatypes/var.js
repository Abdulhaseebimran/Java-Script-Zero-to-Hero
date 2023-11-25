// first code in js

console.log("Hello JS");
console.log("I Love JS");

// variable in js

fullName = "Abdul Haseeb";
age = 20;
course = "Web & Mobile Hybrid App Development";
radius = 14;
PI = 3.14;
isFollow = false;

n = null; // value pata to hai but empty hai ya null hai
u = undefined; // value pata nahi hai

// JS Is Dynamically Typed Language

fullName = 20;
console.log(fullName);

let name = "Abdul Haseeb";

// let name = "Abdul Haseeb"; // let is not allowed to redeclare just updated the value

console.log(name);

const pi = 3.14;

// pi = 3.15; // const is not allowed to update or redeclare

console.log("The value of PI is : " + pi);


// datatypes in javascript

let num = 20; // number

console.log(typeof age);

let myName = "Abdul Haseeb"; // string

console.log(typeof myName);
console.log(myName);

let isFeePaid = true; // boolean

console.log(typeof isFeePaid);

let fee = null; // null

console.log(typeof fee);

let fee2; // undefined

console.log(typeof fee2);

let a = BigInt(12345); // bigint

console.log(a);
console.log(typeof a);

let b = Symbol("id"); // symbol

console.log(b);
console.log(typeof b);

// no permitive datatypes in js

// object

const student = {
    name: "Abdul Haseeb",
    age: 20,
    course: "Web & Mobile Hybrid App Development",
    isFeePaid: true
};



console.log(student);

student["age"] = student["age"] + 1;

console.log(student["name"]); // 1st way to access object property
console.log(student.course); // 2nd way to access object property

// practice question

const product = {
    title : "Samsung Galaxy S10",
    price : 70000,
    description : "Samsung Galaxy S10 is a good phone",
    isAvailable : true,
    offer : "10% off",
    rating : 4.5
};

console.log(product);

// q2

const profile = {
    name : "Abdul Haseeb",
    isFollow : true,
    following : 200,
    followers : 100,
};

console.log(profile);