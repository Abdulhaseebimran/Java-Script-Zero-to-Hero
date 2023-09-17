const score = 100;
// console.log(score);

let num = new Number(100);
// console.log(num);

// console.log(num.valueOf()); // this shows the value of the number
// console.log(num.toString().length); // this converts the number to a string

// console.log(num.toFixed(2)); // this rounds the number to 2 decimal places

const otherNumber = 2390.987;

// console.log(otherNumber.toPrecision(4)); // this rounds the number to 4 significant figures


const hundred = 100000;
// console.log(hundred.toLocaleString('en-PK')); // this converts the number to a local string

// ***********MATHS************

// console.log(Math);
// console.log(Math.abs(-100)); // this returns the absolute value of the number converts to positive
// console.log(Math.PI); // this returns the value of pi

// console.log(Math.round(4.4)); // this rounds the number to the nearest integer 
// console.log(Math.ceil(4.4)); // this rounds the number up to the nearest integer choose top value

// console.log(Math.floor(5.9)); // this rounds the number down to the nearest integer choose bottom value
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9)); // this returns the minimum value of the numbers
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9)); // this returns the maximum value of the numbers


console.log(Math.random());
console.log(Math.random() * 10); // this returns a random number between 0 and 10
console.log(Math.floor((Math.random() * 100) + 1)); // this returns a random number between 1 and 100  and add + 1 to start from 1 not 0


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // this returns a random number between 10 and 20