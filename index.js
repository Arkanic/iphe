const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const typeExt = require("./server/types/types");
const unknownfile = require("./shared/error/unknownfile");

const server = http.createServer(handleRequest);
const port = process.env.PORT || 3000;
server.listen(port);

function handleRequest(request, response) {
  let pathname = request.url;

  if(pathname == "/") {
    pathname = "/index.html";
  }
    
    pathname = "/client" + pathname;
  

  let ext = path.extname(pathname);

  let contentType = typeExt[ext] || "text/plain";

  fs.readFile(__dirname + pathname, function(error, data) {
    if(error) {
      response.writeHead(500);
      return response.end(unknownfile);
    }
    response.writeHead(200, {"Content-Type": contentType});
    response.end(data);
  });
}