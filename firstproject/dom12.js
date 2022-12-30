function savetolocalstorage(event){
    event.preventDefault();
    let user=document.getElementById('username').value
    let emailId=document.getElementById('emailid').value
    let phone=document.getElementById('phoneNumber').value
    let my_obj={
      name:user,
      email:emailId,
      tel:phone
    }
    localStorage.setItem(my_obj.email,JSON.stringify(my_obj))
}