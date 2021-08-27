const fs = require("fs");

fs.readFile("./content.md", (err, file) => {
  console.log(file.toString());
});

let runSyn = fs.readFile("./content.md", "utf-8");

console.log(runSyn);

let buff1 = Buffer.alloc(10);

console.log(buff1);

buff1.write("Welcome to buffer");
console.log(buff1.toString());
