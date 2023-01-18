let form = document.querySelector('form')
let items = document.getElementById('itemList')

form.addEventListener('submit', addItems)

let editingUserId=null
function addItems(e) {
    e.preventDefault()
    

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    
    let my_obj = {
        name,
        email
    }
    
    if (editingUserId === null) {
        axios.post('https://crudcrud.com/api/683ccd8d096f44ec9cd409ef91b3373f/formdata', my_obj)
        .then((response) => {
            console.log(response.data);
            showOnScreen(response.data)
        })
        .catch((err) => console.log(err))
    } else {
        axios.put(`https://crudcrud.com/api/683ccd8d096f44ec9cd409ef91b3373f/formdata/${editingUserId}`, my_obj)
        editingUserId = null;
    }
    
}



function showOnScreen(data) {
    const parentNode = document.getElementById('itemList')
    const childNode = `<li id='${data._id}'> ${data.name} - ${data.email}
                              <button onclick="deleteUser('${data._id}')"> Delete </button>
                              <button onclick="editUser('${data._id}','${data.name}','${data.email}')"> Edit </button>
                           </li>`
    parentNode.innerHTML = parentNode.innerHTML + childNode

}


window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/683ccd8d096f44ec9cd409ef91b3373f/formdata')
        .then(response => {
            console.log(response)

            for (var i = 0; i < response.data.length; i++) {
                showOnScreen(response.data[i])
            }
        })
        .catch(err => console.log(err))
})

function deleteUser(userId) {
    axios.delete(`https://crudcrud.com/api/683ccd8d096f44ec9cd409ef91b3373f/formdata/${userId}`)
        .then((response) => {
            console.log('delete done')
            removeFromScreen(userId)
        })
        .catch((err) => {
            console.log(err)
        })
}


function removeFromScreen(userId) {
    const parentNode = document.getElementById('itemList')
    const childNodetoDelete = document.getElementById(userId)
    if (childNodetoDelete) {
        parentNode.removeChild(childNodetoDelete)
    }
}


function editUser(id,name,email) {
    editingUserId=id;
    document.getElementById('name').value=name
    document.getElementById('email').value=email
    
    //addItems(editingUserId)
    
}











// let editingUserId = null;

// addFunction() {
//   // extract values from inputs

//   if (editingUserId === null) {
//     axios.post()
//   } else {
//     axios.put(`crudcrudUrl/${editingUserId}`, data)
//     editingUserId = null;
//   }
// }

// function editFunction(id, name, email) {
//   // set input values
//   editingUserId = id;
// }



