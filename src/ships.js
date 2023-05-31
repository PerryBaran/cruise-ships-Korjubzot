function Ship(itinerary) {
  this.itinerary = itinerary;
  this.previousPort = null;
  this.currentPort = null;
}

Ship.prototype.setSail = function () {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === -1) {
    throw new Error("Ship is not currently docked at any port");
  }

  if (currentPortIndex === itinerary.ports.length - 1) {
    throw new Error("End of itinerary reached");
  }

  this.previousPort = this.currentPort;
  this.currentPort = null;

  const ships = this.previousPort.ships;
  const shipIndex = ships.indexOf(this);
  if (shipIndex !== -1) {
    ships.splice(shipIndex, 1);
  }
};

Ship.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  if (previousPortIndex === -1) {
    throw new Error("Ship has no previous port set");
  }

  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};

function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (ship) {
  const shipIndex = this.ships.indexOf(ship);
  if (shipIndex !== -1) {
    this.ships.splice(shipIndex, 1);
  }
};

module.exports = { Ship, Port };
