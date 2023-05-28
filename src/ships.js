function Ship(name, startingPort, startingPassengers) {
    this.name = name;
    this.startingPort = startingPort;
    this.startingPassengers = startingPassengers;
    this.port;
}

function Port(name) {
    this.name = name;
}

Ship.prototype.setSail = function() {
    this.startingPort = null;
}

module.exports = Ship, Port;