const Ship = require('../src/ships.js');

describe ('constructor', () => {
    it('instantiates Ship object', () => {
        expect (new Ship('HMS Supply')).toBeInstanceOf(Object);
    })

    it('sets name of ship', () => {
        const ship = new Ship('HMS Supply');

        expect(ship.name).toEqual('HMS Supply');
    });

    it('sets startingPort', () => {
        const ship = new Ship('HMS Supply');
        ship.startingPort = 'Spithead';

        expect(ship.startingPort).toEqual('Spithead');
    });

    it('sets startingPassengers', () => {
        const ship = new Ship('HMS Supply');
        ship.startingPassengers = 55;

        expect(ship.startingPassengers).toEqual(55);
    });

    it('tests setSail function', () => {
        const ship = new Ship('HMS Supply');
        ship.startingPort = 'Spithead';

        ship.setSail('Botany Bay');

        expect(ship.startingPort).toEqual('Botany Bay');
    })
});