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

const io = require("socket.io").listen(server);

const ships = require("./server/game/types/ships");

let players = {};

io.sockets.on("connection", (socket) => {
    socket.on("player-join", () => {
        players[socket.id] = new ships.gunner((Math.random() * 100) - 50, (Math.random() * 100) - 50);
    });
    socket.on("disconnect", () => {
        delete players[socket.id];
        socket.broadcast.emit("player-leave");
    })
    socket.on("movement", (movement) => {
        players[socket.id].movementInput(movement);
        players[socket.id].update();
    })
});