const posts=[
    { title:"post one", body:"This is post one"},
    { title:"post two", body:"This is post two"}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
        output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        posts.push(post)

        const error=false;
        if(!error){
          resolve();
        } else{
            reject("Error: There is something wrong")
        }
       },2000)
    })
}

createPost({ title:'postthree' ,body:'this is post three'})
.then(getPosts)
.catch(err => console.log(err))