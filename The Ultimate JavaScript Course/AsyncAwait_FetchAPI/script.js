//Promise settle => resolve or reject
//resolve => promise has settled successfully
//reject => promise has not settles successfully

// async function getData(){
//     //Simulate getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         }, 3500)
//     })
// }

async function getData(){
    //Simulate getting data from a server
    //let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') //returns promise 1: data lane ki

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })

    let data = await x.json() //promise 2: data ko parse karne ki either in text/JSON(JS object) x.text()
    return data
}
//getData() func is overall returning a promise

//ASYNC => the func will run in background
async function main() {
    console.log("Loading modules..")
    
    console.log("Do something else")
    
    console.log("Load Data")

    let data = await getData() //i want to stop here=>make the func async

//if i want to wait for my async func, put await
    
    console.log(data)
    
    console.log("process data")
    
    console.log("task 2")
}

main();

// console.log(data)

// console.log("Process data")

// console.log("task 2") //if i want these 2 to run only after the data is loaded we can do 2 things

//1 : callback based approach

// data.then((v)=>{
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
// })

//2: Async Await


//Example POST method implementation
async function postData(url = "", data = {}) {
    const respone = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return respone.json();
}

postData("https://example.com/answer", {answer:42}).then((data)=>{
    console.log(data);
})