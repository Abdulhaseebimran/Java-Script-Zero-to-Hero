// static properties

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }

    static createID(){
        return `12309`;
    }
}

const hello = new User("Haseeb");
// console.log(hello.createID());
hello.logMe();

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }

    addMe(){
        console.log(`Teacher is added ${this.username}`);
    }
}

const tea = new Teacher("tea","tea@gmail.com");
// tea.logMe();
// console.log(tea.createID());
