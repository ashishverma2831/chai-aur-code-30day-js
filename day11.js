// Day 11 : Promises and Async Await

// Task 1
const myPromise = new Promise((resolve,reject)=>{
    // console.log('Hello World');
    setTimeout(()=>{
        resolve('Promise resolved after 2 seconds');
    },2000);
})
myPromise.then((result) => {
    console.log(result);
})

// Task 2
const rejectPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Promise rejected after 2 seconds');
    },2000);
})
// rejectPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });
rejectPromise.catch((err) => {
    console.log(err);
})

// Task 3
const fetchData1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('fetched data 1')},2000)
})
const fetchData2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('fetched data 2')},2000)
})
const fetchData3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('fetched data 3')},2000)
})

fetchData1.then((result)=>{
    console.log(result);
    return fetchData2;
}).then((result)=>{
    console.log(result);
    return fetchData3;
}).then((result)=>{
    console.log(result);
})

// Task 4
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('async/await resolved after 2 seconds');
    },2000)
})
const asyncFunction = async () => {
    const result = await promise4;
    console.log(result);
}
asyncFunction();

// Task 5
const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('async/await rejected after 2 seconds');
    },2000)
})
const asyncFunction2 = async ()=>{
    try {
        const result = await promise5;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
asyncFunction2();

// Task 6
// fetch('https://api.publicapis.org/entries')
// .then((response)=>response.json())
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });
// fetch("https://api.publicapis.org/entries")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Task 7
// const fetchData = async () => {
//     try {
//         const response = (await fetch('https://api.publicapis.org/entries'))
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Task 8
// Promise.all([fetchData1,fetchData2,fetchData3]).then((result) => {
//     console.log(result);
// }).catch((err) => { 
//     console.log(err);
// });
const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("C"), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(values => console.log(values))
    .catch(error => console.error(error));

// Task 9
const promiseX = new Promise((resolve) => setTimeout(() => resolve("X"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Y"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Z"), 500));

Promise.race([promiseX, promiseY, promiseZ])
    .then(value => console.log(value))
    .catch(error => console.error(error));