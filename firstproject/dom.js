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

var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')


for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="#f4f4f4"
    even[i].style.backgroundColor="#ccc"
}

