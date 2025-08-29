//PRIMITIVE DATATYPES[7]

//string,number,boolean,null,undefined,symbol,bigint

const score = 100
const scorevalue = 100.3

const islogin=false
const outsidetemp=null
let useremail;

const id= Symbol('123')
const anotherid= Symbol('123')
//console.log(id===anotherid);//false

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
//  console.log(typeof bignumber);
//  console.log(typeof id);
 //datatype of function is object
// dynamic type langugae because it finds the dtatatype at runtime

//+++++++++++++++++++++++++++++++++++++++++++

//stack(primitibe memory//copy milegi), heap memory(refernce//original mein change hoga ):
//stack: copy goes if u equate two variables and original remains untouched
let myYoutube="hello"
let anothername=myYoutube
// console.log(myYoutube);
// console.log(anothername);
anothername="jio"
// console.log(myYoutube);
// console.log(anothername);

//heap: address of the variable goes into another variable and original changes.
let userone={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let user2=userone

user2.email="hires@gmail.com"

// console.log(userone.email);
//console.log(user2.email);