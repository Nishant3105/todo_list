let b=2
//by doing this we can get the value of b using "filter" in console
console.log('aaaa',b)

let x=1
let y=1
//similarly we can do this for x and y
console.log('x =',x,'y =',y)

//----------------------------------

let a=[1,2,3]
//by doing this,we'll get the correct value of a at this point of time
console.log(JSON.parse(JSON.parse(JSON.stringify(a))))

a.push(4)
//by doing this,we'll get the correct value of a at this point of time
console.log(JSON.parse(JSON.parse(JSON.stringify(a))))

//-----------------------------------

const f=function(){

}

f.prototype.add=function(){

}
//console.log will only show the value
console.log('f =',f)

//console.dir will show its prototype and console.dir takes only 1 parameter
console.dir(f)

//--------------------------------------

//if large data is present and we want to see few properties for all the data then we can use
console.table(a, ['age','eyecolor'])
//and this will return the age and eyecolor in form of a table

//---------------------------------------

//it will return the correct time of the same value 'st' after setTimeout
console.time('st')
setTimeout(() =>{
    console.timeEnd('st')
},5000);

//--------------------------------------- 

let m=3
let n=4
// this stops the execution at that particular line
debugger;

//------------------------------------------

//we can open any file and then on clicking {} at the bottom pretty print we can put stoppers
