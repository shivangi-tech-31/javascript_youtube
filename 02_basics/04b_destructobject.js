//The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. It can be used in locations that receive data (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

// course.courseinstructor

//another syntax is:
const {courseinstructor}= course
//if you have to shorten or nickname of courseinstructor then use below syntax:
const {courseinstructor:instructor}= course

// console.log(courseinstructor);
// console.log(instructor);

//json is used in apis.
//looks like this //{ "name":"hitesh", }//keys nd values all r in string
