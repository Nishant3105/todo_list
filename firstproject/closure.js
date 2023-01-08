// function x() {
//    let a = 10;
//    function y() {

//         console.log(a);
//     }
//     y()
// }
// x();


//return function invoke karne pe function body execute hota hai
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y(); 
// }
// x();

//return function pe function return hota hai
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
// }
// console.log( x());


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
// }

// const z = x()
// console.log(z());


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     a= 50;
//     return y;
// }
// const z = x() 
// //pehle y invoke hoga toh console.log(a) ho jaega
// //y kuch return nhi kar rha isliye undefined console.log hoga
// console.log(z());

//-----------------------------------------
// let count=0
// const name = (arr)=>{

//     return ()=>{
//     console.log("Hello " ,arr[count])
//     count++}
   
// }

// let fun = name(["Ram","Shyam"]);

// fun()// Print Hello Ram

// fun()//print Hello Shyam



