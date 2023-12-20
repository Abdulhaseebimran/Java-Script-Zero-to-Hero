// inheritance

class User{
    constructor(username){
        this.username = username;
    }

    logME(){
        console.log(`${this.username} is logged in!`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`add new course by the teacher`);
    }
}

const chai = new Teacher("chai", "Chai@.com", "chi");
// chai.addCourse();
// chai.logME();

const myUser = new User("haseeb");
// myUser.logME();
// myUser.addCourse();