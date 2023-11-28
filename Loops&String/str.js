// string and it's methods

let str = "Apna College";
str = str.toUpperCase();
console.log(str);

str = str.toLowerCase();
console.log(str);

console.log(str[0]); // A

// Template literals

let specialString = `This is a special string`;
console.log(typeof specialString);

let obj = {
    name : "Abdul",
    age : 20
}

let result = `My name is ${obj.name} and my age is ${obj.age}`;
console.log(result);

let name = "     Abdul Haseeb       ";
console.log(name.trim());

let str1 = "Abdul Haseeb";
console.log(str1.slice(0,5));

console.log(str1.replace("Haseeb", "Ahad"));

console.log(str1.charAt(0));

console.log(str1.replaceAll("Abdul", "Abdul Haseeb"));


// practice questions

let userName = prompt("Enter your user-name: ");

let fullName = "@" + userName + userName.length;

console.log(fullName);