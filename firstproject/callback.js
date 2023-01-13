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

function createPost(post, callback){ //callback k wajeh se dom mei pehle output print nhi hoga 
     setTimeout(()=>{
        posts.push(post);//pehle push hoga
        callback();//fir print hoga
     },2000);
}

createPost({title: 'post three',body:'this is post three'},getPosts) //getPosts callback function hai yaha

getPosts();
