const Ship = require('../src/ships.js');
const Port = require('../src/ships.js');

describe ('Ship constructor', () => {
    it('instantiates Ship object', () => {
        expect (new Ship('HMS Supply')).toBeInstanceOf(Object);
    })

    it('sets name of ship', () => {
        const ship = new Ship('HMS Supply');

        expect(ship.name).toEqual('HMS Supply');
    });

    it('sets currentPort', () => {
        const ship = new Ship('HMS Supply');
        ship.currentPort = 'Spithead';

        expect(ship.currentPort).toEqual('Spithead');
    });

    it('sets startingPassengers', () => {
        const ship = new Ship('HMS Supply');
        ship.startingPassengers = 55;

        expect(ship.startingPassengers).toEqual(55);
    });

    it('tests setSail function', () => {
        const ship = new Ship('HMS Supply');
        ship.currentPort = 'Spithead';

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })
});
