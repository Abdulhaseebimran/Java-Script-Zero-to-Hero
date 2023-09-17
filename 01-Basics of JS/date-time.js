// Dates 

const myDates = new Date();
// console.log(myDates.toString()); // Wed Jun 09 2021 12:00:00 GMT+0530 (Pakistan Standard Time)
// console.log(myDates.toDateString()); // Wed Jun 09 2021
// console.log(myDates.toLocaleString()); // 6/9/2021, 12:00:00 PM
// console.log(myDates.toISOString()); // 2021-06-09T06:00:00.000Z

// console.log(typeof myDates); // Dates is a object 

const myCreatedDate = new Date(2023, 8, 20, 8,59);

// const myCreatedDate = new Date("2023-02-20");
// const myCreatedDate = new Date("1-14-2023")


// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

// TimeStamp

const myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // 1674264600000

// console.log(Math.floor(Date.now() / 1000));

const myDates2 = new Date();

// console.log(myDates2.getFullYear()); // 2023
// console.log(myDates2.getMonth()); // 8
// console.log(myDates2.getDate()); // 20
// console.log(myDates2.getDay()); // 1

console.log(myDates2.toLocaleString('default', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric',
}));