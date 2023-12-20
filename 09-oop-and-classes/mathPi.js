// pi is change to 4 or not?

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: "haseeb",
    age: 20,
    email: "hello@gmail.com",

    orderChai: function(){
        console.log("Chai nhi bani bhai log");
    }
}


Object.defineProperty(chai, "name",{
    writable: false,
    enumerable: false,
})

// Object.defineProperty(Math, "PI",{
//     writable: true,
//     enumerable: true,
// })

 
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}