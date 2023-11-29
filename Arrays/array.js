// Arrays in JS

document.write("<h1>Arrays in JavaScript</h1>");

let marks = [34, 23, 24, 93, 73, 25];
console.log(marks);
console.log(marks.length);

let heores = ["ironman", "spiderman", "captain america", "thor"];
console.log(heores);
console.log(typeof heores);
console.log(heores[0]); // index

for(let i = 0; i < heores.length; i++){
    console.log(heores[i]);
}

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// practice questions
let marks2 = [85, 78, 44, 89, 92, 33];

let sum = 0;

for(let val of marks2){
    sum += val;
}

let avg = sum / marks2.length;
console.log(`average marks of the class is ${avg}`);

// 2

let items = [250, 645, 300, 900, 50];

// 1st method
// let i = 0;

// for(let val of items){
//     console.log(`value of item is ${val} and index is ${i}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value of item after discount is ${items[i]}`);
//     i++;
// }

// 2nd methods

for (let i = 0; i< items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(`value of item after discount is ${items[i]}`);
}

let foodItems = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// foodItems.push("pasta", "garlicBread");
// foodItems.pop();
// console.log(foodItems);
// console.log(foodItems.toString());

// console.log(foodItems.concat(items));

// console.log(foodItems.unshift("noodles"));
// console.log(foodItems.shift());
// console.log(foodItems);

console.log(foodItems.slice(2,5));
console.log(foodItems.splice(2,4,"Haseeb"));
console.log(foodItems);

// practice questions

let companies = ["Google", "Facebook", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log("Deleted value from the start is : " + companies.shift());
console.log("original array after delete firts value" + companies);

console.log("add value on index 2 and delete : " + companies.splice(2,1,"OLX"));
console.log(companies);

console.log("add value from the last is : " + companies.push("Twitter"));
console.log(companies);