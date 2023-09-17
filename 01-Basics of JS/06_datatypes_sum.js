//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// non-primitive

// array, object, function

let numbers = [1, 2, 3, 4, 5];

let user = {
    name: 'John',
    age: 32
}

let sum = function add(a, b) {
    return a + b;
}


// ******************************************************

// stack (LIFO) : push, pop (permitive data types) = Heap (non-permitive data types)


let myName = "Haseeb";
let yourName = myName;

anotherName = "Ali";

console.log(yourName);
console.log(anotherName);

let userOne = {
    name: 'John',
    age: 32
}

let userTwo = userOne;

userTwo.name = 'Ali';

console.log(userOne.name);
console.log(userTwo.name);