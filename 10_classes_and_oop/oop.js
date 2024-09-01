/*
const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,
    
    getUserDetails : function(){
        console.log("got user details form database");
        console.log(`username: ${this.username}`);
        
    }
}


console.log(user.username)
console.log(user.getUserDetails())
*/


function user(username, loginCount, isloggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isloggedIn = isloggedIn

    return this;
}

const userOne = new user("harshvarhdhan", 12, true)
const userTwo = new user("hitesh", 11, false)

console.log(userOne.constructor); // output : [function: user]
// console.log(userOne);
// console.log(userTwo);
