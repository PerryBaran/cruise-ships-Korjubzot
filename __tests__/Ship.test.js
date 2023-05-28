const Ship = require('../src/ships.js');
const Port = require('../src/ships.js');
const dock = require('../src/ships.js');


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

    it('can dock at a different port', () => {
        const spithead = new Port('Spithead');
        const ship = new Ship(spithead);

        const botanyBay = new Port('Botany Bay');

        ship.dock(botanyBay);

        expect(ship.currentPort).toBe(botanyBay);
    })
});