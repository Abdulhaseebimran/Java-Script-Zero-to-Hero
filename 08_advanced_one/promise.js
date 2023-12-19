// promise

const promiseOne = new Promise(function(resolve, reject) {
     setTimeout(function() {
          console.log('promise one');
          resolve();
     }, 1000);
});

promiseOne.then(function () {
        console.log('promise one success');
});


new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('promise two');
            resolve();
        }, 2000);
}).then(function(){
        console.log('promise two success');
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({name: 'John', age: 20});
    }, 2000);
})

promiseThree.then(function(data){
    console.log(data);
})

const promiseFour = new Promise(function(resolve, reject) {
    let error = true;
    if(!error) {
        resolve({userName: 'John', age: 20});
    } else {
        reject("Error: Something went wrong");
    }
});

promiseFour.then(function(user){
    console.log(user);
    return user.userName;
}).then(function(userName){
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('finally promsie four is resolved or rejected');
})


const promiseFive = new Promise(function(resolve, reject) {
    let error = true;
    if(!error) {
        resolve({userName: 'JavaScript', pass: 200});
    } else {
        reject("Error: JS went wrong");
    }
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);   
    } catch (error) {
         console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);   
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
// .finally(function(){
//     console.log('finally success or error');
// })