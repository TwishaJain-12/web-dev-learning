console.log('This is Promises');

let prom1 = new Promise((resolve, reject)=>{
    let ran = Math.random();
    if(ran<0.5){
        reject("No random number is supporting you")
    }
    else{
        setTimeout(() => {
            console.log('Yes, I am done');
            resolve("Harry")
        }, 3000);
    }
})

// prom1.then((a)=>{
//     console.log(a);  //jis value ke saath yeh resolve hui hain <--a
// }).catch((err)=>{
//     console.log(err)
// })

let prom2 = new Promise((resolve, reject)=>{
    let ran = Math.random();
    if(ran<0.5){
        reject("No random number is supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log('Yes, I am done 2');
            resolve("Harry 2")
        }, 1000);
    }
})

// let p3 = Promise.all([prom1,prom2]) //p3 is the new promise
// p3.then((a)=>{
//     console.log(a);  
// }).catch(e=>{
//     console.log(e)
// })

// let p3 = Promise.allSettled([prom1,prom2]) //p3 is the new promise
// p3.then((a)=>{
//     console.log(a);  
// }).catch(e=>{
//     console.log(e)
// })

// let p3 = Promise.race([prom1,prom2]) //p3 is the new promise
// p3.then((a)=>{
//     console.log(a);  
// }).catch(e=>{
//     console.log(e)
// })

let p3 = Promise.any([prom1,prom2]) //p3 is the new promise
p3.then((a)=>{
    console.log(a);  
}).catch(e=>{
    console.log(e)
})

