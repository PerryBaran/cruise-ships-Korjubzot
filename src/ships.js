function Ship(itinerary) {
    console.log(itinerary);
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
}

Ship.prototype.dock = function(port) {
    this.currentPort = port;
}

Ship.prototype.setSail = function() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
}

function Port(name) {
    this.name = name;
}

module.exports = { Ship, Port };