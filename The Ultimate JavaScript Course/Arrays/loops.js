let a = [1,93,5,6,88]

//CLASSICAL FOR LOOP ON ARRAY
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

//FOR EACH: calls function for each ele of the array
a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

//FOR IN
let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key, element)
}

//FOR OF
for (const value of a) {
    console.log(value)
}