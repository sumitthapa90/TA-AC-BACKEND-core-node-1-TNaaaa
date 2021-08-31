// 1. create a server on port 4444 and request from browser on `localhost:4444`
// 2. Add statusCode of 201 and headers to send html content to response
// 3. Do request on server using **different HTTP methods** using **Postman** and write code to check request methods for multiple requests.

var http = require("http");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method);
  res.statusCode = 201;
  res.setHeader("./Content-Type", "text/html");
  res.end("<h1>Welcom Alt Campus</h1>");
}
server.listen(4444, () => {
  console.log("Server listing on port 4444");
});
