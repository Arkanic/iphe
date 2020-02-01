const Ship = require("../ship/Ship");
const vec2 = require("../../physics/vec2");

module.exports = {
    gunner: new class extends Ship {
        constructor(position) {
            this.position = new vec2(position.x, position.y);
            super("gunner", this.position, 0.5, 1.0, 0.01);
        }
    }
}