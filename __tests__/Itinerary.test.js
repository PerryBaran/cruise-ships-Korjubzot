const {Port} = require('../src/ships.js');
const Itinerary = require('../src/itinerary.js');

describe('Itinerary', () => {
    it('instantiates Itinerary object', () => {
        expect (new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const spithead = new Port('Spithead');
        const botanyBay = new Port('Botany Bay');

        const itinerary = new Itinerary([spithead, botanyBay]);

        expect(itinerary.ports).toEqual([spithead, botanyBay])
    });
})