var forms=document.getElementById('addform')
var itemList=document.getElementById('items')

forms.addEventListener('submit',addItems)
itemList.addEventListener('click',removeItems)


function savetolocalstorage(event){
    event.preventDefault()
    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
    let my_obj={
      name:name,
      email:email
    }
    localStorage.setItem(my_obj.email,JSON.stringify(my_obj))

}

function addItems(event){
    event.preventDefault()
    console.log('inside add items')
    var input1=document.getElementById('name').value
    var input2=document.getElementById('email').value
    var items=document.getElementById('items')
    
    var li=document.createElement('li')
    var btn1=document.createElement('button')
    var btn2=document.createElement('button')
    btn1.appendChild(document.createTextNode('edit'))
    btn2.appendChild(document.createTextNode('delete'))

    btn1.className="btn btn-danger btn-sm delete"
    btn2.className="btn btn-success btn-sm edit"
    
    li.appendChild(document.createTextNode(input1+" "+input2))
    li.appendChild(btn1)
    li.appendChild(btn2)
    console.log(li)

    items.appendChild(li)
    console.log(items)

}

function removeItems(event){
    event.preventDefault();
    if(event.target.classList.contains('delete') || event.target.classList.contains('edit')){
        if(confirm('Are You Sure?')){
          var li = event.target.parentElement;
          itemList.removeChild(li);
        }
    }
}