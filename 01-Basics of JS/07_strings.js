const name = "Abdul";
const repoCount = 20;

// console.log(name + " has " + repoCount + " public repositories."); we don't use this method in modern javascript

// string interpolation

// console.log(`My name is ${name} has ${repoCount} public repositories.`); // this is the modern way of string interpolation

const myName = new String("Abdul");

// console.log(myName[2]);
// console.log(myName.__proto__);  // it will show the methods of the string object

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.charAt(3));
// console.log(myName.indexOf('d')); // it will return the index of the first occurance of the character

// const newString = myName.substring(0,4); // it will return the substring from the given index to the given index
// console.log(newString);

// const anotherString = myName.slice(-4,4); // it will return the substring from the given index to the given index
// console.log(anotherString);

const newString = "      ABDUL HASEEB      ";
console.log(newString);
console.log(newString.trim()); // it will remove the white spaces from the string

const url = "https://www.google.com%20";

console.log(url.replace("%20", "-"));
console.log(url.replace("https", "http"));

console.log(url.split(".")); // it will split the string into an array of substrings