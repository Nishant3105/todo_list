// obj={
//     key1: "value1",
//     key2: "value2",
//     key3: "value3"
// }

// //it will return an array of object keys
// console.log(Object.keys(obj))

// //this way we can traverse the values
// var arrofkeys=Object.keys(obj);
// arrofkeys.forEach(key=>{
//     console.log(obj[key])
// })

// //we can also do it this way
// Object.keys(obj).forEach(key=>{
//     console.log(obj[key])
// })

//to print the keys of an object
// console.log(Object.keys(obj))

//to print the values of an object
// console.log(Object.values(obj))

//---------------------------------------------------------------------------------------------------------
// let obj2=obj //aise karne se dono object ki value same ho jaegi qki obj ka reference obj2 ban gya
// obj2['key3']="valuethree" 
// obj[1]="valueone" //isse new key-value pair add ho jaega starting mei
// //ek mei changes dono mei reflect karengey qki ek hi reference hai
// console.log(obj)
// console.log(obj2)

//-------better option hai----------------------------------------------------------------------------------
// let obj2={...obj}//SPREAD OPERATOR
// obj2.key2='value21';
// console.log(obj2)
// console.log(obj)

//-----same aise bhi kar sakte hai
// ek update kar deta hai value or ek naya object bana deta hai
// let obj2={...obj,key2:'value21'} //obj2.key2='value21' same chizz ho jaega
// console.log(obj2)
// console.log(obj)

//_________________________________________________________________
// let a=[1,2]
// let b=[3,4]
// let c=[...a, ...b] //dono array ka union mil jaega
// console.log(c)
// let d=[...c, {d:3}, {obj}] //issey kuch bhi add ho jaega
// console.log(d)