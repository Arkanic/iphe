module.exports = new class {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return y;
    }
    set y(y) {
        this._y = y;
    }
}