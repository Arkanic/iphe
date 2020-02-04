let socket;
let sessionid = "";
let playerarray = [];
let me = {};
function setup() {
    socket = io.connect("https://iphe.herokuapp.com");
    createCanvas(windowWidth, windowHeight);

    socket.emit("player-join");
    socket.on("connect", () => {
        sessionid = socket.io.engine.id;
    });
    socket.on("player-leave", (id) => {
        delete playerarray[id];
    });
    socket.on("state", (players) => {
        for(let p in players) {
            if(p == sessionid) {
                me = players[p];
            } else {
                playerarray[p] = players[p];
            }
        }
    });
}

function draw() {
    background(255, 255, 255);
    push();
    translate(width/2, height/2);
    translate(me.position.x, me.position.y);
    rotate(me.angle);
    fill(0, 0, 0);
    ellipse(-10, -5, 20, 10);
    pop();
}