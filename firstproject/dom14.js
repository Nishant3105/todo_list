
function savetolocalstorage(event){
    event.preventDefault()
    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
    let my_obj={
      name:name,
      email:email
    }
    localStorage.setItem(my_obj.email,JSON.stringify(my_obj))
    addItems(event);

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

    btn1.className="btn btn-success btn-sm edit"
    btn2.className="btn btn-danger btn-sm delete"
    li.className='${input2}';
    
    li.appendChild(document.createTextNode(input1+" "+input2))
    li.appendChild(btn1)
    li.appendChild(btn2)

    items.appendChild(li)

    let my_obj={
        name:input1,
        email:input2
    }
    localStorage.setItem(my_obj.email,JSON.stringify(my_obj))
    btn1.onclick=() =>{
        localStorage.removeItem(my_obj.email)
        itemList.removeChild(li)
        document.getElementById('name').value=input1
        document.getElementById('email').value=input2

    }
    btn2.onclick=() =>{
        localStorage.removeItem(my_obj.email)
        itemList.removeChild(li);
    }
    
}

