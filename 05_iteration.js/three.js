// higher order loops in js
/*
["","","",""]
[{},{},{},{}]

*/

//for of loop

const arr =[1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}


const greetings = "hello, today is Rakshabandhan"
for (const greet of greetings) {
    // console.log(greet);
    
}



//maps

const map = new Map()
map.set('Rj', 'Rajasthan')
map.set('Gj', 'Gujrat')
map.set('Mp', 'Madhyapradesh')
map.set('Hr', 'Haryana')
// console.log(map);


// how to apply for of loop in map 
for (const key of map) {
    // console.log(key);   
    
}

/*
//  it's give an array 
[ 'Rj', 'Rajasthan' ]
[ 'Gj', 'Gujrat' ]
[ 'Mp', 'Madhyapradesh' ]
[ 'Hr', 'Haryana' ]
*/



for (const [key,value] of map) {
    // console.log(key , ':-' , value);
        
}


/*
const myObject = {
    'game1' : "Gta",
    'game2' : "contra",

}
//map is iterable, but object is not iterable 
for (const key of myObject) {
    console.log(key);  
}
*/

