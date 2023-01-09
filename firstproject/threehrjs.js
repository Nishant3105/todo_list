var itemList = document.getElementById("itemList")
var form = document.querySelector("form")
var price = document.getElementById('price').value
var sel = document.getElementById("sel").value
var name = document.getElementById("name").value

form.addEventListener("submit", additem);

function additem(event) {
    event.preventDefault();
    var price = document.getElementById('price').value
    var sel = document.getElementById("sel").value
    var name = document.getElementById("name").value

    let obj = {
        price,
        sel,
        name
    }

    localStorage.setItem(name, JSON.stringify(obj))

    var li = document.createElement('li')
    li.append(document.createTextNode(price + " " + sel + " " + name))
    var btn1 = document.createElement('button')
    btn1.className='btn1'
    btn1.append(document.createTextNode("delete"))
    var btn2 = document.createElement('button')
    btn2.className='btn2'
    btn2.append(document.createTextNode("edit"))
    li.append(btn1)
    li.append(btn2)
    itemList.append(li)

    btn1.addEventListener("click", removeItem);
    btn2.addEventListener("click", edititem);
}

function removeItem(event) {
    console.log(1)
    if (event.target.classList.contains('btn1')) {
        if (confirm('Are You Sure?')) {
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function edititem(event) {
    console.log(2)
    var price = document.getElementById('price').value
    var sel = document.getElementById("sel").value
    var name = document.getElementById("name").value
    if (event.target.classList.contains('btn2')) {
        document.getElementById('price').value = price
        document.getElementById("sel").value = sel
        document.getElementById("name").value = price
    }

}


