
let arr = ["a", "b", "c"];

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log("Each character: ", greet);
}

// Maps

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, " : ", value);
// }

const games = {
    "name": "FIFA",
    "year": 2021,
    "platform": "PS4"
}

// for (const [key, value] of Object.entries(games)) {
//     console.log(key, " : ", value);
// }