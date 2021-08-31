// Create a basic http server which is listening on port 5k

// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
// 2. handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.
// 3. handle POST request on '/about' and send json response `{message: this is a post request}`.

var http = require("http");

let server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "./") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "./about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "./about") {
    res.end(`{message: this is a post request}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page not Found");
  }
}

server.listen(5000, () => {
  console.log("Server lisiting at port 5000");
});
