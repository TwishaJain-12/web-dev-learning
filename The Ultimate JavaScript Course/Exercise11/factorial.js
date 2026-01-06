//WAP to calculate factorial of a num using reduce and using for loops

let n = prompt("Enter the number: ")
//Method 1 - reduce

// let arr = [n];
// while (n-1>0) {
//     n-=1
//     arr.push(n)
// }

// let factorial = (a,b)=>{
//     return a*b
// }

// console.log(arr.reduce(factorial))

//METHOD 2
let value = 1;
for (let index = n; index > 0; index--) {
    value*=index
}

console.log(value)