//AXIOS GLOBALS 
axios.defaults.headers.common['X-Auth-Token'] = 'sometoken'

// GET REQUEST
function getTodos() {
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit: 5
    //     }
    // }) //yeh ek promise return karta hai
    //  //.then(res => console.log(res))
    //  //agar bas data chahiye toh console.log(res.data)
    //  .then(res => showOutput(res))
    //  .catch(err => console.log(err))

    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{timeout: 5})
        //.get('url',params{ _limit:5 }) aise bhi pass kar sakte hai
        .then(res => showOutput(res))
        .catch(err => console.log(err))
    //direct axios('url') se get ho jaata hai
}

// POST REQUEST
function addTodo() {
    //    axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     data: {
    //         title :'New post',
    //         completed : 'false'
    //     }
    // })
    // .then(res=>showOutput(res))
    // .catch(err=>console.log(err))
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New Todo',
        completed: false
    })
        .then(res => showOutput(res))
        .catch(err => cobsole.log(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
    // //put sabkuch replace kar deta hai generated user-id nhi aaegi 
    // axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    //     //url mei /id add karna hoga jis id ko update karna hai usko
    //     title: 'Updated Todo',
    //     completed: false
    // })
    // .then(res=>showOutput(res))
    // .catch(err=>cobsole.log(err))
    axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'updated todo',
        completed: false
    })
        .then(res => showOutput(res))
        .catch(err => cobsole.log(err))
}

// DELETE REQUEST
function removeTodo() {
    //api to api depend karta hai iss case mei bas empty obj dega
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => cobsole.log(err))
}

// SIMULTANEOUS DATA
function getData() {
    //axios.all array mei hi leta hai 
    axios
        .all([
            axios.get('https://jsonplaceholder.typicode.com/todos'),
            axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        ])
        .then(axios.spread((todos, posts) => showOutput(posts)))
        .catch(err => console.log(err))
}

// CUSTOM HEADERS
function customHeaders() {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'sometoken'
        }
    }
    axios
        .post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                title: 'New Todo',
                completed: false
            },
            config
        )
        .then(res => showOutput(res))
        .catch(err => console.error(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title:'Hello World'
        },
        //axios.defaults.transformResponse.concat yeh override nahi krta default leta hai 
        //aur usi mei changes krta hai
        transformResponse: axios.defaults.transformResponse.concat(data =>{
            data.title = data.title.toUpperCase()
            return data
        })
    }
        
    axios(options).then(res=>showOutput(res))
    
}


// ERROR HANDLING
function errorHandling() {
    axios 
    .get('https://jsonplaceholder.typicode.com/todoss',
    {validateStatus: function(status){
        return status < 500;
    }
    }) //reject only if status is greater than or equal to 500
    .then(res => showOutput(res))
    .catch(err => {
        if(err.response){
            // Server responded with a status other than 200 range
            //200 is for success
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)

            if(err.response.status === 404){
                alert('Error:Page Not Found')
            } else if(err.request){
                // Request was made but no response
                console.error(err.request)
            } else{
                console.error(err,message)
            }
        }
    })
}

// CANCEL TOKEN
function cancelToken() {
    const source = axios.CancelToken.source()

    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{
        cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown =>{
        if(axios.isCancel(thrown)){
            console.log('Request canceled', thrown.message)
        }
    })

    if(true){
        source.cancel('Request canceled:')
    }

}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
    config => {
        console.log(
            `${config.method.toUpperCase()} request sent to ${config.url
            } at ${new Date().getTime()}`
        )

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// AXIOS INSTANCES
const axiosInstance = axios.create({
    //we can also add other custom settings as well
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.post('/comments').then(res => showOutput(res))

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);


//--------------------------------------------------

//Why headers are important?
// The HTTP headers are used to pass additional information between the clients 
// and the server through the request and response header. All the headers are 
// case-insensitive, headers fields are separated by colon, key-value pairs in clear-text
//  string format. The end of the header section denoted by an empty field header.

//Things that are sent many times can be sent in the header like content-type: application/json
//When we start grtting errors with crud crud check url,method type,body or payload.

//------------------------------------------
//what is the difference between request headers and response headers?
// Request Header: This type of headers contains information about the fetched request by the client.
// Response Header: This type of headers contains the location of the source that has been requested by the client.

//----------------------------------------------

//what is axios?
//Axios is a promise-based HTTP client that works both in the browser and in a Node.js environment. It provides a single API
//for dealing with XMLHttpRequests and node’s http interface. Besides that, it wraps the requests using a polyfill for ES6 
//new’s promise syntax. Almost any dynamic project you make needs to interface with a RESTFUL API at some point and using Axios 
//is a simple way to do so.
//axios is just a tool to communicate from front-end to server.
//it is used for network calls
//--------------------------------------------

//what are the common problems faced when yoi make netwoek calls and
//what should you do to solve it?
//---url incorrectly chosen
//url consists of two components base url + route
//base url==== flipkart.com
//route====== /getProducts

//to copy the payload text click on view source
