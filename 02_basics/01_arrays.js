//array

const myarray=[0, 1, 2, 3, 4, 5]
const myarray2=new Array(0, 1, 2, 3, 4, 5)
const myhero=["shaktiman" , "naagraj"]
//accessing elements via index

//Array methods

//to insert any element in array
myarray.push(6) // insert 6 in array
myarray.push(7) // insert 6 in array
// to remove any element from last
myarray.pop()

//to insert any elelment at start and this shifts the other elements
myarray.unshift(9)

//shift remves that starting element
myarray.shift()

//questions sked to array:
// console.log(myarray.includes(9)); // true or false whether 9 exists or not 
// console.log(myarray.indexOf(19)); // if any no which is not present in arrr returns -1

const newarr= myarray.join() // it joins two array and converts the datatype into string

//console.log(newarr); //converted into string
//console.log(typeof newarr); //converted into string

//slice,splice
//slice is used to separate a range of index values irrespective of last in range and no change in original take place
//splice takes the last one also in range and real array gets changed as those no get separated permanently from the array

console.log("A",myarray); //shows whole array

const myn1 = myarray.slice(1,3)

console.log(myn1);
console.log("B",myarray);

const myn2 = myarray.splice(1,3);
console.log(myn2);
console.log("C",myarray);
