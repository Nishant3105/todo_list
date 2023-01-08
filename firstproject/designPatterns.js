//use of 'this' and use of static

// class Student{
//     static count=0; //imp
//     constructor(name,age,phone,marks){
//         this.name=name
//         this.age=age
//         this.phone=phone
//         this.marks=marks
//         Student.count=Student.count+1; //imp
//     }
        
//         eligible()
//         {
//             if(this.marks>40){
//             return (`${this.name} is eligible`)
//             }
//             else{
//             return (`${this.name} is not eligible`)
//             }
//         }
// }
//   var student1=new Student('akhil',18,'44455',45)
//   console.log(student1.count);
//   var student2=new Student('deep',21,'34566',68)
//   var student3=new Student('sid',34,'2456',89)
//   var student4=new Student('daksh',24,'2357',98)
//   var student4=new Student('laksh',27,'32446',76)
//   console.log(Student.count) //imp

//FAT ARROW FUNCTION
//function statement
// var getA=function (a){
//     return a;
// }
// console.log(getA(1))

//fat arrow function
// var squareA=(a)=>{return a*a}
// console.log(squareA(2))

// let mult=(a,b)=>{return a*b}
// console.log(mult(2,3))

// var x=function(){
//     this.val=1;
//     setTimeout(()=>{
//         this.val++
//         console.log(this.val)
//     },1)
// }
// var xx=new x()



// class Student{
//     static count=0; //imp
//     constructor(name,age,phone,marks){
//         this.name=name
//         this.age=age
//         this.phone=phone
//         this.marks=marks
//         Student.count=Student.count+1; //imp
//     }
        
//         eligible(minPlacementMarks)
//         {
//             //normal function use krne pe undefined aa jaata this ka value function ke andar
//             return  (minPlacementAge)=>{
//                     if(this.marks>minPlacementMarks && this.age>minPlacementAge){
//                     console.log(`${this.name} is eligible`) 
//                     }
//                     else
//                     {
//                         console.log(`${this.name} is not eligible`)
//                     }
//             }
              
//         }
// }

// let student1=new Student('akhil',23,'3446',39) 
// //function ke andar wale function ko call karne k liye obj.func1(param1).func2(param2) ya fir direct obj.func1(param1)(param2)
// student1.eligible(40)(18)




