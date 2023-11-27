// operators and conditional statement

// airthmatic operators
// + - * / % ++ --

var a = 5;
var b = 6;

console.log("a + b", a + b);
console.log("a - b", a - b);
console.log("a * b", a * b);
console.log("a / b", a / b);
console.log("a % b", a % b);
console.log("a ** b", a ** b);

// increment and decrement operators
// pre increment

console.log("value of a", a);
console.log("value of ++a", ++a);
console.log("value of a++", a++);

console.log("value of a", a);
console.log("value of --a", --a);
console.log("value of a--", a--);

// assignment operators

var c = 10;
var d = 20;

console.log("value of c", c);
console.log("value of d", d);

c += d; // c = c + d
console.log("value of c +=d", c);

c -= d; // c = c - d
console.log("value of c-=d", c);

c *= d; // c = c * d
console.log("value of c*=d", c);

c /= d; // c = c / d
console.log("value of c/=d", c);

c %= d; // c = c % d
console.log("value of c%=d", c);


// comparison operators

var e = 10;
var f = 20;

console.log("value of e == f", e == f);
console.log("value of e === f", e === f);
console.log("value of e != f", e != f);
console.log("value of e !== f", e !== f);

// logical operators 

console.log(e === f && e === f);
console.log(e === f || e !== f);
console.log(!(e === f));

// conitional statement

let age = 20;

if (age >= 18){
    console.log("you are eligible to vote");
} else {
    console.log("you are not eligible to vote");
}

let mode = "dark";
let color;

if (mode === "dark"){
    color = "black";
} else {
    color = "white";
}

console.log("color:", color);

// else if

let time = 10;

if (time >= 5 && time < 12){
    console.log("good morning");
} else if (time >= 12 && time < 16){
    console.log("good afternoon");
} else if (time >= 16 && time < 20){
    console.log("good evening");
} else {
    console.log("good night");
}

// ternary operator

let age1 = 20;

let result = age1 >= 18 ? "you are eligible to vote" : "you are not eligible to vote";
console.log(result);

// practice question

let numbers = +prompt("enter a number");

if (numbers % 5 === 0){
    console.log(numbers,"number is divisible by 5");
}else{
    console.log(numbers,"number is not divisible by 5");
}

// student grades

let std = +prompt("Enter a marks");

if (std >= 80 && std <= 100){
    console.log("A+");
}else if (std >= 70 && std <= 79){
    console.log("A");
}else if (std >= 60 && std <= 69){
    console.log("B");
}else if (std >= 50 && std <= 59){
    console.log("C");
}else if (std >= 40 && std <= 49){
    console.log("D");
}else {
    console.log("F");
}