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
        pathname = "/index.html";
    }
    pathname = "/client" + pathname;
    let ext = path.extname(extname);
    const typeExt = {
        ".html": "text/html",
        ".htm": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".json": "application/json"
    };
    let contentType = typeExt[ext] || "text/plain";

    fs.readFile(__dirname + pathname, function(error, data) {
        if(error) {
            response.writeHead(500);
            return response.end("Error loading: " + pathname);
        } else {
            response.writeHead(200, {"Content-Type": contentType});
            response.end(data);
        }
    });
}