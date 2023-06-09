const apliAnalogiki = (percentages, threshold) => {
    if(percentages.map(percentage => typeof percentage !== 'number').includes(true)) {
        throw new Error('Percentages must be numbers!');
    } else {
        try {
            const seats = 300;
            const seatDistribution = [];
            const eligiblePercentages = percentages.filter(percentage => percentage >= threshold);
            const totalEligiblePercentages = eligiblePercentages.reduce((a, b) => a + b, 0);

            eligiblePercentages.forEach(percentage => {
                const ratioOfTotal = percentage / totalEligiblePercentages;
                const seatsForParty = Math.round(ratioOfTotal * seats);
                seatDistribution.push(seatsForParty);
            });

            const totalSeatsDistributed = seatDistribution.reduce((a, b) => a + b, 0);
            const remainingSeats = seats - totalSeatsDistributed;

            if(remainingSeats > 0) {
                const remainingDistribution = [];
                eligiblePercentages.forEach(percentage => {
                    const ratioOfTotal = percentage / totalEligiblePercentages;
                    const seatsForParty = Math.round(ratioOfTotal * remainingSeats);
                    remainingDistribution.push(seatsForParty);
                });

                for(let i=0; i<remainingDistribution.length; i++) {
                    seatDistribution[i] += remainingDistribution[i];
                }
            }

            return seatDistribution;
        } catch(error) {
            console.error(error);
            alert(error);
        }
    }
}

const enisximeniAnalogiki = (percentages, threshold) => {
    if(percentages.map(percentage => typeof percentage !== 'number').includes(true)) {
        throw new Error('Percentages must be numbers!');
    } else {
        try {
            let seats = 300;
            const seatDistribution = [];
            const eligiblePercentages = percentages.filter(percentage => percentage >= threshold);
            const totalEligiblePercentages = eligiblePercentages.reduce((a, b) => a + b, 0);

            const getBonus = () => {
                if(eligiblePercentages[0] >= 25) {
                    let bonus = 20;
                    for(let i=25; i<=40; i+=0.5) {
                        bonus += 1;
                    }
                    return bonus;
                }
            }

            seats -= getBonus();

            eligiblePercentages.forEach(percentage => {
                const ratioOfTotal = percentage / totalEligiblePercentages;
                const seatsForParty = Math.round(ratioOfTotal * seats);
                seatDistribution.push(seatsForParty);
            });

            seatDistribution[0] += getBonus();

            return seatDistribution;
        } catch(error) {
            console.error(error);
            alert(error);
        }
    }
}

module.exports = {
    apliAnalogiki,
    enisximeniAnalogiki
}