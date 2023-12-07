const languages = {
    c: "C",
    cpp: "C++",
    js: "JavaScript",
}

// for (const key in languages) {
//     console.log(key, " : ", languages[key]);
// }

const programmingLanguages = ["C", "C++", "JavaScript", "Python"];

// for (const key in programmingLanguages) {
//     console.log(programmingLanguages[key]);
// }

// for Each loop

// programmingLanguages.forEach((val1, index, arr) => {
//        console.log(val1, index, arr);
// });

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((items) => {
        console.log(items.languageName, items.languageFileName);
});