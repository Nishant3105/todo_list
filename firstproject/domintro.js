console.log(window)
alert(123)
//const ul=document.querySelector('.items')
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText ='brad';
//ul.lastElementChild.innerHTML ='color:blue';

btn = document.querySelector("button");
const nameInput = document.querySelector('#name');

form.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    console.log(nameInput.value)
});
form.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    console.log(nameInput.value)
});

function onSubmit(e) {
    e.preventDefault();

}

var items=document.getElementsByClassName('list')
items[1].innerContent='brad';
items[1].style.backgroundColor='Yellow';
for(var i=0;i<items.length;i++){
    items[i].style.backgroundcolor = '#000000'
}
