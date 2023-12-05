// Events in javaScript.

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     // alert("Button clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// btn1.addEventListener("click", () => {
//     console.log("Button clicked - handler 1");
// });


// const handler2 = () => {
//     console.log("Button clicked - handler 2");
// }

// btn1.addEventListener("click", handler2);

// btn1.addEventListener("click", () => {
//     console.log("Button clicked - handler 3");
// });

// btn1.addEventListener("click", () => {
//     console.log("Button clicked - handler 4");
// });

// btn1.removeEventListener("click", handler2);

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     div.style.backgroundColor = "red";
//     div.style.fontSize = "30px";
//     alert("Mouse over");
// }

// callBack = hamara aik aisa function hota jo dosre function me argument jata hey

// practice question

let mode = document.querySelector("#mode");
let currentMode = "light";
let body = document.querySelector("body");

mode.addEventListener("click", () => {
    if(currentMode === "light"){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});
