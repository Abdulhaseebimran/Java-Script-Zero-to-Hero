
const email = [];

if(email.length === 0){
    console.log("Array is empty");
}

const user = {};

if(Object.keys(user).length === 0){
    console.log("User is defined");
}

// nullish coalescing operator(??) null and undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;

console.log(val1);
console.log(val1);

// Ternary operators

const score = 100;

score > 100 ? console.log("You won") : console.log("You lost");