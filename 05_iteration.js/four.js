 // for in 
 const myObject = {
    js : "java script",
    rb : "ruby",
    cpp: "c++",
    swift : "swift by apple"
 }

 for (const key in myObject) {
    // console.log(key);
} //output is only keys name of object


for (const key in myObject) {
    // console.log(myObject[key]);
}//output is only of values of key of object


const programming = ["js","ruby","cpp","swift"]

for (const key in programming) {
//  console.log(key); //output is index no, bcoz it is key in array that's return in for-in
    // console.log(`${programming[key]}`);//output is value of keys
        
}


//map in for in 
//output is not given,bcoz map is not iteratable, so Direct access is not possible

const map = new Map()
map.set('Rj', 'Rajasthan')
map.set('Gj', 'Gujrat')
map.set('Mp', 'Madhyapradesh')
map.set('Hr', 'Haryana')

for (const key in map) {
    console.log(key);
    
}