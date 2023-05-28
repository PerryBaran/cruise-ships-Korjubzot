const Ship = require('../src/ships.js');
const Port = require('../src/ships.js');

describe ('constructor', () => {
    it('instantiates Ship object', () => {
        expect (new Ship('HMS Supply')).toBeInstanceOf(Object);
    })

    it('has a port', () => {
        const port = new Port('Spithead');
        const ship = new Ship(port);

        expect(ship.currentPort).toEqual(port);
    });

    // dummied out
    xit('sets name of ship', () => {
        const ship = new Ship('HMS Supply');

        expect(ship.name).toEqual('HMS Supply');
    });

    // dummied out
    xit('sets startingPassengers', () => {
        const ship = new Ship('HMS Supply');
        ship.startingPassengers = 55;

        expect(ship.startingPassengers).toEqual(55);
    });

    it('can set sail', () => {
        const port = new Port('Spithead');
        const ship = new Ship(port)

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })
});