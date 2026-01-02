console.log("JS Strings")

let a = "JavaScript"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);
//console.log(a[10]); //undefined 

//length of the string
console.log(a.length)

let rname = "Web"
let surname = "Development"
console.log("The name is " + rname + " and the surname is " + surname)

//if we want to make template of strings, we can use TEMPLATE LITERALS
//Template literals use backtics to define a string
console.log(`The name is ${rname} and the surname is ${surname}`)


//escape sequence 

//cant write "Web " Develop" //console.log("Web " Develop")
console.log("Web \" Develop")

console.log("Web \nDevelop")

let b = "Practice"
//to uppercase
console.log(b.toUpperCase())
//to lowercase
console.log(b.toLowerCase()) //toLowerCase() is a function //length is a property so doesnt require ()

//SLICE
console.log(b.slice(2,5)) //a-2, c-3, t-4 //doesnt include the last no. i.e., 5 here
console.log(b.slice(2)) //string chars from 2 to end

//REPLACE
console.log(b.replace("ic", "48"))
//if 2 or more occurences of the chars to be replaced, the 1st one is replaced

//CONCATENATE
console.log(b.concat(a, "Nicely"))

//REMOVE WHITESPACES - TRIM
let c = "  Twis ha  "
console.log(c.trim())

//STRINGS ARE IMMUTABLE: it doesnt change once allocated memory
console.log(b)
console.log(c)
//chahe kitn changes karlo wo new string me honge and not the original one

//SOME MORE 
console.log(b.charAt(4))

console.log(b.indexOf("ic"))

// console.log(b.startsWith("Pr"))
// console.log(b.startsWith("ic"))