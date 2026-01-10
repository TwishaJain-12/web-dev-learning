console.log("Solution.js intializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

//to generate a random no. b/w a,b including both
// a + r(b-a) where r:random no

function getRandomColor(){
    // let val1 = 233;
    // let val2 = 124;
    // let val3 = 111; //a color has max limit 255
    let val1 = Math.ceil(0 + Math.random()*255)
    let val2 = Math.ceil(0 + Math.random()*255)
    let val3 = Math.ceil(0 + Math.random()*255)
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

// // METHOD 2 : hexadecimal

// var boxess = document.querySelectorAll(".box")

// for(var i=0; i<boxess.length; i++){
//     var box = boxess[i]

//     //generate random color (16777215 is White in Decimal)
//     var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     var randomBGColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     //toString(16) converts the no. into hexadecimal form

//     box.style.color = randomColor;
//     box.style.backgroundColor = randomBGColor;

//     //set text content to show color code
//     box.textContent = randomColor
// }