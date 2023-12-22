function outer(){
    let username = "Haseeb";
    // console.log(secret);
    function inner (){
        let secret = "12345";
        console.log(username);
    }
    function inner2(){
        console.log("I am inner 2");
        console.log("Inner two", username);
        // console.log("Inner two", secret);
    }
    inner();
    inner2();
}

// console.log(username);
outer();