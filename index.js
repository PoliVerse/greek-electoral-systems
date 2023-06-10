const apliAnalogiki = (percentages, threshold) => {
    if(percentages.map(percentage => typeof percentage !== 'number').includes(true)) {
        throw new Error('Percentages must be numbers!');
    } else {
        try {
            const seats = 300;
            const seatDistribution = [];
            const eligiblePercentages = percentages.filter(percentage => percentage >= threshold);
            const totalEligiblePercentages = eligiblePercentages.reduce((a, b) => a + b, 0);

            percentages.forEach(percentage => {
                if(eligiblePercentages.includes(percentage)) {
                    const ratioOfTotal = percentage / totalEligiblePercentages;
                    const seatsForParty = Math.round(ratioOfTotal * seats);
                    seatDistribution.push(seatsForParty);
                } else {
                    seatDistribution.push(0);
                }
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

            let biggestPartyIndex = 0;
            for(let i=1; i<eligiblePercentages.length; i++) {
                if(eligiblePercentages[i] > eligiblePercentages[biggestPartyIndex]) biggestPartyIndex = i;
            }

            const getBonus = () => {
                if(eligiblePercentages[biggestPartyIndex] >= 25) {
                    let bonus = 20;
                    for(let i=25; i<=40; i+=0.5) {
                        bonus += 1;
                    }
                    return bonus;
                }
            }

            seats -= getBonus();

            percentages.forEach(percentage => {
                if(eligiblePercentages.includes(percentage)) {
                    const ratioOfTotal = percentage / totalEligiblePercentages;
                    const seatsForParty = Math.round(ratioOfTotal * seats);
                    seatDistribution.push(seatsForParty);
                } else {
                    seatDistribution.push(0);
                }
            });

            while(distributedSeats < seats) {
                let maxRatioIndex = 0;
                for(let i=1; i<seatDistribution.length; i++) {
                    if(percentages[i]/totalEligiblePercentages > percentages[maxRatioIndex]/totalEligiblePercentages) maxRatioIndex = i;
                }
                seatDistribution[maxRatioIndex]++;
                distributedSeats++;
            }

            seatDistribution[biggestPartyIndex] += getBonus();

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