const {Ship, Port} = require('../src/ships.js');

describe ('Port object', () => {
    it('instantiates Port object', () => {
        expect(new Port('Spithead')).toBeInstanceOf(Object);
    })

    it('checks name of Port', () => {
        const port = new Port;
        port.name = 'Spithead';

        expect(port.name).toEqual('Spithead');
    })

    it('adds a Ship to Port', () => {
        const port = new Port('Spithead');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    })

    it('can remove a ship from Port', () => {
        const port = new Port('Spithead');
        const Supply = {};
        const Sirius = {};

        port.addShip(Supply);
        port.addShip(Sirius);

        port.removeShip(Supply);
    })
})