



//------------------------------------------------------------------
//html mei head par script file attach krne mei addeventlistener pe typeerror aata hai
//body k neeche karna chahiye





console.dir(document)
console.log(document.URL)
console.log(document.title)
console.log(document.forms)
var headerTitle=document.getElementById('header-title')
headerTitle.style.borderBottom='Solid 3px #000'
console.log(headerTitle)

// getElementsByClassName //

//var list=document.getElementsByClassName("list-group-item")
//console.log(list)
//list[0].style.backgroundColor="green";
//for(var i=1;i<list.length;i++){
//   list[i].style.fontWeight="bold";
//}

//item.style.backgroundColor='blue' nahi hoga qki html collection hai ye
//for loop se hoga


// getElementsByTagName() //

// var li=document.getElementsByTagName('li')
// li[1].textContent='hello';
// li[2].style.backgroundColor='green'
// for(var i=0;i<li.length;i++){
//    li[i].style.fontWeight='bold';
// }

// querySelector() //

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc'

// var input=document.querySelector('input')
// input.value='Hello  World'

// var input=document.querySelector('input[type="submit"]')
// input.value='send' 

//  var li=document.querySelector('.list-group-item')
//  li.style.color='red' 

//  var lastli=document.querySelector('.list-group-item:last-child')
//  lastli.style.color='blue'

//  var secondli=document.querySelector('.list-group-items:nth-child(2)')
//  secondli.style.color='brown'

//querySelectorAll()
//  var titles=document.querySelectorAll('.title')
//  titles[0].textContent='hello'

// var odd=document.querySelectorAll('li:nth-child(odd)')
// var even=document.querySelectorAll('li:nth-child(even)')


// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="#f4f4f4"
//     even[i].style.backgroundColor="#ccc"
// }

// queryselector&queryselectorAll task
// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='green'

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility='hidden'

var parentElement=document.querySelector('.list-group-item').parentElement
console.log(parentElement)

//nextElementSibling
// let current = document.querySelector('.list-group-item');
// let nextSibling = current.nextElementSibling;

// while(nextSibling) {
//     console.log(nextSibling);
//     nextSibling = nextSibling.nextElementSibling;
// }

// let current1 = document.querySelector('.list-group-item1')
// let prevSibling = current1.previousElementSibling

// while(prevSibling){
//     console.log(prevSibling)
//     prevSibling=current1.previousElementSibling
// }

//Traversing the DOM
//parentNode
var itemList=document.querySelector('#items')
//console.log(itemList.parentNode)
//itemList.parentNode.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentNode.parentNode)

//parentNode and parentElement for the most pats can be interchangable.

//childNodes
//console.log(itemList.childNodes)
//childNodes mei line breaks ko text k thru dikhaya jaata hai isliye recommended nahi hai

 //children
//  console.log(itemList.children)
//  console.log(itemList.children[1])
//  itemList.children[1].style.backgroundColor='yellow'

//firstChild bhi text ko count karta hai isliye recommended nahi hai

//firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello 1'

//similarly lastChild aur lastElementChild(rec.) hai

//similary nextSibling aur nextElementSibling(rec.)

//similarly previousSibling aur previousSibling(rec.)

//Create a div
var newDiv=document.createElement('div')

//add class
newDiv.className='hello';

//add id
newDiv.id='hello1'

//Add attribute
newDiv.setAttribute('title','Hello Div')

//Create text node
var newDivText=document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText)

// //Add div to HTML just below div=container
// var container=document.querySelector('header .container')
// var h1=document.querySelector('header h1')

// newDiv.style.fontSize='30px'

// container.insertBefore(newDiv,h1)

// console.log(newDiv)

//--------------------------------------------