const {Ship, Port} = require('../src/ships.js');

describe ('Port', () => {
    it('instantiates Port object', () => {
        expect(new Port('Spithead')).toBeInstanceOf(Object);
    })

    it('checks name of Port', () => {
        const port = new Port;
        port.name = 'Spithead';

        expect(port.name).toEqual('Spithead');
    })

    describe('adds and removes ports', () => {
        
        let port;
    
        beforeEach(() => {
            port = new Port('Spithead')
        })
    
        it('adds a Ship to Port', () => {
            const ship = {};
    
            port.addShip(ship);
            
            expect(port.ships).toContain(ship);
        })
    
        it('can remove a ship from Port', () => {
            const Supply = {};
            const Sirius = {};
    
            port.addShip(Supply);
            port.addShip(Sirius);
    
            port.removeShip(Supply);
        })
    })
})