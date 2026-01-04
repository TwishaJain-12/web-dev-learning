let arr = [1, 2, 4, 5, 7]
// Index   0, 1, 2, 3, 4

console.log(arr, typeof(arr))
console.log(arr.length)
console.log(arr[0], arr[1], arr[2], arr[3], arr[4])

//Arrays are MUTABLE
arr[1] = 8
console.log(arr[1])

//ARRAY METHODS
console.log(arr.toString()) //1

console.log(arr.join(" and ")) //2

console.log(arr.pop()) //3
console.log(arr) //3

arr.push(100) //4 //returns the new array length
console.log(arr) //4
arr.push("hehe")
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift("Haha"))
console.log(arr)

delete arr[5]
console.log(arr)
console.log(arr[5]) //memory is allocated but there is no ele there
console.log(arr.length)

let a1= [1,4,2]
let a2= [5,6,8]
let a3= [3,7,9]
console.log(a1.concat(a2,a3)) //this returns a new array with all the 3 arrs joined
console.log(a1) //it doesnt change existing arrays

console.log(arr.sort()) //sort() sorts values as strings, so sorting no.s will tell "25">"100"
console.log(a1.sort(function(a,b){return a-b})) //fix this by providing a compare function
//sort() sorts values according to returned (-ve,0,+ve) value of compare func
// result -> -ve, a then b
// result -> +ve, b then a
// result -> 0, no changes made to the order

//SPLICE
//to delete particular items and insert at their place
let numbers = [1,2,3,4,5]
console.log(numbers.splice(1,2))
console.log(numbers)
console.log(numbers.splice(1,2,6,7))
console.log(numbers)

//SLICE
numbers = [1,2,3,4,5]
console.log(numbers.slice(2))
console.log(numbers.slice(1,3)) //not including 3

//REVERSE
console.log(numbers.reverse())

