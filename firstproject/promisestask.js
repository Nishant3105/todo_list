const posts = [
    { title: "post one", body: "This is post one", createdAt: new Date().getTime() },
    { title: "post two", body: "This is post two", createdAt: new Date().getTime() }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() })

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: There is something wrong")
            }
        }, 2000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //posts.pop()

            const error = false;
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject("Error:Something went wrong")
            }
        }, 1000)
    })
}

// function userupdates(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.createdAt=new Date().getTime();
//             resolve(posts.createdAt)
//         },1000)
//     })
// }

// function userupdatespost(){
//     Promise.all([createPost,userupdates])
//     .then(([createPostresolves,userupdatesresolves])=>{
//         console.log(userupdatesresolves)
//     })
// }

//----------------------------------------------------------------------------------------------

createPost({ title: 'post three', body: 'this is post three' })
    .then(getPosts)
    .catch(err => console.log(err))

// createPost({ title:'post four' ,body:'this is post four'})
// .then(()=>{
//     getPosts()
//     deletePost().then(()=>{
//         getPosts()
//         deletePost().then(()=>{
//             getPosts()
//             deletePost().then(()=>{
//                 getPosts()
//                 deletePost().then(()=>{
//                     getPosts()
//                     deletePost().then(()=>{})
//                     .catch((err)=>{console.log('inside catch block',err)})
//                 }).catch((err)=>{console.log('inside catch block',err)})
//             }).catch((err)=>{console.log('inside catch block',err)})
//         }).catch((err)=>{console.log('inside catch block',err)})
//     }).catch((err)=>{console.log('inside catch block',err)})
// }).catch((err)=>{console.log('inside catch block',err)})

//------------------------------------------------------------------------------------------

//doing same thing with async await

async function init() {
    try{
        await createPost({ title: 'post four', body: 'this is post four' })

        await getPosts()

        await deletePost()

        await getPosts()

        await deletePost()

        await getPosts()

        await deletePost()

        await getPosts()

        await deletePost()

        await getPosts()

        await deletePost()
    }

    catch(err) {
            console.log(err)
    }


    //try{
    //}
    //catch(err){
    //} se uncaught nahi aaega console mei
};

init()

