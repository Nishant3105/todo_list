// let user=document.getElementById('username')
// let emailId=document.getElementById('emailId')
// let phone=document.getElementById('phoneNumber')
// let my_obj={
//       name:user.value,
//       email:emailId.value,
//       tel:phone.value
// }
function savetolocalstorage(event){
    event.preventDefault();
    console.log(12)
    let user=document.getElementById('username').value
    let emailId=document.getElementById('emailid').value
    let phone=document.getElementById('phoneNumber').value
    let my_obj={
      name:user,
      email:emailId,
      tel:phone
    }
    localStorage.setItem('my-obj',JSON.stringify(my_obj))
}