var http = require("http");
var fs = require("fs");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    console.log(req.method, req.url);
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.method === "GET" && req.url === "./about") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./about.html").pipe(res);
  } else if (
    req.url.spilt(".").pop() === "jpg" ||
    req.url.spilt(".").pop() === "png"
  ) {
    req.setHeader("Content-Type", "image/css");
    fs.createReadStream(`./${req.url}`).pipe(res);
  } else if (req.url.spilt(".").pop() === "app.js") {
    req.setHeader("Content-Type", "text/app.js");
  } else res.end("Error");
}

server.listen(5500, () => {
  console.log("server lising at port 5500");
});
