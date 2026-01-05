let arr = [1,13,5,7,11]

// let newArr = []
// for(let index=0; index < arr.length; index++){
//     const element = arr[index]
//     newArr.push(element**2)
// }
// console.log(newArr)

let newArr = arr.map(e=>{ //in map we can take value, index, array
    return e**2
})

console.log(newArr)

//FILTER
const greaterThanSeven = (e)=>{
    return e>7 ? true:false
}
console.log(arr.filter(greaterThanSeven)) //returns the new array



//REDUCE 
let Arr = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}

console.log(Arr.reduce(red)) //red func applied to all its elements --> obtains a value

