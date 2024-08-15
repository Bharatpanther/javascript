const marvals = ["ironman", "thor", "superman"]
const dc_Hero = ["flash", "batman", "spiderman"]
// marvals.push(dc_Hero)
// console.log(marvals);

// yha pr jb dono array to marge krenge to dusra array kuch is trh se 
// push hoga : [ 'ironman', 'thor', 'superman', [ 'flash', 'batman', 'spiderman' ] ]


//concat: put all array element in one array 
//like :[ 'ironman', 'thor', 'superman', 'flash', 'batman', 'spiderman' ]
const allheros = marvals.concat(dc_Hero)
console.log(allheros);
// console.log(marvals[3][2])


// focus on this mehtod 
const allnewheros = [...marvals, ...dc_Hero] //u can add more than two array by using comma 
console.log(allnewheros);

const another_arr = [1,2,3,4,[5,6,9],5,[4,5,[5,2]]]
const real_another_array = another_arr.flat(2)
console.log(real_another_array);


console.log(Array.isArray("hitesh_dangi")) // false means is not an array
console.log(Array.from("harshvardhan")) // converted into an array 

console.log(Array.from({name : "harsh"})) /* it directly not converted into an array 
                                you must specified keys of array or value of array */

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // of() work same as from means output is same
