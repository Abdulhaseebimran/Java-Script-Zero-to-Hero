// DOM IN JS

// document.write("<h1>DOM Doucment Object Model IN JS </h1>");

// console.log(document.body);
// console.dir(document.body);

// console.dir(document.body.firstChild);

// document.body.childNodes[1].innerText = "Hello";

// let heading = document.getElementById("heading");
// console.dir(heading);

// let para = document.getElementsByClassName("para");
// console.dir(para);

// let para1 = document.getElementsByTagName("p");
// console.log(para1);

// let para2 = document.querySelector(".para");  // only return first element
// console.log(para2);

// let para3 = document.querySelectorAll("#btn"); // return a node list of all elements
// console.log(para3);

// text , comment , element , nodes

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");
// console.dir(heading);

// practice questions

let h2 = document.querySelector("h2");
// console.dir(h2);

console.dir(h2.innerText);

h2.innerText = h2.innerText + " form Apna College Students";  // concatination
console.dir(h2.innerText);

// 2nd question

let divs = document.querySelectorAll("div");
console.log(divs);

let idx = 1;
for(i of divs){
    // console.log(i.innerText);
    // console.log(i.innerHTML);
    i.innerText = `New Unique value ${idx}`;
    idx++;
}

console.log(i);

// divs[0].innerText = "New Unique value 1";
// divs[1].innerText = "New Unique value 2";
// divs[2].innerText = "New Unique value 3";