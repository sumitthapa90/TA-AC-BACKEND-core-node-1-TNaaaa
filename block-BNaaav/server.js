var http = require("http");
var fs = require("fs");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === "./") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.url === "./about") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./about.html").pipe(res);
  } else if (
    req.url.split(".").pop() === "jpg" ||
    req.url.split(".").pop() === "png"
  ) {
    res.setHeader("Content-Type", "image/jpg");
    fs.createReadStream(`./${req.url}`).pipe(res);
  } else if (req.url.split(".").pop() === "jpg") {
    res.setHeader("Content-Type", "text/js");
    fs.createReadStream(`./${req.url}`).pipe(res);
  } else {
    res.statusCode = 404;
    res.ens("Page not found");
  }
}

server.listen(5500, () => {
  console.log("server listi at port 5500");
});
