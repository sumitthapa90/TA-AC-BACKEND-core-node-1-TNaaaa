// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(res, req);
}

server.listen(5000, () => {
  console.log("Server listin to port 5000");
});

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("My first server in NodeJS");
}
server.listen(5100, () => {
  console.log("Server listin at port 5100");
});

// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.headers);
  res.end(req.headers["user-agent"]);
}

server.listen(5555, () => {
  console.log("Server listin at port 5555");
});

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method, req.url);
  res.end("Hello my name is sumit");
}

server.listen(5566, () => {
  console.log("Server listin at port 5566 ");
});

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.headers);
  res.end("Welcome Node");
}

server.listen(7000, () => {
  console.log("server listening on port 7000");
});

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.statusCode = 202;
  res.end("Yes i am learing");
}

server.listen(3333, () => {
  console.log("server listening on port 3333");
});

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end("<h3>Welcome to altcampus</h3>");
}

server.listen(8000, () => {
  console.log("server listening on port 8000");
});

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.setHeader("./Content-Type", "application/json");
  res.end(
    JSON.stringify({
      sucess: true,
      message: "Welcome to Node.js",
    })
  );
}

server.listen(8000, () => {
  console.log("server listening on port 8888");
});

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method);
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h2>posted for first time</h2>");
}
server.listen(5050, () => {
  console.log("server listening on port 5050");
});

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "./") {
    res.setHeader("Content-Type", "text/plain");
    res.end("sumit");
  } else if (req.method === "GET" && req.url === "./about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2> Sumit</h2>");
  } else {
    res.statusCode = 404;
    res.end("<h2> page not found </h2>");
  }
}
server.listen(2345, () => {
  console.log("server listening on port 2345");
});
// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params
