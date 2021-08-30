var url = require("url");
var urlString =
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male";
const parsedUrl = url.parse(urlString, true);
console.log(parsedUrl);
