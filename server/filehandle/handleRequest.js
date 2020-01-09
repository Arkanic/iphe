const typeExt = require("./ext/types.json");
const path = require("path");
const fs = require("fs");
module.exports = function(request, response) {
    let pathname = request.url;
    if(pathname == "/") {
        pathname = "/index.html";
    }
    pathname = "/client" + pathname;
    let ext = path.extname(extname)
    let contentType = typeExt[ext] || "text/plain";

    fs.readFile(__dirname + pathname, function(error, data) {
        if(error) {
            response.writeHead(500);
            return response.end("Error loading: " + pathname);
        } else {
            response.writeHead(200, {"Content-Type": contentType});
            return response.end(data);
        }
    });
};