/*
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, networks
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed ');    
})
*/


/*
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task two complete");
        resolve()
    }, 1000);
}).then(function(){
    console.log('promise two is consumed')
});
*/


/*
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Asynce task 3 ")
        resolve({username: "Harshvarhdan", id : 12453652})
    }, 1000);
})

promiseThree.then(function(user){
    console.log('promise is consumed');
    console.log(user);
})
*/



/*
const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
    let error = false
    if(!error){
        resolve({username : "harshvardhan", id : 142565874})
    } else{
        console.log("Error : somithinh went wrong");
        
    }
   },1000)    
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username);   
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log('the promise is either resolved or rejected'))
*/


/*
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({course : "js", pass : 123})
        } else {
            reject("Error: js went wrong")
        }
    },1000)
});


async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }  
}
consumedPromiseFive()
*/


/*
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({course : "js", pass : 123})
        } else {
            reject("Error: js went wrong")
        }
    },1000)
});


async function getallUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
        
    }
}
getallUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
} )
.then( (data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)