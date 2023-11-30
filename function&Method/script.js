// functions and methods in js

document.write("<h1>Functions & Method </h1> <br />");

function myFunction(msg) { // parameter => input
    console.log(msg);
}

myFunction("Hello Duniya :)"); // argument => output

function sum(a, b) {
    sum = a + b;
    return sum;
}

let val = sum(5, 6);
console.log(val);

const arrowMul = (a, b, c) => {
    multi = a * b * c;
    return multi;
}

let val2 = arrowMul(2, 3, 4);
console.log(val2);

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            console.log(char);
            count++;
        }
    }
    console.log("Total Vowels: " + count);
}

countVowels("Abdul Haseeb");

// forEach method

let arr = [1, 2, 3, 4, 5];

arr.forEach((val, idx, arr) => { // value at each index
    console.log(val, idx, arr);
});

// higher order function == as a parameter or return a function

// square of each element in array

let arr2 = [1, 2, 3, 42, 55];

let square = arr2.forEach((val) => {  // forEach is used to iterate over an array and return nothing 
    // just print the value
    console.log(val * val);
});

console.log(square);

// map method

let arr3 = [1, 2, 3, 4, 5, 10];   // map is used to return a new array using existing array

let newArr = arr3.map((val) => {
    return val;
});

console.log(newArr);

// filter methods

let filterArr = arr3.filter((val) => {
    return val % 2 === 0;
}); // filter is used to filter out the elements from an array

console.log(filterArr);

// reduce method

let reduceArr = arr3.reduce((acc, val) => {
    return acc + val;   // return the sum of all elements in an array in a single value
});

console.log(reduceArr);


// practice questions

let arr4 = [87,93, 90, 101,66];

let uniqueValue = arr4.filter((val) => {
    return val > 90;
});

console.log(uniqueValue);

// 2

let n = +prompt("Enter a number: ");

let arr5 = [];

for (let i = 1; i <= n; i++) {
    arr5[i-1] = i;
}

console.log(arr5);

// sum of all value in array

let sumArr = arr4.reduce((previ, curr) => {
    return previ + curr;
});

console.log("Sum of the array is : " + sumArr);


// product of all the number in array

let productArr = arr4.reduce((res, curr)=> {
       return res * curr;
});

console.log("Product of the array is : " + productArr);