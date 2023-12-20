// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}hello`;
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai);

// behind the secne

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function (){
    return `${this.password}hello`;
}

User2.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User2("Tea", "Tea@gmail.com", "ABC");
console.log(tea);