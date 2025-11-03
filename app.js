/*const http = require("node:http"); //simplified ("http") to access http functionalities

//Create a local server from the package with server method CreateServer(uses another function as a parameter).
        //  req, res, and next are the three parameters of CreateServer but req and res are necessary:
        //80 port not secure, change 800 to 300:

function handleRequests(req, res){
    res.statusCode = 200  //server to send back an HTTP status code of 200 OK
    res.end("<h1> Hello, this is working! :) </h1>") //Writes the content ("<h1></h1>") to the response body,and ends the response, meaning no more data will be sent.
}

const server = http.createServer(handleRequests);

server.listen(3000);

/*
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(3000);
*/

//let my_name = "Philippe";
//console.log(my_name);


//content of a request res is an object call req:

/*
req = {
  // HTTP method and URL
  method: "POST",
  url: "/register",
  originalUrl: "/register",

  // HTTP headers (metadata)
  headers: {
    host: "localhost:3000",
    "content-type": "application/x-www-form-urlencoded", // or "application/json" if JSON
    "user-agent": "Mozilla/5.0",
    // ...other headers
  },

  // Query parameters from URL (if any)
  query: {
    // e.g., /register?ref=123
    ref: "123"
  },

  // The parsed body of the request (form inputs or JSON)
  body: {
    username: "Philippe",
    password: "1234"
  },

  // Cookies (if any)
  cookies: {
    // e.g., session_id: "abc123"
  },

  // Route parameters (if URL had variables like /user/:id)
  params: {
    // e.g., id: "42"
  },

  // Other Express/request properties
  protocol: "http",
  ip: "127.0.0.1",
  path: "/register",
  get: function(headerName) {// returns value of header},
  // ...many other properties
};
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express') //const http = require('http')
const fs = require('fs') // importing the file system package
const path = require('path')

const app = express() // const sever = http.createServer()

app.use(express.urlencoded({extended:false}))

// URL: / - /currenttime - /about

app.get('/currenttime', (req,res) => {
    res.send('<h1>'+new Date().toISOString()+'</h1>') //res.end()
})

app.get('/', (req,res) =>{
    res.send('<form action="/store-user" method="POST"><label>Username : </label><input type="text" name="username"><button>Submit</button></form>')
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//POST method to store data in a JSON file:
app.post('/store-user', function (req,res){
    const username = req.body.username
    console.log(username)

    const filePath = path.join(__dirname,'data','users.json')
    console.log(filePath)
    const fileData = fs.readFileSync(filePath)
    const users = JSON.parse(fileData)
    console.log(users)

    users.push(username)
    fs.writeFileSync(filePath,JSON.stringify(users))

    res.send("<h1>User Added!</h1>")
})

//GET method to fetch data from a JSON file:
app.get('/users',function(req,res){
    const filePath = path.join(__dirname,'data','users.json')

    const fileData = fs.readFileSync(filePath)
    const users = JSON.parse(fileData)

    console.log(users)

    let result = '<ul>'
    for(const user of users){
        result += '<li>' + user +'</li>'
    }
    result +='</ul>'

    res.send(result)
})


app.listen(3000) // server.listen(3000)