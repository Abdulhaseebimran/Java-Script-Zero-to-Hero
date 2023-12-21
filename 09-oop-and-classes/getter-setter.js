class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    // Getter and Setter
    get getEmail(){
        return this.email.toUpperCase();
    }

    set setemail(value){
        return this._email = value;
    }

    get getPassword(){
        return `Your password is ${this.password}finally`;
    }

    set setPassword(value){
        return this._password = value;
    }
}

const userOne = new User("haseeb@gmail.com", "Hello123");
console.log(userOne.getEmail);
console.log(userOne.getPassword);