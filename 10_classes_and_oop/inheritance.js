class user {
    constructor(username){
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addcourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai =  new Teacher("tea", "tea@gmail.com" , 1431)
chai.addcourse()



