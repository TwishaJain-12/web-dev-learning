console.log("DOM Part 3")

let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor = "red"

document.getElementById("magentabox").style.backgroundColor = "magenta"

document.querySelector(".box").style.backgroundColor = "aqua" //.box as we pass css selector //jo pehla milgya with same selector uspar changes ho jayenge

console.log(document.querySelectorAll(".box")) //returns a nodelist and not an element
document.querySelectorAll(".box").forEach(e=>{
    console.log(e)
    e.style.color = "green"
})

console.log(document.getElementsByTagName("div")) //returns a collection
let e = document.getElementsByTagName("div")
console.log(e[4].matches("#magentabox"))
console.log(e[3].matches("#magentabox"))

console.log(e[3].closest("#magentabox"))
console.log(e[2].closest("#magentabox")) 
//neither them nor their parent => returns null

console.log(e[3].closest(".container"))
//container is the parent of e[3]
//starts from checking itself, then parent, then parents parent and so on till match found, otherwise null
console.log(e[3].closest("html"))

console.log(document.querySelector(".container").contains(e[3]))
console.log(document.querySelector(".container").contains(e[0])) //contains itself
console.log(document.querySelector(".container").contains(document.querySelector("body"))) 