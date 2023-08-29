// Question 1
// use logical operator to find whether the age of a person is lies between 10 and 20 

// let age = prompt("what is your age");

let age = 15

if(age<=10){
    console.log("age not lies between 10 and 20 bcz age is less then and equal to 10")
}

else if(age>10 && age<20){
    console.log("age lies between 10 and 20")
}

else{
    console.log("age is more then or equal to 20")
}

// Question 2
// Demonstrate the use of switch case statemnet in javascript


// Question 3
// write a JS program to find whether a number is divisible bt 2 and 3


// Question 4
// Print "you can drive" pr "you can not drive" base on age being greather then 18 using ternary operator

let person_age = 20

let b = person_age <18 ? "you cannot drive" : "you can drive";
console.log(b)