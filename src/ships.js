function Ship(name, startingPort, startingPassengers,) {
    this.name = name;
    this.startingPort = startingPort;
    this.startingPassengers = startingPassengers;
}

Ship.prototype.setSail = function(destinationPort) {
    this.startingPort = destinationPort;
}

module.exports = Ship;