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

// console.log(myObj.greeting);

// const tinder = new Object(); // singeltone object

const tinder = {}; 

tinder.id = "123";
tinder.name = "tinder";
tinder.age = 5;

// console.log(tinder);

const regulerUser = {
    name: "Abdul Haseeb",
    age: 20,
    loctions: "Karachi",
    fullName: {
        username:{
            firstName: "Abdul",
            lastName: "Haseeb"
        }
    }
};

// console.log(regulerUser.fullName?.username?.firstName.toUpperCase());

const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};

console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3)); // array me values return karega
console.log(Object.entries(obj3)); // array me array return karega

console.log(tinder.hasOwnProperty("name")); // check the property is exist or not

const course = {
    name: "JS",
    duration: 2,
    price: 200,
    isFree: false,
    courseInstrutor: "Hitesh",
};

const {courseInstrutor: intructor} = course; // destructuring the object

console.log(intructor);

// API => Application Programming Interface

// CRUD => Create, Read, Update, Delete

// {
//     "name": "Abdul Haseeb",
//     "age": 20,
//     "Location": "Karachi"
// }