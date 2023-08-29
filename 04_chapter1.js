// Questions

// Create a variable of type string and try to add a number to it?

let a = "umer"
let b = 10

console.log("Ans1: " + a+b);

// use typeof  operator to find the datatype of the string in last quuestion

console.log("Ans2: " + typeof(a+b));

// create a const object in javascript can you change it to hold a number later?

const a1 = {
    name:"Umer",
    class:"end",
    number:420
}
// a1=123 // we cant change it

// console.log( a1)

// try to add a new key to the const object in problem 3 were you able to do it
 
 a1['friend'] = "khan"
 a1['name'] = "khan"
 console.log( a1)

// write a JS program to create a word meaning dictionary of 5 words

const dict = {
    word : "meaning"
}

console.log(dict["word"])