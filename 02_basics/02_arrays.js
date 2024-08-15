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
