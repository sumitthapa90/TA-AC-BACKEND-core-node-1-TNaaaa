// 1. create a basic server and listen on port 3000
// 2. write code to console
//   - request headers
//   - request method and url
// 3. request from browser on `http://localhost:3000/about`

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(request, response) {
  console.log(request.method);
  response.end("Welcome Node.js");
}
server.listen(3000, () => {
  console.log("server lisiting on port 3000");
});

