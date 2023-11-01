const marvelHeros = ["thor", "ironman", "spiderman", "captain america", "hulk"];
const dcHeros = ["superman", "badman", "flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// spread operator

const all_heros = [...marvelHeros, ...dcHeros];
console.log(all_heros);

const anotherArray = [1,2,3,[4,5,6], 7,[8,9,[10]]];
const flatArray = anotherArray.flat(2); // isme 2 level tak flat hoga
console.log(flatArray);

console.log(Array.isArray("Haseeb")); // false : string is not an array
console.log(Array.from("Haseeb")); // converts string to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // converts variables to array
