// functions 
//  functions is a block of code that can be reuse in a program

// simple way of using function
function sum(x,y){
    return 1 + (x+y)/2;
}

let a = 6;
let b = 19;

console.log("sum of numbers using simple function: " + sum(a,b))

// now using arrow function

const add = (p,q) =>{
    // console.log("Sum of all numbers")
    return p+q;
}

let p = 6;
let q = 19;

console.log("Sum of numbers using arrow function: " + add(p,q))