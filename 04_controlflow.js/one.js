// if statement
/*syntex
if (condition){

}
*/

//<,>,>=,<=,==,!=,===


/*
const isuserloggedIn = true

if (2 != 3){
    console.log("executed"); 
}

// if-else
const temprature = 41
if(temprature === 41){
    console.log("temprature is lessthan 50");
    
}else{
    console.log("greater than 50");
    
}
*/




/*
const score = 200
if (score > 100){
    let power = "fly"
    console.log(`power is : ${power}`);
    
}

console.log(`power is out of scope ${power}`);
*/


//implicit scope
/*
const balance = 1000
if(balance >500) console.log("balance is greater than 500");

//use ,  to add multipleline line in this scope. don't forget about semicolon at the end
if(balance >500) console.log("balance is greater than 500"),console.log("harshvardhan");
*/


/*
// nested if-else
 const balance = 1000
 if (balance <500){
    console.log("lessthen 500");
    
 }else if(balance < 750){
    console.log("lessthan 750");
    
 }else if(balance >900){
    console.log("lessthen 900");
    
 }else {
    console.log("equals to hundread");
    
 }
*/


const userloggesIn = true
const debitcard = true
const googleloggedin = false
const emailloggedin = true

// && gives output when both are condition is true 
if (userloggesIn && debitcard){
    console.log("allow to buy course");
    
}

// || or gives output when any one condtiton is true out of multiple condition
if (googleloggedin || emailloggedin){
    console.log("user logged in");
    
}



 
