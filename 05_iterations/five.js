// filter map and reduce

// const coding = ["js", "php", "python", "ruby", "java", "c++", "c#"];

// const values = coding.forEach( (items) => {
//     // console.log(items);
//     return items;
// } );

// console.log(values);

// filter 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.filter( (num) => {
//     if(num % 2 === 0){
//         console.log(num);
//     }
// });

// numbers.filter((num) => {
//     if(num > 5){
//       console.log("The number is greater than 5 : " + " " + num);
//     }
// });

// const newNumbers = [];

// numbers.forEach( (items) => {
//     if(items > 5){
//         newNumbers.push(items);
//     }
// });

// console.log(newNumbers);

// Books Example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter( (bk) => {
     if(bk.genre === "History"){
        return bk;
     }
});

const userBooks2 = books.filter( (bk) => {
    if(bk.publish >= 1995 && bk.genre === "History"){
        return bk;
    }
});

const userBooks3 = books.filter( (bk) => {
    if(bk.edition >= 2000 && bk.genre === "Science"){
        return bk;
    }
});


console.log(userBooks);
console.log(userBooks2);
console.log(userBooks3);