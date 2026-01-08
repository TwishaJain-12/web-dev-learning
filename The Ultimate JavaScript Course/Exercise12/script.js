let boxes = document.getElementsByClassName("box")
let colors = ["red", "orange", "green", "aqua", "blue", "purple", "pink", "gray", "olive", "gold"]

// boxes[0].style.color = colors[random];
// boxes[1].style.color = colors[random];
// boxes[2].style.color = colors[random];
// boxes[3].style.color = colors[random];
// boxes[4].style.color = colors[random];
// boxes[0].style.backgroundColor = colors[random];
// boxes[1].style.backgroundColor = colors[random];
// boxes[2].style.backgroundColor = colors[random];
// boxes[3].style.backgroundColor = colors[random];
// boxes[4].style.backgroundColor = colors[random];

document.querySelectorAll(".box").forEach(e=>{
    let random1 = Math.floor(Math.random()*10);
    console.log(random1)
    let random2 = Math.floor(Math.random()*10);
    console.log(random2)
    e.style.color = colors[random1]
    e.style.backgroundColor = colors[random2]
})
