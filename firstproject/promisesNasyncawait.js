// //PROMISES

// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const promisebringtickets=new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// })

// const getpopcorn=promisebringtickets.then((t)=>{
//     console.log('wife:i have the tickets')
//     console.log('husband:we should go in')
//     console.log('wife:no i am hungry!')
//     return new Promise((resolve,reject)=>{resolve(`${t} popcorn`)})
// })

// const getbutter=getpopcorn.then((t)=>{
//     console.log('husband:i have the popcorn')
//     console.log('husband:lets go in')
//     console.log('wife:i need butter on my popcorn')
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })

// const getColdDrink=getpopcorn.then((t)=>{
//     console.log('husband:i got the cold drink')
//     console.log('wife:oh thankyou now lets go and watch the movie')
//     console.log('yeah lets go!')
//     return new Promise((resolve,reject)=>resolve(`${t} cold Drink`))
// })

// getColdDrink.then((t)=>console.log(t))

// console.log('person4: shows ticket')
// console.log('person5: shows ticket')

// //------------------------------------------------------------------------------

// //ASYNC-FUNCTION
// //unlike other functions Async-function by itself returns promises
// //and we can use it like .then()

// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const preMovie=async ()=> { //async function expression because we are storing it in a variable

// const promisetickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('ticket'),3000)
// })

// const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'))
// const getColdDrink = new Promise((resolve,reject)=>resolve('popcorn'))

// let ticket=await promisetickets //(await promiseWifeBringingticks) --yahi bta dega jo return hua hai promise se

// console.log('wife:i have the tickets')
// console.log('husband:we should go in')
// console.log('wife:no i am hungry!')

// let popcorn=await getPopcorn

// console.log('husband:i have the popcorn')
// console.log('husband:lets go in')
// console.log('wife:i need butter on my popcorn')

// let coldDrink=await getColdDrink

// console.log('husband:i got the cold drink')
// console.log('wife:oh thankyou now lets go and watch the movie')
// console.log('yeah lets go!')


// return ticket
// }

// preMovie().then((m)=>console.log(`person3: shows ${m}`))

// console.log('person4: shows ticket')
// console.log('person5: shows ticket')

// //----------------------------------------------------------------------------------

// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const preMovie=async ()=> { //async function expression because we are storing it in a variable

// const promisetickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('ticket'),3000)
// })

// let ticket
// try{
//     ticket=await promisetickets
// }
// catch{
//     ticket='sad face'
// }

// return ticket;
// }

// preMovie().then((m)=>console.log(`person3: shows ${m}`))

// //-------------------------------------------------------------------------

// //PROMISE-ALL
// //irrespective of order sab parallally execute hongey or sabke execute hone k baad hi reflect hongey

// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const preMovie=async ()=> { //async function expression because we are storing it in a variable

// const promisetickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('ticket'),3000)
// })

// const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))

// const getbutter=new Promise((resolve,reject)=>resolve(`popcorn`))

// const getcoke=new Promise((resolve,reject)=>resolve(`popcorn`))

// let ticket=await promisetickets

// let [popcorn,butter,coke]=await Promise.all([getpopcorn,getbutter,getcoke])

// return ticket

// }

// preMovie().then((m)=>console.log(`person3: shows ${m}`))

//-------------------------------------------------------------------------------------------------------
//PROMISE.ALL

// const promise1= Promise.resolve('Hello World')
// const promise2=10
// const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'good-bye'))

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values))

//--------------------------------------------------------------------------------------------------------

//INTERVIEW
//await only works inside an async function
//async functions are only executed once all the synchronous tasks/functions are executed
//await doesnot work with setTimeout it only works with promises

//task is to print a b c d in order
// console.log('a')
// setTimeout(()=>{console.log('b')},1000)
// setTimeout(()=>{console.log('c')},0)
// console.log('d')

// async function printingInOrder(){
//     console.log('a')
//     const resultOfPrintingb = await new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve('b')},1000) //setTimeout k andar cnsole.log likhne mei setTimeout bas execute hoga par hume promise ka result chahiye
//     })
//     console.log(resultOfPrintingb)
    
//     const resultofPrintingc = await new Promise((res,rej)=>{ //await se jo mila usko store kar rahe hai ek variable mei
//         setTimeout(()=>{res('c')},0) //agar idhar resolve nahi kiye hote toh d kabhi print hi nahi hota
//     })
//     console.log(resultofPrintingc)

//     console.log('d')
// }

// printingInOrder()

//why promises are used in javascript?
// Promises are used to handle asynchronous operations in JavaScript. 
// They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// Why are async await better than promise.then design pattern?
// The biggest pro of async/await is that it's generally easier to read, it almost feels like you're writing regular synchronous code. 
// When you use promises, every function in the promise chain has its own scope. 
// And that makes it tricky if you need to pass a variable from one method of the chain to another.