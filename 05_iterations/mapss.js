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
    
console.log(map); 