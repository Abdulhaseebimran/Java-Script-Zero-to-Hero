// function addTwoNumbers(a, b) {
//   console.log(a + b); 
// }

function addTwoNumbers (a,b){
    return a + b;
}

const result = addTwoNumbers(1,2);
console.log("Result: ",result); // undefined

function userLogin(username = "Anonymous"){ // default value
    if(!username){
       console.log("Please provide a username");
       return;
    }
    return `${username} is Logged in`;
}

// console.log(userLogin("Abdul"));

function calculateCartPrice (val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(10,200,300,9000));

const user = {
    name: "Abdul",
    age: 20
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and age is ${anyobject.age} `);
}

// handleObject(user); // username is Abdul and age is 20

handleObject({
    name: "sam",
    age: 20
})

const myNewArray = [100, 200, 300, 500];

function returnArrayValue(myArray){
    return myArray[1];
}

console.log(returnArrayValue(myNewArray));
