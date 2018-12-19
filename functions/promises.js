// std callback

const getDataCallback= (callback) => {
    setTimeout(()=> {
        console.log('This time is up !')
        // for success
        //callback(undefined, 'This is the data')
        // for error we change it to 
        callback('This is the callback error', undefined)

        // if we again call a callback ,it will compile but 
        // it can have unpredictable behaviour .
        // it can crash the program as well.
        //callback('This is the callback error', undefined)
        // In that sense Promises are better.
    }, 2000)
}

/*
const getDataCallback= (callback) => {
    setTimeout(()=> {
        console.log('This time is up !')
        callback(undefined, 'This is the data')
    }, 2000)
}
*/


// simulate a delay instead of  httprequest

getDataCallback((err, data)=> {
    if(err) {
        console.log(err)
    } else {
        console.log('This time is up !')
    }
}, 2000)

// Promise

// Important: 
// Promises cannot be resolved twice, rejected twice,
// resolved and rejected, rejected and resolved.
// Better way of writing a promise, so that data can be passed 
// and accessed inside promises.
// This how we pass data to promises!!
/*
const getDataPromise = (data) =>{
    return new Promise((resolve, reject)=>{
        // called right way, to perform long runnig process
        setTimeout(() =>{
            // call either resolve or reject
            //resolve('This is the Promise data')
            reject(`This is the Promise Error for ${data}`)
        }, 2000)
    })
}
*/
/*
// Regular syntax is mentioned below again
const getDataPromise = (data) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            reject(`This is the Promise Error for ${data}`)
        }, 2000)
    })
}*/
/*
// Shorthand syntax for the same is written below!!
const getDataPromise = (data) => new Promise((resolve, reject)=>{
    // here comes the actual long work !! 
    // or the http request
    setTimeout(() =>{
        // call either resolve or reject
        resolve(`This is the Promise data on success : ${data}`)
    }, 2000)
    
})
////////////

// This how we pass data to promises!!
const myPromise = getDataPromise(123)

// call then to access promise when we have information on success.
myPromise.then((data)=>{
    console.log(data)
}, (err) => {
    // this is the part if promise fails(reject part)
    console.log(err)
})
*/

// Promise chaining
const getDataPromise = (num) => new Promise ((resolve,reject)=> {
    setTimeout(() => {
        typeof num ==='number' ? resolve(num*2) : reject('Data invalid. Please enter a valid number!!')        
    }, 2000);
})

// one way of calling it multiple times one after another.
getDataPromise(2).then((data) =>{
    getDataPromise(2).then((data) =>{
    console.log(`Promise level1 data: ${data}`)
    }, (err) =>{
        console.log(err)
    })
    }, (err) =>{
    console.log(err)
})
// The above method is still cumbersome and the next one is the best way to chain promises..
// using a chain of then(s) without extra nesting
console.log('Using chaining of thens')
getDataPromise(10).then((data) =>{
    return getDataPromise(data)
}).then((data) =>{
    return 'This is some test data'
}).then ((data) =>{
    console.log(data)
}).catch((err)=> {
    console.log(err)
})


