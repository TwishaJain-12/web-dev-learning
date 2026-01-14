console.log("Harry is a hacker")
console.log("Rohan is a hecker")

setTimeout(()=>{
    console.log("I am inside settimeout")
},2000)
setTimeout(()=>{
    console.log("I am inside settimeout 2")
},2000)

//isse baadme run karenge due to asynchronous nature of JS
//2s ke wait me script thodi rukegi, wo aage bad jayegi and yeh baad me run hogaa
//even if we say run after 0ms, then also first whole script will run then settimeout

console.log("The End")

const fn = ()=>{
    console.log("Nothing")
}

const callback = (arg, fn)=>{
    console.log(arg)
    fn();
}

const loadScript = (src, callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Twisha", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg,fn)=>{
//     console.log(arg)
//     fn("firstarg", ()=>{
//         ddg("secondarg", ()=>{

//         })
//     })
// })
//PYRAMID OF DOOM --> difficult to manage <-- callback ke andar callback ke andar callback
//hence we use PROMISES <-- solution to callback hell

//PROMISE is 'promise of code execution'
//Code eitehr executes/fails, in both cases the subscriber will be notified

