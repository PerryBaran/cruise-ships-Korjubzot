function Ship(name, currentPort, startingPassengers) {
    this.name = name;
    this.currentPort = currentPort;
    this.startingPassengers = startingPassengers;
    this.port;
}

function Port(name) {
    this.name = name;
}

Ship.prototype.setSail = function() {
    this.currentPort = null;
}

module.exports = Ship, Port;