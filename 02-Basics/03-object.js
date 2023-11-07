// objects in js

// singeltone objects: 

// objects literal

// Object.create(); // create a new object with the specified prototype object and properties.

const mySym = Symbol("mySymbol"); // symbol is a primitive data type

const myObj = {
    name: "Abdul Haseeb",
    age: 20,
    loctions: "Karachi",
    email: "haseeb@gmail.com",
    isLoggedIn : false,
    [mySym]: "This is my symbol"
};

console.log(myObj.email); // 1st method to access the object properties
console.log(myObj["email"]); // 2nd method to access the object properties

console.log(myObj[mySym]); // accessing the symbol property

myObj.isLoggedIn = true; // changing the value of the property
Object.freeze(myObj); // freeze the object

console.log(myObj);

myObj.greeting = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(myObj.greeting());