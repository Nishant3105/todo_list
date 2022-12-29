
function savetolocalstorage(event){
    event.preventDefault();
    console.log(1)
    var username=document.getElementById('name')
    var emailid=document.getElementById('emailid')
    var phoneNumber=document.getElementById('phoneNumber')
    const name=event.target.username.value
    const email=event.target.emailid.value
    const phone=event.target.phoneNumber.value
    localStorage.setItem('name',JSON.stringify(name))
    localStorage.setItem('email',JSON.stringify(email))
    localStorage.setItem('phone',JSON.stringify(phone))
}   
