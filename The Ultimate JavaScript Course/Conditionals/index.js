console.log("JS Conditionals")

let age = 0;
let grace = 2;

console.log(age+grace);
console.log(age**grace); //exponential operator

if(age>18){
    console.log("You can drive")
}
else if(age==0){
    console.log("Kid me not")
}
else{
    console.log("You cannot drive")
}

age+=grace
console.log(age)

let a = 6
let b = 8
let c = a>b ? (a-b) : (b-a)
console.log(c)