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
let a = prompt("Enter the first no.: ");
let b = prompt("Enter the second no.: ");
let op = prompt("Enter the operation: ");

let random = Math.random()
console.log(random)

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random>0.1){
    //Performs correct calculations
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
}
else{
    //Performs faulty calculations
    op  = obj[op]
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
}