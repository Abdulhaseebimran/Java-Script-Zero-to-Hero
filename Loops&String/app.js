// loops and string

document.write("<h1>Loops and String</h1>");

// for loop

for (let i = 0; i < 10; i++) {
    console.log("Hello JavaScript");
}

console.log("End of for loop");

// calculate sum of 1 to 10

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of 1 to 10 is: " + sum);

// while loop

let i = 1;

while (i <= 5) {
    console.log("Hello JavaScript");
    i++;
}

// do-while loop

let j = 1;

do {
    console.log("j = " + j + " Hello JavaScript");
    j++;
}while (j <= 5);

// for of loop // string and arrays

let str = "Hello JavaScript";
let length = 0;

for (let i of str){
    console.log("i = " + i);
    length++;
}

console.log("Length of " + str + " is: " + length);

// for in loop // object

let student = {
    name: "Abdul Rahim",
    age: 25,
    hometown: "Karachi"
}

for (let i in student){
    console.log(i + ": " + student[i]);
}

// practice question 

for (let num = 0; num <= 100; num++){
    if(num % 2 === 0){
        console.log("Even number: " + num);
    }else if (num % 2 !== 0){
        console.log("Odd number: " + num);
    }
}

let guessNumber = 9;

let guess = +prompt("Guess a number between 1 to 10");

while (guess !== guessNumber) {
    +prompt("Guess a number between 1 to 10");
}

console.log("You guess the correct number");