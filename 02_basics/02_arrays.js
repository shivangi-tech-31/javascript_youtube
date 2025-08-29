const marvel_heros = ["thor", "ironman","spiderman"]
const dc = ["superman", "flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);

const allHero = marvel_heros.concat(dc) //you have to make a new variable to concat

// console.log(allHero);
const allnewheros=[...marvel_heros,...dc] // spread operator

// console.log(allnewheros);

//flat operator makes subarrays in one acc to depth
const anotherarray = [1, 2,3 ,[4,5 , 6],7 ,[6,7,[4,5]]]
const realanotherarray=anotherarray.flat(Infinity)
console.log(realanotherarray);


console.log(Array.isArray("hitesh"))//asking if it is a array or not
console.log(Array.from("hitesh"))//making the string into an array 
console.log(Array.from({name:"hitesh"}))//interesting case because it returns the empty array as it is an object and cant be converted into an array
// in 24 you haev to giive or specify ki keys se banani h ya vlaues se 


let score1=100
let score2=200
let score3=300

console.log( Array.of(score1,score2,score3));