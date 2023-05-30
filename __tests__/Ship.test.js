const {Ship, Port} = require('../src/ships.js');
const dock = require('../src/ships.js');
const Itinerary = require('../src/itinerary.js')



describe ('Ship', () => {

    describe ('Ship tests', () => {

        let port;
        let itinerary;
        let ship;

        beforeEach(() => {
            port = new Port('Spithead');
            itinerary = new Itinerary([port]);
            ship = new Ship(itinerary);
        });

        it('instantiates Ship object', () => {
            expect(ship).toBeInstanceOf(Object);
        })
    
        it('gets added to port on instatiation', () => {
            expect(port.ships).toContain(ship);
        })
    
        it('has a starting port', () => {
            expect(ship.currentPort).toBe(port);
        });
    })
})

    describe('Ship function tests', () => {

        let spithead;
        let botanyBay;
        let itinerary;
        let ship;

        beforeEach(() => {
            spithead = new Port('Spithead');
            botanyBay = new Port('Botany Bay');
            itinerary = new Itinerary([spithead, botanyBay]);
            ship = new Ship(itinerary);
        })

        it('can set sail', () => {
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(spithead.ships).not.toContain([ship]);
        })
    
        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(botanyBay);
            expect(botanyBay.ships).toContain(ship);
        })
    
        it('can\'t sail further than its itinerary', () => {
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
});