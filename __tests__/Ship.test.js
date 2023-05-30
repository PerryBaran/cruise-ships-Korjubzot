const {Ship, Port} = require('../src/ships.js');
// const Port = require('../src/ships.js');
const dock = require('../src/ships.js');
const Itinerary = require('../src/itinerary.js')


describe ('constructor', () => {
    it('instantiates Ship object', () => {
        const port = new Port('Spithead');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    })

    it('gets added to port on instatiation', () => {
        const port = new Port('Spithead');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(port.ships).toContain(ship);
    })

    it('has a starting port', () => {
        const port = new Port('Spithead');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
        const spithead = new Port('Spithead');
        const botanyBay = new Port('Botany Bay');
        const itinerary = new Itinerary([spithead, botanyBay])
        const ship = new Ship(itinerary)

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(spithead.ships).not.toContain([ship]);
    })

    it('can dock at a different port', () => {
        const spithead = new Port('Spithead');
        const botanyBay = new Port('Botany Bay');
        const itinerary = new Itinerary([spithead, botanyBay])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(botanyBay);
        expect(botanyBay.ships).toContain(ship);
    })

    it('can\'t sail further than its itinerary', () => {
        const spithead = new Port('Spithead');
        const botanyBay = new Port('Botany Bay');
        const itinerary = new Itinerary([spithead, botanyBay])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
});