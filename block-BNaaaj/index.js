console.log("Welcome to Node.js");

//

var os = require("os");
//
console.log(os.cpus().length);
console.log(os.freemem);
console.log(os.uptime);
console.log(os.version);

//

let { readFile, unlike } = require("fs");

readFile("./content.md", (err, content) => {
  console.log(content.toString());
});

readFile("./content.md", (err, content) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Delete File: ./content.md");
  }
});

// buffer

let buff1 = Buffer.alloc(12);

buff1;

let buff2 = Buffer.allocUnsafe(15);
buff2.write("Welcome to Node.js");

console.log(buff2.toString());

//

var url = require("url");

var address = "https://airindia.com/fares/calculate?from=delhi&to=detroitand";

var passedUrl = url.parse(address, true);

console.log(passedUrl.toString());

console.log(passedUrl.pathname, passedUrl.protocol);
