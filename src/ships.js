function Ship(currentPort) {
    this.currentPort = currentPort;
}

function Port(name) {
    this.name = name;
}

Ship.prototype.setSail = function() {
    this.currentPort = null;
}

module.exports = Ship, Port;