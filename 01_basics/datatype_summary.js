//PRIMITIVE DATATYPES[7]

//string,number,boolean,null,undefined,symbol,bigint

const score = 100
const scorevalue = 100.3

const islogin=false
const outsidetemp=null
let useremail;

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid);//false

const bignumber=78668787867564n


//REFERENCE TYPE[3]

//Arrays, obects , functions

//array:
const heros=["shaktiman","nagraj","doga"]

//object
let myobj={
    name:"hitesh",
    age:22,
}
//function
const myfunction=function(){
    console.log("hello world");
    
}

//typeof func is used to find the datatype of any variable.
 console.log(typeof bignumber);
 console.log(typeof id);
 //datatype of function is object
// dynamic type langugae because it finds the dtatatype at runtime