let box = document.querySelector(".box")
console.log(box.innerHTML)
console.log(document.querySelector(".container").innerHTML)

console.log(box.innerText)
console.log(document.querySelector(".container").innerText)

console.log(document.querySelector(".container").outerHTML)

// Inner HTML -> undar ki html
// Outer HTML -> inner + itself

console.log(document.querySelector(".container").tagName) //only applicable for elements
console.log(document.querySelector(".container").nodeName) //applicable for all nodes(comment node, text node etc.)
console.log(document.querySelector(".container").textContent) //inner text content

// console.log(document.querySelector(".container").hidden)
// console.log(document.querySelector(".container").hidden = true) //puts hidden attribute in the container => hides the element

//we can change the html of a particular element
document.querySelector(".box").innerHTML = "Hey, I am a box"

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
document.querySelector(".box").setAttribute("style", "color: blue")
console.log(document.querySelector(".box").attributes)
document.querySelector(".box").removeAttribute("style")

//data attributes
console.log(document.querySelector(".box").dataset)

//insert node technique
let div = document.createElement("div")
div.innerHTML = "Inserted <b>By Twisha</b>"
div.setAttribute("class", "created")
document.querySelector(".container").append(div)
//.append inserts the element at last of the container

//document.querySelector(".container").before(div)
//document.querySelector(".container").after(div)
//document.querySelector(".container").prepend(div)
//document.querySelector(".container").replaceWith(div)

//INSERT HTML
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "<b>HTML inserted</b>")

//REMOVE NODE -- node.remove()
document.querySelector(".box").remove()
document.querySelector(".box").remove()

//CLASSLIST
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)

document.querySelector(".container").classList.add("Twisha")
document.querySelector(".container").classList.remove("Twisha")
document.querySelector(".container").classList.toggle("red") //class hain to hat jayegi and nhi hain to lag jayegi
document.querySelector(".container").classList.toggle("red") //class hain to hat jayegi and nhi hain to lag jayegi

