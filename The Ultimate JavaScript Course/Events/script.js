let button = document.getElementById("btn")

//List of all mouse events
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

button.addEventListener("dblclick", ()=>{
    //alert("I was clicked. YAYY!!")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu" , ()=>{
    alert("Dont hack us by Right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
}) //takes event obj as input