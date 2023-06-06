# Greek Electoral Systems
https://img.shields.io/badge/license-MIT-blue.svg

The "Greek Electoral Systems" package provides functionalities to compute seat distribution using simple and strengthened proportion for Greek electoral systems. It allows users to calculate the allocation of seats based on party percentages and configurable thresholds.

# Features
- Compute seat distribution using simple proportion.
- Compute seat distribution using strengthened proportion.
- Support for configurable thresholds to determine eligible parties.
- Handle bonus seats for the first party based on a predefined rule.

# Installation
The package can be installed via npm:
`npm install greek-electoral-systems`

# Usage
```
const { apliAnalogiki, enisximeniAnalogiki } = require('greek-electoral-systems');

const percentages = [41.83, 38.1, 8.15, 5.04, 3.8];
const threshold = 3;

const simpleSeatDistribution = apliAnalogikin(percentages, threshold);
console.log('Simple Proportion Seat Distribution:', simpleSeatDistribution);

const strengthenedSeatDistribution = enisximeniAnalogiki(percentages, threshold);
console.log('Strengthened Proportion Seat Distribution:', strengthenedSeatDistribution);
```

# API
### `apliAnalogiki(percentages, threshold)`:
Calculates seat distribution using the simple proportion method.

- `percentages (Array)`: An array of party percentages.
- `threshold (number)`: The minimum threshold percentage required for a party to be eligible.

Returns an array representing the seat distribution for each party.

### `enisximeniAnalogiki(percentages, threshold)`:
Calculates seat distribution using the strengthened proportion method.

- `percentages (Array):` An array of party percentages.
- `threshold (number)`: The minimum threshold percentage required for a party to be eligible.

Returns an array representing the seat distribution for each party.

# License
This package is open source and available under the <u>MIT License</u>.