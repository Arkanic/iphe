const vec2 = require("../../physics/vec2");
const constants = require("../world/constants.js");

module.exports = new class {
    constructor(name, position, weight, thrust, turnRate) {
        this.name = name;
        this.position = new vec2(position.x, position.y);
        this.delta = new vec2(0, 0);
        this.angle = 0;
        this.deltaangle = 0;
        this.weight = weight;
        this.thrust = thrust;
        this.turnRate = turnRate;
    }
    movementInput(movement) {
        if(movement.up) {
            this.delta.x += Math.cos(this.angle) * thrust;
            this.delta.y += Math.sin(this.angle) * thrust;
        }
        if(movement.left) {
            this.deltaangle -= this.turnRate;
        }
        if(movement.right) {
            this.deltaangle += this.turnRate;
        }
    }
    update() {
        this.position.x += this.delta.x;
        this.position.y += this.delta.y;
        this.angle += this.deltaangle;
        this.delta.x *= constants.drag;
        this.delta.y *= constants.drag;
        this.delta.y -= this.weight;
        this.deltaangle *= constants.drag;
    }
}