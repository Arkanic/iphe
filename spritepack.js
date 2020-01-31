const fs = require("fs");
const path = require("path");
const Spritesmith = require("spritesmith");

const directoryPath = path.join(__dirname, "shared/img");

let sprites = [];

fs.readdir(directoryPath, (err, files) => {
    if(err) {
        return console.log("couldn't find folder.");
    }

    files.forEach((file) => {
        console.log("[Generator]: found " + file);
        sprites.push("./shared/img/" + file);
    });
    console.log(sprites);
});

Spritesmith.run({
    src: sprites,
    padding: 2
}, function handleResult(err, result) {
    if(err) {
        throw err;
    }
    fs.writeFileSync(__dirname + "/shared/img_output/sprites.png", result.img);
    fs.writeFileSync(__dirname + "/shared/img_output/sprites.json", JSON.stringify(result.coordinates));
    console.log(result.coordinates);
    console.log(result.properties);
});