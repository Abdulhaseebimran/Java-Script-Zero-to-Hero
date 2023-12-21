function User (email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get: function () {
            return `Your password is ${this._password}finally`;
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const userOne = new User("hello@gmail.com", "Hello123");
console.log(userOne.email);
console.log(userOne.password);