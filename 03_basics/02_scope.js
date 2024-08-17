
/*
// var c = 300 
let a = 300

if(true) {
    let a = 20
    const b = 20
    // var c = 30
    console.log("inner : ", a);
    
}

console.log(a)
// console.log(b)
// console.log(c)

*/





/*  nested function and ti's scope and access limitations */
/*
function one(){
    const username = "harshvardhan"
    
    function two(){
        const website = "youtube"
        console.log("username");  //here fun two access const username of parent fun one
    }
    // console.log(website); //here fun one not access const website of fun two 
    
    two()
}

one()

*/

/*
// same thing in statements
if(true) {
    const username = "harshvardhan"
    
    if(username === "harshvardhan"){
        const website = " google"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);
*/



//*********************** interesting concept *********************

//1st  here you can call function before define. it doesn't give an error

console.log(addone(5))
function addone(num){
    return num +1
}


//2nd here you can not call function before functon define.
// ReferenceError: Cannot access 'addTwo' before initialization, when you declare this 
//type of function you need to calling function after function declaration

// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}


console.log(addTwo(5));
