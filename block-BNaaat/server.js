// Create a http server and use readFile and createReadStream to read a file and send the data into response.
// - add a listener on port 5555
// - create a file node.html
// - handle GET request on '/file' route to read node.html using fs.readFile
// - handle GET request on '/stream' route to read node.html using fs.createReadStream

// read file

var http = require("http");

var fs = require("fs");
var server = http.createServer(handleServer);

function handleServer(res, req) {
  if (req.method === "GET" && req.url === "./file") {
    fs.readFile("./node.html", (err, content) => {
      if (err) console.log(error);
      res.end(content);
    });
  }
}

server.listen(5555, () => {
  console.log("server will lisitin at port 5555");
});

// create Read Stream

var http = require("http");

var fs = require("fs");
var server = http.createServer(handleServer);

function handleServer(res, req) {
  if (req.method === "GET" && req.url === "./file") {
    fs.createReadStream("./node.html").pipe(res);
  }
}

server.listen(5555, () => {
  console.log("server will lisitin at port 5555");
});
