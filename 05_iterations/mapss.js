// for of loop is used to iterate over iterable objects
// iterable objects are arrays, strings, maps, sets
// iterable objects are objects which have Symbol.iterator property
//syntax:
// for (const item of iterable) {
//     //code to be executed
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


//Maps 
//Map is a collection of key-value pairs
//keys can be of any data type
//values can be of any data type
//Maps are ordered
//Maps are iterable
//Maps donot store dupliate values 
//syntax:
// const map = new Map([
//     [key1, value1],
//     [key2, value2],
//     ...
// ]);

const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('isStudent', false)
    
// console.log(map);  

//this gives all the keys in the map in an array form
for (const key of map) {
    // console.log(key);
}
// [ 'name', 'John' ]
// [ 'age', 30 ]
// [ 'isStudent', false ]

//this destructure the array given by above code 
for (const [key, value] of map) {
    // console.log(`${key}: ${value}`);
}

// name: John
// age: 30
// isStudent: false

//Can we apply for of loop on object

const obj = {
    name: 'Alice',
    age: 25,
    isEmployed: true
};

// for (const item of obj) { //TypeError: obj is not iterable
//     // console.log(item);
// }

//Solution to iterate over object using for of loop
for (const key of Object.keys(obj)) {
    //console.log(`${key}: ${obj[key]}`);
}

for (const [key, value] of Object.entries(obj)) {
    //console.log(`${key}: ${value}`);
}

//alternative:: using for in loop 

for(const key in obj){
    console.log(`${key} is for ${obj[key]}`);
    
}

//diff bw for in and for of 
// for-in:: Iterates over enumerable properties of an object
    //   :: Returns the keys (property names)
//for-of:: Iterates over iterable objects like arrays, strings, maps, etc.
    //   ::	Returns the values of the iterable

  