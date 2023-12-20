function setUserName (username){
    this.username = username;
    console.log("Called");
}

function createUser (username, email, password){
     
    setUserName.call(this, username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@.com", "12345");
console.log(chai);