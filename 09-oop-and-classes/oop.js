// oops and classes

// 1. Object literal

const user = {
    name: 'John',
    age: 20,
    email: 'example@.com',

    getUserInfo: function() {
        // console.log(`Username is ${this.name} and email is ${this.email}`);
        // console.log(this);
    }
}

// console.log(user.email);
// console.log(user.getUserInfo());
// console.log(this);

function userFunction(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.getUserInfo = function() {
        console.log(`Username is ${this.userName} and email is ${this.email}`);
    }

    return this;
}

const user1 = new userFunction('John', 5, true); 
const user2 = new userFunction('Mark', 10, false);
console.log(user1);
console.log(user2);

// new keyword creates a new object 2. set constructor property to the function 3. set this keyword to the new object 4. call the function 5. return the object

//  constructor function takes reference of the function and creates a new object