const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const handleRequest = require('./server/filehandle/handleRequest');

const server = http.createServer(handleRequest);
const port = process.env.PORT || 3000;
server.listen(port);