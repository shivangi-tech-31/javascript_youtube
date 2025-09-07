const coding=["JavaScript","Python","Ruby","Java","C++"]

//array_name.forEach( function name(item/ index / array) {})
//function name is optional or most probably we dont write it 
coding.forEach( function name(val) {
    console.log(val);
})
//above code will take each index or item from the array coding and then do whatever is told to do inside function definition

//you can use function either from arrow function or from normal function
// () is basically a callback function and you can give any name to it 
coding.forEach( (item) => {
    console.log(item)
})

//if u declare a function before and then calling it

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
//access to the object inside the array using for each loop
myCoding.forEach((item)=> {
    console.log(item.languageName)
})