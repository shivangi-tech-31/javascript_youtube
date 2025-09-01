const tinderuser = {}

tinderuser.id="123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

// console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            fn: "hie",
            ln:"koo",
        }
    }
}
// console.log(regularuser.fullname.userfullname.fn);

const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}

//merging 2 objwcts:
// const obj3= {obj1,obj2} //obj ke andar obj ho jayega

//so we use assign attribute in object
// const obj3 = Object.assign(obj1,obj2)   //in this case value gets stored in obj1 and it can disturb obj1

//so we add {} so that he merged obj should be assigned in {}.

// const obj3 = Object.assign({},obj1,obj2)

//alternative way to assign is spread technique
const obj3= {...obj1,...obj2}

//when in an databse it will give you many objects stored in an array
const user=[
    {
        name:"hi",
        id:1,
    },
    {
        name:"hi",
        id:1,
    },
    {
        name:"hi",
        id:1,
    }
]

//now if u have to access an obj from an array then syntax is:
user[1].id
// console.log(obj3);

console.log(tinderuser);
//if u want all keys of any object then:
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
//now u can loop acc to keys 
//agr u have to make all keys array then:

console.log(Object.entries(tinderuser));//this make separate arrays of the keys and values.

console.log(tinderuser.hasOwnProperty('isloggedin'));
