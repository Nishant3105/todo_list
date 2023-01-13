const posts=[
    {title:'post1',body:'this is post1',CreatedAt:new Date().getTime()},
    {title:'post2',body:'this is post2',CreatedAt:new Date().getTime()}
]

let intervalId=0 //bahar declare karne mei update hota hai
function getPosts(){
    clearInterval(intervalId); //har settimeout ka ek ID hota hai..usko clear karna chahiye nahi toh wo memory leakage karega
    intervalId =  setTimeout(()=>{
        let output=''
        posts.forEach((post)=>{
            output+=`<li>${post.title} updated ${((new Date().getTime() - post.CreatedAt)/1000)} seconds ago</li>`
            
        })
        document.body.innerHTML=output
    },1000)
}

function createPost(post,callBack){
   setTimeout(()=>{
     posts.push({...post, CreatedAt:new Date().getTime()})
     callBack()
   },2000)
}

createPost({title:'post3',body:'this is post3'},getPosts)
getPosts()