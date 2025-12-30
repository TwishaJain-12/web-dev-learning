console.log("Chapter: Variables")

var a = 5;
var b = 6;
var c = "Var"

console.log(a+b)
console.log(typeof a, typeof c)

// const a1 = 7;
// a1 = a1+1; //not allowed

//var is globally scoped 
//let and const are block scoped

let x = "Twisha Jain";
let y = 24;
let z = 3.56;
const p = true; 
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

//object
let o = {
    name: "Twisha", //name can have ""
    "job code": "5244" //job code has space so "" 
}

console.log(o)

o.salary = "100crores";
console.log(o)