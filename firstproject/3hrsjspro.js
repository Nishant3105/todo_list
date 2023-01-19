var form=document.querySelector('form')
var elecitems=document.getElementById('el-item-list')
var fooditems=document.getElementById('food-item-list')
var clothitems=document.getElementById('clothes-item-list')

form.addEventListener('submit',addItems)

function addItems(e){
    e.preventDefault()
    var price=document.getElementById('price').value
    var name=document.getElementById('name').value
    var category=document.getElementById('category').value

    let my_obj={
        price,
        name,
        category
    }

    axios.post('https://crudcrud.com/api/65b930a18f284c49a15383da23ccc42d/items',my_obj)
     .then(res=>{
        showOnScreen(res.data)
     })
     .catch(err=>console.log(err))

}

function showOnScreen(obj){
    if(obj.category == "electronics" ){
        let parentNode=document.getElementById("el-item-list")
        let childhtml=`<li id="${obj._id}">${obj.price} - ${obj.name} - ${obj.category}
                          <button onclick="deleteItem('${obj._id}','${obj.category}')">Delete</button>
                       </li>`
        parentNode.innerHTML = parentNode.innerHTML + childhtml
     }
     else if(obj.category == "food" ){
        let parentNode=document.getElementById("food-item-list")
        let childhtml=`<li>${obj.price} - ${obj.name} - ${obj.category}
                          <button onclick="deleteItem('${obj._id}','${obj.category}')">Delete</button>
                       </li>`
        parentNode.innerHTML = parentNode.innerHTML + childhtml
     }
     else if(obj.category == "clothes" ){
        let parentNode=document.getElementById("clothes-item-list")
        let childhtml=`<li>${obj.price} - ${obj.name} - ${obj.category}
                          <button onclick="deleteItem('${obj._id}','${obj.category}')">Delete</button>
                       </li>`
        parentNode.innerHTML = parentNode.innerHTML + childhtml 
     }
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/65b930a18f284c49a15383da23ccc42d/items')
    .then(res=>{
        for (var i = 0; i < res.data.length; i++) {
            showOnScreen(res.data[i])
        }
    })
    .catch(err=>console.log(err))
})

function deleteItem(id,cat){
    axios.delete(`https://crudcrud.com/api/65b930a18f284c49a15383da23ccc42d/items/${id}`)
     .then(res=>{
        removeFromScreen(id,cat)
     })
     .catch(err=>console.log(err))
}

function removeFromScreen(userId,cat){
    if(cat == "electronics"){
        var parentNode = document.getElementById('el-item-list')
    }
    else if(cat == "food"){
        var parentNode = document.getElementById('food-item-list')
    }
    else if(cat == "clothes"){
        var parentNode = document.getElementById('clothes-item-list')
    }
    const childNodetoDelete = document.getElementById(userId)
    console.log(childNodetoDelete)
    if (childNodetoDelete) {
        parentNode.removeChild(childNodetoDelete)
    }
}