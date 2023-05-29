const {Port} = require('../src/ships.js');

describe ('Port object', () => {
    it('instantiates Port object', () => {
        expect(new Port('Spithead')).toBeInstanceOf(Object);
    })

    it('checks name of Port', () => {
        const port = new Port;
        port.name = 'Spithead';

        expect(port.name).toEqual('Spithead');
    })
})