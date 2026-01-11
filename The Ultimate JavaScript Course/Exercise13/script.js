function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    
    let div = document.createElement("div")
    div.setAttribute("class", "card")

    let Image = document.createElement("div") //overall div
    Image.setAttribute("class", "img")
    let Img = document.createElement("img")
    Img.setAttribute("id" , "image") 
    Img.src = thumbnail
    let Duration = document.createElement("div")
    Duration.setAttribute("class", "Duration")
    Duration.innerHTML = duration
    Image.append(Img)
    Image.append(Duration)

    let others = document.createElement("div")
    others.setAttribute("class", "others")
    let Title = document.createElement("div")
    Title.setAttribute("class", "Title")
    Title.innerHTML = title
    let line = document.createElement("div")
    line.setAttribute("class", "line")

    if(views>=1000000) views = views/1000000 + "M";
    else if(views>=1000) views = views/1000 + "K";

    if(monthsOld>12) monthsOld = monthsOld/12 + " years ago";
    else monthsOld = monthsOld + " months ago";

    line.innerHTML = `${cName} • ${views} • ${monthsOld}`

    others.append(Title)
    others.append(line)


    div.append(Image)
    div.append(others)

    document.querySelector(".container").append(div)
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")