//DIFFERENCE BETWEEN FOREACH AND MAP()
//The map() method returns an entirely new array with transformed elements and the same amount of data.
//In the case of forEach(), even if it returns undefined, it will mutate the original array with the callback.
//Therefore, we see clearly that map() relies on immutability and forEach() is a mutator method.



// var arr = [1, 2,3,5]

// var newArr = arr.forEach((item, i ) => {

// console.log(item + 'index' + i)

// return item + i

// })

//----------------------------------------------------------------------------------------------------------

//A block mean compound statements it groups many statements into a block.
//If expects a single statement but we can use multiple statements inside the if block
// var is always in the global scope 
// let and const are block scoped.

/*{
} things inside these are in block let and const are accessible only in this block,thus they are block scoped. */

/*
{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a) hum bas a hi print kar paengey qki wo var hai or var global scope mei hota hai b or c mei reference error aaega
console.log(b)
console.log(c)
 */

//

//---------------------------------------------------------

// function fun1(){

// 	console.log('a')

// 	return () => {

// 		console.log('b')

// }}

// fun1()()


//----------------------------------------------------------


// function fun1(){

// 	var a = 10

// 	return () => {

// 		a = 20;

// 		console.log(a)

// }}

//fun1()()

//------------------------------------------------------

// function fun1(a){

// 	return () => {

// 		a = a + 20;

// 		console.log(a)

// }}

// fun1(10)(20)

//-----------------------------------------------------

// function fun1(a){

//     return (b) => {

//     a = a + b;

//     console.log(a)

//     }}



//     fun1(10)(30)

//-------------------------------------------------------

// function fun1(a){

//     const fun2  = (b) => {

//     a=a+b

//    console.log(a)

//    }}



//    fun1(10)(20)

//----------------------------------------------------------


//SPREAD OPERATORS

// let obj1={
//     key1:'value1',
//     key2:'value2'
// }
// let obj2={...obj1, key2:'valuetwo',key4:'value4'}

// console.log(obj1,obj2)

// let arr1=[1,2,3,4]
// let arr2=[2,4,6,8]
// let arr3=[...arr1,...arr2,{d:3},{...obj1}]

// console.log(arr3)

//-------------------------------------------------------------

// let studentObj = {

//     'yash': 26,

//     'vaibhav': 24,

//     'rajesh' : 25,

// }
// let arrKeys=Object.keys(studentObj)
// function searchAge(obj,age){
//     let ans=""
//    arrKeys.forEach((key)=>{
//       if(obj[key]===age){
//         ans=key;
//       }
//       else{
//         ans=-1
//       }
//    })
//    return ans
// }

// console.log(searchAge(studentObj,20))

// function findaverageage(studentObj){

//     let count=0
//     let sum=0
//     let arrKeys=Object.keys(studentObj)

//     console.log(arrKeys)

//     arrKeys.forEach((stu)=>{

//         sum+=studentObj[stu]
//         count++;
//     })
//     let ave=sum/count

//     return ave;

// }

// console.log(findaverageage(studentObj))

//--------------------------------------------------------------

// index = 0;
//     array = [ 1, 2, 3, 4, 5, 6 ];

//     array.forEach(myFunction);
//     function myFunction(item,index)
//     {
//         console.log(item,index);
//     }

//------------------------------------------------------------

//index = 0;
// array = [ 1, 2, 3, 4, 5, 6 ];
// square = x => Math.pow(x, 2);
// console.log(square(3))
// squares = array.map(square);
// console.log(array);
// console.log(squares);

//----------------------------------------------------------

// array = [ 1, 2, 3, 4, 5, 6 ];

//     even = x => x%2 === 0;
//     evens = array.filter(even);
//     console.log(array);
//     console.log(evens);

//------------------------------------------------------------------

// this in js
// let UserDetails={
//    name:"nishant",
//    age:34,
//    printName(){
//       console.log(this.name,1)
//       var printAge=()=>{
//         console.log(this.age,2);
//       }
//       function printNaam(){
//         console.log(this.name,3)
//       }
//        printAge()
//        printNaam()
//    },

// } 

// UserDetails.printName()

//-----------------------------------------------

// var student = function(name){

//     this.name = name;

//     var printName1 = () => {

//       console.log(this.name,1)

//     }
//        function printName2() {

//            console.log(this.name,2)

//         }

//     printName1()

//     printName2()

//   }

//   var yash = new student("yash")

//-----------------------------------------------

//   var student = function(name){

//     this.name = name;

//     function printName1() {
//       console.log(this.name)

//     }
//     var printName2 = () => {

//        console.log(this.name,1)

//     }

//      printName1()
//      printName2()

//   }

//   var yash = new student("yash")

//---------------------------------------------------------------------

// var fun = a => a

// console.log(fun(a))

// var a =10;

//--------------------------------------------

// var fun = a =>{a}  

// var a =10;

// console.log(fun(a))

//---------------------------------------------------

// let count=0

// const name = (arr)=>{

//    return ()=>{
//    console.log("Hello " ,arr[count])
//    count++}

// }

// let fun = name(["Ram","Shyam","jkl","thynj"]);

// fun()// Print Hello Ram
// fun()//print Hello Shyam
// fun()
// fun()

//-------------------------------------------

// function a(){
//     console.log('inside a');
// }

// var b = function abc(){
//     console.log('inside b');
// }
//     a()
//     abc()

//-----------------------------------------------



// const users=[
//     {firstName:'deep',lastName:'sun',age:26},
//     {firstName:'abhi',lastName:'shek',age:75},
//     {firstName:'rajesh',lastName:'singh',age:17},
//     {firstName:'shyam',lastName:'sundar',age:26}
// ]

// const names=users.filter((x) => x.age%2===0 ).map((x) => x.firstName + " "+x.lastName)


// const output=users.reduce((acc,curr)=>{
//     if(curr.age>18){
//         acc.push(curr.firstName)
//     }
//     return acc
// },[])
// console.log(output)

/*1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the arrar to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself)
    and another initial value of accumulator. */

//-----------------------------------------------------------------------





