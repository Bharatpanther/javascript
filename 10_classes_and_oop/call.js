function setUsername(username){
    //complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this,username)

    this.email = email,
    this.password = password
}

const chai =  new createUser('chai', 'chai@gmail.com', 145269)
console.log(chai);
