//date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// 2025-08-25T19:57:46.196Z
// Mon Aug 25 2025
// 2025-08-25T19:57:46.196Z
// Mon Aug 25 2025 19:57:46 GMT+0000 (Coordinated Universal Time)
// 2025-08-25T19:57:46.196Z
// 8/25/2025
// 7:57:46 PM
//datee is an object in js

//to specify a date in particular
let myCreatedDate = new Date(2023, 0,23)
// console.log(myCreatedDate.toDateString());

//month are started from zero in js
let myCreatedDatee = new Date(2023, 0,23,21,3)
// console.log(myCreatedDatee.toLocaleString());

let myCreatedDateee = new Date("2023-01-14") //yymmdd
// console.log(myCreatedDateee.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(myCreatedDate.getTime());
//if u want to convert any dateto seconds..
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);

console.log(newdate.toLocaleString('default',{
    weekDay:'Long',

}))  