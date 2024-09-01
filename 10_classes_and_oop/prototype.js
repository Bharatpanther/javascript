/* here it is problem. how to solve, create protoype who trim the white space
let myName = "hitesh     "
let myChannel = "tea    "

console.log(myName.trueLenght);
*/


let myHero = ['thor', 'spiderMan']
// create prototype in array with name heyHarsh
Array.prototype.heyHarsh = function () {
    console.log(`harsh says hello to everyone who knows`);
}

myHero.heyHarsh()


let heroPower = {
    thor: "hummer",
    spiderman: "sling",

    getspiderPow: function () {
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

//create prototype in object that's name is hitesh
Object.prototype.hitest = function () {
    console.log(`Hitesh is present in all objects`);
}

// heroPower.hitest()
// heroPower.heyHarsh() // here object is not access the prototype of array 
// myHero.hitest()



//inheritance
const User = {
    username: 'chai',
    email: "chai@gmail.com"
}

const Teacher = {
    makevide: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//morden Syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // here it's mean teachingsupport allow to  access the property of teachers properties. it is protyple inheritance



let anotherName = "chaiaurCode    "

String.prototype.tureLenght = function(){
    console.log(`this`);
    console.log(`True lenght is: ${this.trim().length}`);
    
}

anotherName.tureLenght()
"harash       ".tureLenght()
"t  k  ".tureLenght()