const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

const server = http.createServer(handleRequest);

const port = process.env.PORT || 3000;

server.listen(port);

function handleRequest(request, response) {
  let pathname = request.url;

  if(pathname == "/") {
    pathname = "/client/play.html";
  }

  let ext = path.extname(pathname);

  let typeExt = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png"
  };

  let contentType = typeExt[ext] || "text/plain";

  fs.readFile(__dirname + pathname, function(error, data) {
    if(error) {
      response.writeHead(500);
      return response.end("Error loading: " + pathname);
    }
    response.writeHead(200, {"Content-Type": contentType});
    response.end(data);
  });
}
