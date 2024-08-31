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