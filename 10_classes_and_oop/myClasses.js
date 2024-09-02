//ES6

class user{
    constructor(username, email, password){
        this.username =username;
        this.email =email;
        this.password = password
    }

    encryptPass(){
        return`${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("Harsh", "chai@gmail.com", 145874)
console.log(chai);
console.log(chai.encryptPass());
console.log(chai.changeUsername());


//Behind the scene

function User(username,email,password){
    this.usrname = username; 
    this.email = email;
    this.password = password
}

User.prototype.encryptPass = function(){
    return `${this.password}abc`
}

const tea = new User("tea","tea@gmail.com", "12356")
console.log(tea);
console.log(tea.encryptPass());

