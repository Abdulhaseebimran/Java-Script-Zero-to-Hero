//  for loops

// for(let i = 0; i <= 10; i++) {
//     const elements = i;
//     if(elements === 5){
//         console.log("Five is the best number");
//     }
//     console.log(elements);
// }

// console.log(elements);

// for(let i = 1; i <= 10 ; i++){
//     console.log(`Outer loop ${i}`);
//     for(let j = 1; j<= 10; j++){
//         // console.log(`Inner loop ${j} and inner loop i ${i}`);
//         console.log(i + " * " + j + " = " + i * j); // table print
//     }
// }

let myArray = ["Batman", "superman", "spiderman"];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log("Five is the best number");
        // continue;
        break;
    }
    console.log(i);
}