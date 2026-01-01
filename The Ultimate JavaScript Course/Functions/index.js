console.log("JS Functions")

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

nice("Twisha")
nice("Diya")
nice("Japneet")


function sum(a, b, c=3){ //c -> default parameter 
    //console.log(a+b)
    return a+b+c
}

result = sum(3, 8.5)
result2 = sum("Twisha ", "Jain")

console.log("The sum of 3 and 8.5 and c is: ", result)
console.log(result2)

const show = (x) =>{
    console.log("I am an arrow function", x)
}
show(33)
show(66)
show(84)
/*if function has one statement, can use arrow function

If the function has only one statement that returns a value, 
you can remove the brackets and the return keyword */

//before arrow
let hello = function(){
    return "Hello World!";
}

//with arrow function
let hello1 = () => "Hello World";//it returns by default

console.log(hello(), hello1())

const sum2 = (x,y) => x+y;
let y = sum2(3,6) //captured the func in the variable
console.log(y)