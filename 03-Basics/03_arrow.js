const user = {
    name: "Haseeb",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.name} , Welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.name = "Abdul";
// user.welcomeMessage();

// function chai(){
//     let username = "Haseeb";
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "Haseeb";
//     console.log(this.username);
// }

// chai();

// arrow functions

// const chai = () => {
//     let username = "Haseeb";
//     console.log(this.username);
// }

// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return

// const addTwo = (num1, num2) => (num1 + num2);


// implicit return in objects

const addTwo = (num1, num2) => ({ sum: num1 + num2, name: "Haseeb" });
console.log(addTwo(2, 3));