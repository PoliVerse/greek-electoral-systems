const { apliAnalogiki, enisximeniAnalogiki } = require('./index');

test('apliAnalogiki returns simple proportional distribution', () => {
    expect(apliAnalogiki([41.83, 38.1, 8.15, 5.04, 3.8], 3)).toStrictEqual([129, 118, 25, 16, 12]);
});

test('apliAnalogiki returns simple proportional distribution with a different threshold', () => {
    expect(apliAnalogiki([41.83, 38.1, 8.15, 5.04, 3.8], 5)).toStrictEqual([135, 123, 26, 16]);
});

test('enisximeniAnalogiki returns proportional distribution with a majority bonus', () => {
    expect(enisximeniAnalogiki([41.83, 38.1, 8.15, 5.04, 3.8], 3)).toStrictEqual([158, 98, 21, 13, 10]);
});

test('enisximeniAnalogiki returns proportional distribution with a majority bonus and a different threshold', () => {
    expect(enisximeniAnalogiki([41.83, 38.1, 8.15, 5.04, 3.8], 5)).toStrictEqual([163, 102, 22, 13]);
});