const User = {
    email: "hello@gmail.com",
    password: "Hello123",

    get getEmail() {
        return this.email.toUpperCase();
    },

    set setEmail(value) {
        this.email = value;
    },

    get getPassword() {
        return `Your password is ${this.password}finally`;
    },

    set setPassword(value) {
        this.password = value;
    }
}

// console.log(User.getEmail);
// console.log(User.getPassword);

const tea = Object.create(User);
console.log(tea.getEmail);
console.log(tea.getPassword);