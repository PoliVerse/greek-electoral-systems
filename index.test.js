const { apliAnalogiki, enisximeniAnalogiki } = require('./index');

/* Random Tests (2 passed, 2 failed) */
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

/* 2019 Election Test */
test('enisximeniAnalogiki returns proportional distribution with a majority bonus and a different threshold', () => {
    expect(enisximeniAnalogiki([39.85, 31.53, 8.10, 5.30, 3.70, 3.44], 3)).toStrictEqual([158, 86, 22, 15, 10, 9]);
});

/* 2023 Election Tests */
test('apliAnalogiki returns simple proportional distribution', () => {
    expect(apliAnalogiki([40.79, 20.07, 11.46, 7.23, 4.45], 3)).toStrictEqual([146, 71, 41, 26, 16]);
});

test('enisximeniAnalogiki returns proportional distribution with a majority bonus and a different threshold', () => {
    expect(enisximeniAnalogiki([40.56, 17.83, 11.84, 7.69, 4.68, 4.44, 3.69, 3.17], 3)).toStrictEqual([158, 47, 32, 21, 12, 12, 10, 8]);
});