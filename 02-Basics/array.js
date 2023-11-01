// array

const myArray = [0,1,2,3,4,5];
console.log(myArray[3]); // array index starts from 0

// shallow copy : jo bhi me change kargo wo original array me bhi change hoga
// deep copy : jo bhi me change kargo wo original array me change nhi hoga

const newArray = new Array(1,2,3,4,5); // yeh bhi ek array hai.
console.log(newArray[4]);

// array methods

newArray.push(6); // add element at the end of array
newArray.pop(); // remove element from the end of array

newArray.unshift(10); // add element at the start of array
newArray.shift(); // remove element from the start of array
console.log(newArray.includes(9));; // check if element is present in array or not (true or false)
console.log(newArray.indexOf(3)); // gives index of element in array

const newArr = newArray.join(); // converts array to string
console.log(typeof newArr); // string
console.log(newArray);

// slice and splice 

const myN1 = [1,2,3,4,5,6,7,8,9,10];

console.log("A ", myN1);
console.log(myN1.slice(1,4)); // slice(start, end) : end is not included
console.log("B ", myN1);
console.log(myN1.splice(0,4)); // splice(start, end) : end is included
console.log("C ", myN1); // original array is changed

