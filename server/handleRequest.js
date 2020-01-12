const typeExt = require("./types/types");
const path = require("path");
const fs = require("fs");
const http = require("http");
const url = require("url");

module.exports = function(request, response) {
  let pathname = request.url;

  if(pathname == "/") {
    pathname = "/index.html";
  }
  pathname = "/client" + pathname;

  let ext = path.extname(pathname);

  let contentType = typeExt[ext] || "text/plain";

  fs.readFile(pathname, function(error, data) {
    if(error) {
      response.writeHead(500);
      return response.end("Error loading: " + pathname);
    }
    response.writeHead(200, {"Content-Type": contentType});
    response.end(data);
  });
}