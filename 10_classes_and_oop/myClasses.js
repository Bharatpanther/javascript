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
        return ``
    }
}

const chai = new user("Harsh", "chai@gmail.com", 145874)
console.log(chai);
console.log(chai.encryptPass());

