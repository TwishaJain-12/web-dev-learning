console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.firstElementChild.children) //childNodes->Nodes, children->Elements
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)

let cont = document.body.childNodes[1]
console.log(cont.firstChild, cont.lastChild)
console.log(cont.firstElementChild)
cont.lastElementChild.style.color = "red"
cont.lastElementChild.style.backgroundColor = "aqua"
console.log(cont.lastElementChild.parentElement)

console.log(document.body.firstElementChild.children[3])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].previousSibling)

//TABLE
let tble = document.body.children[1]
console.log(tble)
console.log(tble.rows)
console.log(tble.columns) //it is not there
