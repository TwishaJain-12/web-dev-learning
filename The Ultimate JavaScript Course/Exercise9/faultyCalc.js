/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

generate random number using Math.random(),
which generates a random no. b/w 0 and 1, 
to check if it is <0.1 for 10% prob
*/

console.log("CALCULATOR");
let a = Number(prompt("Enter the first no.: "));
let b = Number(prompt("Enter the second no.: "));
let op = prompt("Enter the operation: ");
// let a = 7
// let b = 8
// let op = "//"

const sum = (x,y) => {
    return x+y
}
const sumF = (x,y) => {
    return x-y
}

const mult = (x,y) => {
    return x*y
}
const multF = (x,y) => {
    return x+y
}

const minus = (x,y) => {
    return x-y
}
const minusF = (x,y) => {
    return x/y
}

const divide = (x,y) => {
    return x/y
}
const divideF = (x,y) => {
    return x**y
}

if(Math.random()<0.1){
    if(op=="+"){
        console.log(sumF(a,b));
    }
    else if(op=="-"){
        console.log(minusF(a,b));
    }
    else if(op=="*"){
        console.log(multF(a,b));
    }
    else if(op=="/"){
        console.log(divideF(a,b));
    }
    else{
        console.log("Sorry, operation not available!")
    }
}
else{
    if(op=="+"){
        console.log(sum(a,b));
    }
    else if(op=="-"){
        console.log(minus(a,b));
    }
    else if(op=="*"){
        console.log(mult(a,b));
    }
    else if(op=="/"){
        console.log(divide(a,b));
    }
    else{
        console.log("Sorry, operation not available!")
    }
}
