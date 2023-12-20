function multiplyBy5(num) {
     return num*5;
}

// multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.prototype);
// console.log(multiplyBy5.power);

function createUser(name, score){
    this.name = name;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.login = function(){
    console.log(`You are logged in ${this.name}`);
}

const chai = new createUser('Chai', 10);
const tea = new createUser('Tea', 20);

// chai.increment();
// tea.increment();
// console.log(chai);
// console.log(tea);

// chai.login();
// console.log(chai.hasOwnProperty('name'));


const arr = ["thor", "spiderman"];

const power = {
    thor: "Hulk",
    spiderman: "web",

    getSpidermanPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.Haseeb = function(){
    console.log(`Haseeb is present in the object`);
}

Array.prototype.heyHaseeb = function(){
    console.log(`Haseeb is a Array`);
}

power.Haseeb();
// power.heyHaseeb();
arr.heyHaseeb();

// Inheritance

const user = {
    name: "Haseeb",
    login: true,
    score: 5,
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    groupSupport: false,
}

const TASupport = {
    makeAssignements: "JS Assignment",
    fullTime: true,

    __proto__: Teacher,
}

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport, TASupport);

let username = "Haseeb       ";

String.prototype.trueLength = function() {
    console.log(this);
    console.log(`Length of the string is ${this.trim().length}`);
}

username.trueLength();
"Abdul ".trueLength();
"Helloo".trueLength();