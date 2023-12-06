
// var c = 3000;

// let a = 100;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "John";

//     function two(){
//         const website = "Google";
//         console.log(username);
//     }
//     // console.log(website);
//     two();
// }

// one();

if(true){
    const username = "Abdul";
    if(username === "Abdul"){
        const website = " Google";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

function addOne (num1){
    return num1 + 1;
}

addOne(9);

// hoisting

const addTwo = function(num2){
    return num2 + 2;
}

console.log(addTwo(7));

