// Async functions always and always return a Promise 
// Even if we return something from it. THe Promise gets resolved 
// with whatever value we return.

const getDataPromise = (num) => new Promise ((resolve, reject)=> {
    setTimeout(() => {
        typeof num ==='number' ? resolve(num * 2) : reject('Data invalid. Please enter a valid number!!')        
    }, 3000)
})

// Using Await : Please do it after the below mentioned Example 1 series.
const processData = async () => {
    
    // Old way of doing without await.
    //getDataPromise(2).then((data) =>{
    //    console.log(data)
    //})

    // Using await.
    //const data = await getDataPromise(2)
    let data = await getDataPromise(2)
    // Chaining promises, Make data above let instead of const.
    data = await getDataPromise(data)
    console.log(data)
    //console.log(`Printing data using async-await: ${data}`)
    return data
}
processData().then((data) => {
    console.log(`Printing data using async-await: ${data}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

//////////////////////////////////////////////
/*
// Example1: 
const processData = () =>{
    return 12
}

console.log(processData())
// Output is L
//C:\code\Javascript-AM\JS-Bootcamp\functions>node async-await.js
//12
*/
// Now we change it to async.
/*
const processData = async() =>{
    throw new Error('Process Data errored out !! ')
    return 12
}
*/
//console.log(processData())
// Output:
//Promise { 12 }
// so modify it for seperating resolve and reject
/*
processData().then((data) => {
    console.log(`Promise resolved with : ${data}`)
})
// Output:
//C:\code\Javascript-AM\JS-Bootcamp\functions>node async-await.js
//Promise resolved with : 12
*/

/*
// Now we attach a catch for reject case.
processData().then((data) => {
    console.log(`Promise resolved with : ${data}`)
}).catch((error) => {
    console.log(`Promise rejected with Error: ${error}`)
})
// Output:
//C:\code\Javascript-AM\JS-Bootcamp\functions>node async-await.js
//Promise rejected with Error: Error: Process Data errored out !!
*/